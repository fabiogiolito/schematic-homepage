<script>
  import { onMount } from 'svelte';
  import { animate, scroll, inView } from 'motion';
  import Heading from "$lib/components/Heading.svelte";
  import FeatureBlock from "$lib/components/FeatureBlock.svelte";
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  let circlesContainer;
  let circleLeft;
  let circleRight;
  let gridEl;

  onMount(() => {
    // Circles: scroll-linked, complete when container reaches center of screen
    scroll(
      animate(circleLeft, { translate: ['0% 0', '25% 0'] }, { easing: 'linear' }),
      { target: circlesContainer, offset: ['start end', '35% center'] }
    );
    scroll(
      animate(circleRight, { translate: ['0% 0', '-25% 0'] }, { easing: 'linear' }),
      { target: circlesContainer, offset: ['start end', '35% center'] }
    );

    // Text grid: hidden initially, fades in once circles area is near center
    gridEl.style.opacity = '0';
    gridEl.style.transform = 'translateY(30px)';
    inView(gridEl, () => {
      animate(gridEl,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
        { duration: 0.6, easing: [0.22, 1, 0.36, 1] }
      );
    }, { margin: '0px 0px -60% 0px' });
  });
</script>

<!-- Marketplace -->
<section id="Marketplace" class="scroll-mt-16 py-24 lg:py-40  bg-background-secondary">
  <div class="container mx-auto px-4 space-y-16 md:space-y-40">

    <div use:scrollReveal><Heading large center
      tag="The Global Fund Marketplace"
      title="Expand Beyond Your Existing Network"
      text="The world's first AI-augmented marketplace connecting verified LPs with high-performance GPs. Move beyond your Rolodex and into a global ecosystem of intent."
    /></div>

    <div class="relative overflow-x-clip space-y-16 lg:space-y-0">

      <!-- Circles -->
      <div bind:this={circlesContainer} class="relative aspect-2/1 lg:absolute inset-0 scale-130 sm:scale-110 lg:scale-65 lg:-translate-y-10 xl:-translate-y-15 2xl:-translate-y-40">
        <div bind:this={circleLeft} class="absolute right-1/2 rounded-full w-1/2 aspect-square bg-conic-90 from-rose-600/75 via-amber-600/50 to-amber-600/10"></div>
        <div bind:this={circleRight} class="absolute left-1/2 rounded-full w-1/2 aspect-square -bg-conic-90 from-indigo-600/75 via-emerald-600/50 to-lime-600/10"></div>
      </div>

      <!-- Grid -->
      <div bind:this={gridEl} class="grid grid-cols-1 md:grid-cols-6 gap-10 lg:gap-0 relative">
        
        <!-- Marketplace for LPs -->
        <div class="col-span-3 lg:col-span-2 md:py-16 space-y-6 xl:space-y-16">
          <p class="xl:pr-[50%]">For LPs deploying capital</p>

          <div class="border-t border-foreground-tertiary/50 pt-4 lg:pr-[30%] xl:pr-[50%]">
            <FeatureBlock 
              title="The Mandate Matcher"
              text="Don't browse; receive. Our AI filters fund opportunities based on your specific dry powder strategy, vintage requirements, and ESG mandates."
            />
          </div>
          
          <div class="border-t border-foreground-tertiary/50 pt-4 lg:pr-[30%] xl:pr-[50%]">
            <FeatureBlock 
              title="Pre-Vetted Data Rooms"
              text="Skip the initial back-and-forth. Access standardized data sets and AI-generated summaries of track records before the first call."
            />
          </div>
        </div>

        <!-- Spacer -->
        <div class="hidden lg:block col-span-2"></div>

        
        <!-- Marketplace for GPs -->
        <div class="col-span-3 lg:col-span-2 md:py-16 space-y-6 xl:space-y-16 md:text-right lg:text-left">
          <p class="lg:pl-[30%] xl:pl-[50%]">For GPs raising capital</p>

          <div class="border-t border-foreground-tertiary/50 pt-4 lg:pl-[30%] xl:pl-[50%]">
            <FeatureBlock 
              title="High-Intent Matching"
              text="Your fund is placed directly in the feeds of LPs who have active allocations for your specific sector and geography."
            />
          </div>
          
          <div class="border-t border-foreground-tertiary/50 pt-4 lg:pl-[30%] xl:pl-[50%]">
            <FeatureBlock 
              title="Global Visibility, Local Privacy"
              text="Access a global pool of family offices, endowments, and institutional investors that were previously outside your geographic reach."
            />
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

