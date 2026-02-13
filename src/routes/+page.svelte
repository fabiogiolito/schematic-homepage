<script>
  import { scrollReveal } from '$lib/actions/scrollReveal.js';

  import Heading from '$lib/components/Heading.svelte';
  import FeatureBlock from '$lib/components/FeatureBlock.svelte';
  
  import Navbar from "$lib/content/Navbar.svelte";
  import Hero from "$lib/content/Hero.svelte";
  import Marketplace from '$lib/content/Marketplace.svelte';
  import SocialProof from "$lib/content/SocialProof.svelte";
  import Security from "$lib/content/Security.svelte";
  import Footer from "$lib/content/Footer.svelte";
  import Image from '$lib/components/Image.svelte';
</script>

<Navbar />
<Hero />

<!-- CARDS CONTAINER -->
<section class="container mx-auto relative flex p-24 gap-24 group pointer-events-none">

  <!-- Card LP -->
  <div use:scrollReveal={{ y: 200, delay: 0.5, duration: 0.3 }} class="
    relative flex-1 aspect-3/4 rounded-xl shadow-xl p-20 flex flex-col gap-10 pointer-events-auto
    transition-all duration-500 ease-smooth -rotate-1 hover:-rotate-2 hover:scale-110 group-hover:scale-75
    bg-white text-foreground-primary
  ">
    <Image src="/LPs-BG-Card.png" class="absolute inset-0 object-cover -z-10" />
    <p class="text-white text-lg mb-auto text-shadow-lg">Deploy Capital</p>
    <h2 class="text-4xl font-medium leading-none tracking-tight">The Intelligence Engine</h2>
    <p class="opacity-50">Automate your intake. Accelerate your mandate. Transform a chaotic inbox into a streamlined pipeline.</p>
    <a href="/deploy" class="absolute inset-0 cursor-pointer" aria-label="Deploy Capital"></a>
  </div>

  <!-- Card GP -->
  <div use:scrollReveal={{ y: 200, delay: 0.7, duration: 0.3 }} class="
    relative flex-1 aspect-3/4 rounded-xl shadow-xl p-20 flex flex-col gap-10 pointer-events-auto
    transition-all duration-500 ease-smooth rotate-1 hover:rotate-2 hover:scale-110 [:hover+&]:scale-75
    text-white
  ">
    <Image src="/GPs-BG-Card.png" class="absolute inset-0 object-cover -z-10" />
    <p class="text-lg mb-auto text-shadow-lg">Raise Capital</p>
    <h2 class="text-4xl font-medium leading-none tracking-tight">The Frictionless Raise</h2>
    <p class="opacity-50">Shorten the cycle. Secure the commitment. Eliminate the administrative "friction tax." </p>
    <a href="/raise" class="absolute inset-0 cursor-pointer" aria-label="Raise Capital"></a>
  </div>

</section>


<Marketplace />
<SocialProof />
<Security />
<Footer />
