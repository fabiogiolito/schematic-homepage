<script>
  import Heading from "$lib/components/Heading.svelte";
  import FeatureBlock from "$lib/components/FeatureBlock.svelte";
  import Image from "$lib/components/Image.svelte";
</script>

<!-- Social Proof -->
<section id="Customers" class="scroll-mt-16 px-4 md:px-10 py-24 md:py-64 space-y-20 bg-background-tertiary">
  <div class="container mx-auto space-y-16">
  
    <Heading
      tag="The Standard for Global Allocators"
      title="Trusted by the Industry's Best"
      text="Join the elite firms moving faster with Schematic. We power the teams managing tomorrow's capital."
    />

    <div class="grid grid-cols-12 gap-4">

      <!-- Testimonial -->
      <div class="col-span-12 md:col-span-6 rounded-lg bg-[#79837B] p-4 md:p-8 flex flex-col gap-6 md:justify-between">
        <p class="font-light md:text-lg text-white/75">
          The AI reports are so comprehensive that our LPs stopped asking for follow-up data. It's the most professional our diligence room has ever looked
        </p>
        <Image src="Testimonial-1.png" alt="Company logo" class="w-40!" />
      </div>

      <!-- Testimonial 2 -->
      <Image src="Testimonial-2.png" alt="Profile photo" class="col-span-12 sm:col-span-6 md:col-span-3 aspect-square rounded-t-lg sm:rounded-lg bg-[#D8C5B8] w-full" />
      <div class="p-4 sm:p-8 text-sm col-span-12 sm:col-span-6 md:col-span-3 sm:aspect-square rounded-b-lg sm:rounded-lg bg-[#D8C5B8] flex flex-col gap-6 sm:justify-between -mt-4 sm:mt-0">
        <p class="text-foreground-primary/75">Schematic is our force multiplier. We've cut our initial review time from days to minutes without sacrificing an ounce of depth.</p>
        <FeatureBlock 
          title="John Dukes"
          text="Partner, Global Growth Equity"
        />
      </div>

      <!-- Testimonial 3 -->
      <Image src="Testimonial-3.png" alt="Profile photo" class="col-span-12 sm:col-span-6 md:col-span-3 aspect-square rounded-t-lg sm:rounded-lg bg-[#ABAAA9] w-full" />
      <div class="p-4 sm:p-8 text-sm col-span-12 sm:col-span-6 md:col-span-3 sm:aspect-square rounded-b-lg sm:rounded-lg bg-[#ABAAA9] flex flex-col gap-6 sm:justify-between -mt-4 sm:mt-0">
        <p class="text-foreground-primary/75">Schematic is our force multiplier. We've cut our initial review time from days to minutes without sacrificing an ounce of depth.</p>
        <FeatureBlock 
          title="John Dukes"
          text="Partner, Global Growth Equity"
        />
      </div>

      <!-- Logos -->
      <div class="col-span-12 md:col-span-6 rounded-lg bg-[#BD917A] grid grid-cols-2 md:grid-cols-3 text-white/75">
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 flex items-center justify-center">Logo</div>
        <div class="p-4 md:p-0 bg-white/2 border border-white/10 hidden md:flex items-center justify-center">Logo</div>
      </div>

    </div>


  </div>
</section>
