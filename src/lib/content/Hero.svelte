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

<svelte:window onresize={handleWindowResize} onmousemove={handleMouseMove}></svelte:window>

<section id="home" >
  <div bind:this={heroContent} class="container mx-auto text-center py-32 md:py-64 px-4 sm:px-10 space-y-6 md:space-y-20">

    <h1 class="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] font-semibold tracking-tight leading-[100%]">The New Standard for Private Capital.</h1>
    
    <div class="space-y-6 max-w-2xl mx-auto">
      <p class="text-2xl">One unified intelligence layer for GPs and LPs.</p>
      <p class="text-sm text-foreground-secondary font-light">Eliminate the friction between intent and execution. Whether you are surfacing high-conviction deals or securing your next commitment, Schematic automates the logistics of the private markets.</p>
    </div>
    
    <!-- <Button href="/#request-access">Request Access</Button> -->

  </div>
</section>

<section class="overflow-x-clip hidden lg:block">
  <div bind:this={heroCards} class="flex justify-center gap-10 text-left pb-40">

    <!-- LP CARD -->
    <div
      style="rotate: {Math.min(0, -10 * mousePosX)}deg; translate: {-20 * mousePosX}% {10 * mousePosX}%; scale: {Math.max(1 + (0.25 * -mousePosX), 1)};"
      class="
        relative origin-bottom-right rounded-xl aspect-4/5 w-full max-w-md p-10
        bg-white bg-linear-to-b from-blue-100 to-blue-100/0
      "
    >
      <span class="absolute top-0 right-0 m-6"><ArrowCircleUpRight class="w-10 h-10 opacity-25"  weight="light" /></span>
      <Heading
        tag="For LPs Deploying Capital"
        title="The Inbound Intelligence Engine"
        subtitle="Automate your intake. Accelerate your mandate. Transform a chaotic inbox into a streamlined pipeline."
        text="Schematic&apos;s AI analyzes every inbound request against your specific investment criteria the moment it arrives."
        class="h-full flex flex-col [&>p]:mb-auto"
      />
      <a href="/#LP" class="absolute inset-0"></a>
    </div>

    <!-- GP CARD -->
    <div
      style="rotate: {Math.max(0, -10 * mousePosX)}deg; translate: {-20 * mousePosX}% {-10 * mousePosX}%; scale: {Math.max(1 + (0.25 * mousePosX), 1)};"
      class="
        relative origin-bottom-left rounded-xl aspect-4/5 w-full max-w-md p-10
        bg-tint-dark text-white bg-linear-to-b from-blue-900 to-blue-900/0
      "
    >
      <span class="absolute top-0 right-0 m-6"><ArrowCircleUpRight class="w-10 h-10 opacity-25"  weight="light" /></span>
      <Heading
        tag="For GPs Deploying Capital"
        title="The Seamless Closing Engine"
        subtitle="Shorten the cycle. Secure the commitment. Eliminate the administrative friction tax."
        text="Schematic organizes your data, automates your logistics, and removes every hurdle between an LP and a signature."
        class="h-full flex flex-col [&>p]:mb-auto"
      />
      <a href="/#GP" class="absolute inset-0"></a>
    </div>

  </div>
</section>
