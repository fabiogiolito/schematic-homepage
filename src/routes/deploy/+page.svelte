<script>
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
  import Image from '$lib/components/Image.svelte';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
</script>

<Navbar showTabs class="bg-linear-to-b from-white to-transparent text-foreground-primary pb-40" />

<div class="bg-white relative">
  <!-- BG Image -->
  <div class="absolute left-0 top-0 w-full h-screen bg-[url(/LPs-BG-Card.png)] bg-cover bg-center bg-no-repeat mask-b-from-20%"></div>

  <!-- Content -->
  <div class="relative z-10 py-64 space-y-64">
    <Heading center large
      tag="For LPs Deploying Capital"
      title="The Inbound Intelligence Engine"
      subtitle="Automate your intake. Accelerate your mandate. Transform a chaotic inbox into a streamlined pipeline."
      text="Schematic's AI analyzes every inbound request against your specific investment criteria the moment it arrives."
    />
    <ContentLP />
  </div>
</div>

<SocialProof />
<Security />
<Footer />
