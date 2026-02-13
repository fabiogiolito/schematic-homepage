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

  // STATE ==================
  
  let currentCard = $state(false);
  let showContent = $state(false);
  let mouseX = $state(0);
  let scrollImpact = $state(0);
  let contentTop = $state();
  let screenLG = $state(false);

  let LPCardStateClass = $derived(showContent ? 'card-static' : currentCard == "LP" ? 'card-expanded' : 'card-collapsed');
  let GPCardStateClass = $derived(showContent ? 'card-static' : currentCard == "GP" ? 'card-expanded' : 'card-collapsed');
  let highlightedCard = $derived(mouseX > 0 ? "GP" : "LP");

  // FUNCTIONS ===============
  
  function handleCardClick(selected) {
    currentCard = selected;
    const container = document.getElementById("content");
    container.scrollIntoView({ behavior: "smooth" });

    window.setTimeout(() => { showContent = true; }, 600);
  }

  function handleScroll() {
    contentTop = contentTop || document.getElementById("content").getBoundingClientRect().top;
    const scrollMin = contentTop * 0.4;
    const scrollMax = contentTop * 0.8;
    scrollImpact = Math.max(0, Math.min(1, (window.scrollY - scrollMin ) / (scrollMax - scrollMin)));
    // Auto trigger
    if (screenLG && scrollImpact >= 1 && !currentCard) handleCardClick(highlightedCard);
  }

  function handleMouseMove(e) {
    mouseX = Math.round((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2) * 100) / 100;
  }

  function handleResize(e) {
    screenLG = window.innerWidth >= "1024";
  }


  // LOAD ====================

  onMount(handleResize);

</script>

<svelte:window
  onmousemove={handleMouseMove}
  onscroll={handleScroll}
  onresize={handleResize}
></svelte:window>

<Navbar />
<Hero />

<!--
  LG+ screens hide screen content and show two cards for Raise / Deploy capital.
  Selecting a card displays that card's content first, the other card's content second, and the rest of the content after.
-->

<div id="content" class="w-screen min-h-screen relative flex flex-col {currentCard == "GP" ? 'flex-col-reverse' : ''}"
  style="
    --mouseX: {mouseX};
    --scrollImpact: {scrollImpact};
  "
>
  
  <!-- Card LP -->
  <div class="
      card card-LP {LPCardStateClass} {highlightedCard == "LP" ? 'z-10' : ''}
      py-24 space-y-24 sm:py-40 sm:space-y-40 xl:py-64 xl:space-y-64
      bg-white text-foreground-primary
    "
    style="--extra-scale: {highlightedCard == "LP" ? 0.25 * scrollImpact : 0};"
  >
    <Heading large center
      tag="For LPs Deploying Capital"
      title="The Inbound Intelligence Engine"
      subtitle="Automate your intake. Accelerate your mandate. Transform a chaotic inbox into a streamlined pipeline."
      text="Schematic&apos;s AI analyzes every inbound request against your specific investment criteria the moment it arrives."
    />
    <div class="{!showContent ? 'lg:hidden' : ''} px-4 sm:px-10 space-y-24 sm:space-y-40 lg:space-y-80">
      <ContentLP />
    </div>
    <button class="hidden absolute inset-0 cursor-pointer {!showContent ? 'lg:block' : ''}" onclick={() => handleCardClick("LP")} aria-label="Explore LP Features"></button>
  </div>

  <!-- Card GP -->
  <div class="
      card card-GP {GPCardStateClass} {highlightedCard == "GP" ? 'z-10' : ''}
      py-24 space-y-24 sm:py-40 sm:space-y-40 xl:py-64 xl:space-y-64
      bg-tint-dark text-white
    "
    style="--extra-scale: {highlightedCard == "GP" ? 0.25 * scrollImpact : 0};"
  >
    <Heading large center
      tag="For GPs Deploying Capital"
      title="The Seamless Closing Engine"
      subtitle="Shorten the cycle. Secure the commitment. Eliminate the administrative friction tax."
      text="Schematic organizes your data, automates your logistics, and removes every hurdle between an LP and a signature."
    />
    <div class="{!showContent ? 'lg:hidden' : ''} space-y-80">
      <ContentGP />
    </div>
    <button class="hidden absolute inset-0 cursor-pointer {!showContent ? 'lg:block' : ''}" onclick={() => handleCardClick("GP")} aria-label="Explore GP Features"></button>
  </div>

</div>


<!-- Rest of the page, hidden if LG screen with hidden cards -->

<div class={showContent ? '' : 'lg:hidden'}>

  <Marketplace />
  <SocialProof />
  <Security />
  <Footer />

</div>


<style lang="postcss">
  @reference "tailwindcss";
  
  @media (width >= 1024px) {
    .card {
      position: absolute;
      display: flex;
      flex-direction: column;
      transition: all cubic-bezier(0.22, 1, 0.36, 1) 500ms;
      transform-origin: bottom;
      animation: fromHidden 1s cubic-bezier(0.22, 1, 0.36, 1) backwards;
    }

    .card-collapsed {
      --card-w: 400px;
      --card-h: 520px;
      --distanceX: 2vw;

      padding: 0;
      width: var(--card-w);
      height: var(--card-h);
      border-radius: 16px;
      top: 0;
    }
    
    :global(.card-collapsed .heading-group) {
      height: 100%;
      scale: 0.75;
      justify-content: space-between;
      margin-bottom: auto;
    }

    .card-collapsed.card-LP { 
      left: calc(50% - var(--card-w) - var(--distanceX));
      scale: calc(1 + (0.25 * var(--mouseX) * -1) + var(--extra-scale));
      rotate: calc(10deg * min(0, var(--mouseX) * -1) - 1deg);
      animation-delay: 400ms;
    }
    .card-collapsed.card-GP { 
      left: calc(50% + var(--distanceX));
      scale: calc(1 + (0.25 * var(--mouseX)) + var(--extra-scale));
      rotate: calc(10deg * min(0, var(--mouseX)) * -1 + 1deg);
      animation-delay: 600ms;
    }

    .card-expanded {
      z-index: 10;
      width: 100vw;
      height: 100vh;
      left: 0;
    }

    .card-static {
      position: relative;
      min-height: 100vh;
    }


    /* Not selected card goes out of view */
    #content:has(.card-expanded) .card-collapsed {
      scale: 0;
      opacity: 0;
    }

  }

  @keyframes fromHidden {
    from {
      transform: translateY(200vh);
      opacity: 0;
    }
  }
  
</style>
