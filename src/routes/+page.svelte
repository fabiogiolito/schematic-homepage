<script>
  import { onMount, tick } from 'svelte';
  import { createLayout } from 'animejs';

  import Navbar from "$lib/content/Navbar.svelte";
  import Heading from '$lib/components/Heading.svelte';
  import FeatureBlock from '$lib/components/FeatureBlock.svelte';

  import Hero from "$lib/content/Hero.svelte";
  import ContentLP from '$lib/content/ContentLP.svelte';
	import ContentGP from '$lib/content/ContentGP.svelte';
  import Marketplace from '$lib/content/Marketplace.svelte';
  import SocialProof from "$lib/content/SocialProof.svelte";
  import Security from "$lib/content/Security.svelte";
  import Footer from "$lib/content/Footer.svelte";
  import Button from "$lib/components/Button.svelte";

  let current = $state(false);
  let showContent = $state(false);
  let animating = $state(false);
  let containerEl;
  let layoutInstance;

  onMount(() => {
    if (containerEl) {
      layoutInstance = createLayout(containerEl, {
        children: '.card-LP, .card-GP',
      });
    }
  });

  function handleCardClick(selected) {
    if (current || animating) return;
    animating = true;

    if (layoutInstance) {
      layoutInstance.update(({ root }) => {
        root.classList.remove('cards-grid');
        root.classList.add('cards-current-' + selected);
      }, {
        duration: 800,
        ease: 'outExpo',
      }).then(() => {
        showContent = true;
        animating = false;
        tick().then(() => {
          document.getElementById(selected)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      showContent = true;
      animating = false;
    }

    // Sync Svelte state so reactive class binding matches the DOM change
    current = selected;
  }

</script>

<Navbar />
<Hero />

<!--
  LG+ screens hide screen content and show two cards for Raise / Deploy capital.
  Selecting a card displays that card's content first, the other card's content second, and the rest of the content after.
-->

<div bind:this={containerEl} class="layout-container {current ? 'cards-current-' + current : 'cards-grid'}">

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="card-LP" onclick={() => handleCardClick('LP')}>

    <div class="bg-white relative z-10 space-y-24 md:space-y-40 lg:space-y-64">

      <!-- LPs Hero -->
      <section id="LP" class="bg-linear-to-b from-blue-100 to-blue-100/0
        scroll-mt-16 pt-24 lg:pt-40
      ">

        <div class="container mx-auto px-4 lg:px-10 xl:px-24">
          <Heading large center
            tag="For LPs Deploying Capital"
            title="The Inbound Intelligence Engine"
            subtitle="Automate your intake. Accelerate your mandate. Transform a chaotic inbox into a streamlined pipeline."
            text="Schematic&apos;s AI analyzes every inbound request against your specific investment criteria the moment it arrives."
          />
        </div>
      </section>

      <div class="{showContent ? '' : 'lg:hidden'} relative z-10 bg-white px-4 space-y-24 md:space-y-40 lg:space-y-64 pb-24 md:pb-40 lg:pb-64">
        <ContentLP />
      </div>
    </div>

  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="card-GP" onclick={() => handleCardClick('GP')}>

    <div class="bg-tint-dark text-white space-y-24 md:space-y-40 lg:space-y-64">
  
      <!-- GPs Hero -->
      <section id="GP" class="
        scroll-mt-16 pt-24 lg:pt-40
        bg-tint-dark text-white bg-linear-to-b from-blue-900 to-blue-900/0
      ">
        <div class="container mx-auto px-4 lg:px-10 xl:px-24">
          <Heading large center
            tag="For GPs Deploying Capital"
            title="The Seamless Closing Engine"
            subtitle="Shorten the cycle. Secure the commitment. Eliminate the administrative friction tax."
            text="Schematic organizes your data, automates your logistics, and removes every hurdle between an LP and a signature."
          />
        </div>  
      </section>

      <div class="{showContent ? '' : 'lg:hidden'} relative z-10 bg-tint-dark text-white px-4 space-y-24 md:space-y-40 lg:space-y-64 pb-24 md:pb-40 lg:pb-64">
        <ContentGP />
      </div>
    </div>

  </div>

</div>

<div class={showContent ? '' : 'lg:hidden'}>

  <Marketplace />
  <SocialProof />
  <Security />
  <Footer />

</div>


<style lang="postcss">
  @reference "tailwindcss";

  @media (min-width: 1024px) {

    .card-LP, .card-GP {
      overflow: hidden;
      transition: border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                  box-shadow 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .cards-grid {
      @apply container mx-auto px-10 grid grid-cols-2 gap-0;
    }
    .cards-current-LP {
      @apply flex flex-col;
    }

    .cards-current-GP {
      @apply flex flex-col-reverse;
    }

    .cards-grid .card-LP,
    .cards-grid .card-GP {
      @apply relative z-10 origin-top rounded-3xl overflow-hidden shadow-xl scale-75 lg:aspect-6/8 xl:aspect-6/7;
      animation: fromHidden 1s linear(0, 0.006 1.1%, 0.025 2.3%, 0.103 5%, 0.553 15.6%, 0.746 21.1%, 0.818 23.8%, 0.878 26.6%, 0.926 29.5%, 0.964 32.6%, 1.005 38.5%, 1.021 45.9%, 1.002 74.9%, 1) backwards;
      animation-delay: 1s;
    }

    .cards-grid .card-GP {
      background-color: #3B3750;
      animation-delay: 1.2s;
    }

  }



@keyframes fromHidden {
  from {
    transform: translateY(200%);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}


</style>
