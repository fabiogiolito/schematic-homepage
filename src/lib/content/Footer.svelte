<script>
  import { ArrowUpRight } from 'phosphor-svelte';
  import LogoSymbol from '$lib/assets/LogoSymbol.svelte';
  import LogoText from '$lib/assets/LogoText.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
</script>

<!-- Footer -->
<section class="scroll-mt-16 px-4 md:px-10 py-24 md:pt-40 md:pb-24 space-y-20 text-white bg-tint-dark bg-linear-to-b from-black/25 via-transparent to-black/10">
  <div use:scrollReveal class="container mx-auto space-y-16 grid grid-cols-6">

    <div class="col-span-5 space-y-40">

      <div class="opacity-25">
        <LogoText />
      </div>

      <div class="flex flex-col md:flex-row gap-6 md:gap-16">
        <a class="flex gap-2 items-center" href="#LP">For LPs Deploying Capital <ArrowUpRight /></a>
        <a class="flex gap-2 items-center" href="#GP">For GPs Raising Capital <ArrowUpRight /></a>
        <a class="flex gap-2 items-center" href="#Marketplace">The Global Fund Marketplace <ArrowUpRight /></a>
      </div>

    </div>
  
  </div>
</section>
