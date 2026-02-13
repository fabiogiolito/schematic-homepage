<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
</script>

<section id="home" use:scrollReveal={{ y: 100, duration: 0.6 }}>
  <div class="container mx-auto text-center flex flex-col justify-center pt-40 pb-24 px-4 sm:px-10 space-y-6 md:space-y-20">

    <h1 class="text-4xl md:text-6xl lg:text-8xl xl:text-[100px] font-semibold tracking-tight leading-[100%]">The New Standard for Private Capital.</h1>
    
    <div class="space-y-6 max-w-2xl mx-auto">
      <p class="text-2xl">One unified intelligence layer for GPs and LPs.</p>
      <p class="text-sm text-foreground-secondary font-light">Eliminate the friction between intent and execution. Whether you are surfacing high-conviction deals or securing your next commitment, Schematic automates the logistics of the private markets.</p>
    </div>

  </div>
</section>
