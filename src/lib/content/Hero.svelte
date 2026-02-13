<script>
  import { onMount } from 'svelte';
  import { animate } from 'motion';
  import { ArrowCircleUpRight } from 'phosphor-svelte';

  import Button from "$lib/components/Button.svelte";
  import Heading from '$lib/components/Heading.svelte';

  let screenSize = $state({ w: 0, h: 0 });
  let mousePosX = $state();
  let heroContent;
  let heroCards;

  function handleWindowResize() {
    screenSize = { w: window.innerWidth, h: window.innerHeight }
  }

  function handleMouseMove(e) {
    mousePosX = Math.round((e.clientX - screenSize.w / 2) / (screenSize.w / 2) * 100) / 100;
  }

  onMount(() => {
    handleWindowResize();

    if (heroContent) {
      animate(heroContent,
        { opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
        { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
      );
    }
    if (heroCards) {
      animate(heroCards,
        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0px)'] },
        { duration: 0.8, delay: 0.2, easing: [0.22, 1, 0.36, 1] }
      );
    }
  });

</script>

<!-- <svelte:window onresize={handleWindowResize} onmousemove={handleMouseMove}></svelte:window> -->

<section id="home" class="sticky top-0 -z-10">
  <div bind:this={heroContent} class="container mx-auto text-center py-32 md:py-64 px-4 sm:px-10 space-y-6 md:space-y-20">

    <h1 class="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] font-semibold tracking-tight leading-[100%]">The New Standard for Private Capital.</h1>
    
    <div class="space-y-6 max-w-2xl mx-auto">
      <p class="text-2xl">One unified intelligence layer for GPs and LPs.</p>
      <p class="text-sm text-foreground-secondary font-light">Eliminate the friction between intent and execution. Whether you are surfacing high-conviction deals or securing your next commitment, Schematic automates the logistics of the private markets.</p>
    </div>
    
    <!-- <Button href="/#request-access">Request Access</Button> -->

  </div>
</section>
