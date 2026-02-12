<script>
  import Heading from "$lib/components/Heading.svelte";
  import FeatureBlock from "$lib/components/FeatureBlock.svelte";
  import Image from "$lib/components/Image.svelte";
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
</script>

<!-- Security -->
<section id="Security" class="scroll-mt-16 px-4 md:px-10 py-24 md:py-64 space-y-20 bg-[#E1DED8]">
  <div use:scrollReveal class="container mx-auto space-y-16 grid grid-cols-1 md:grid-cols-6">
  
    <div class="col-span-2 md:pr-24 h-full">
      <Heading
        tag="Institutional-Grade Security"
        title="Protect your edge."
        text="We treat your data with the same rigor you apply to your investments. Schematic is built on a foundation of privacy, encryption, and strict access control."
        class="h-full py-6 flex flex-col [&>div]:mt-auto"
      />
    </div>

    <Image src="/Security.png" alt="Secure" class="col-span-4" />

  </div>
</section>
