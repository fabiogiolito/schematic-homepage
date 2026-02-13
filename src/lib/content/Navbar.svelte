<script>
	import LogoSymbol from '$lib/assets/LogoSymbol.svelte';
  import LogoText from '$lib/assets/LogoText.svelte';
  import BreakpointsDebug from '$lib/components/BreakpointsDebug.svelte';
  import Button from '$lib/components/Button.svelte';
</script>

<div class="fixed z-20 w-full top-0 left-0 right-0 px-4 md:px-10 bg-background-secondary">
  <div class="container mx-auto py-4 md:py-6 grid grid-cols-2 items-center">

    <!-- Logo -->
    <a href="/#home" class="flex gap-2 text-tint justify-self-start">
      <LogoSymbol />
      <span class="hidden md:block">
        <LogoText />
      </span>
    </a>

    <!-- Tabs -->
    <!-- <nav class="hidden text-sm font-medium justify-self-center">
      <a class="px-4 py-2.5 rounded hover:bg-tint/10" href="#LP">Deploy Capital</a>
      <a class="px-4 py-2.5 rounded hover:bg-tint/10" href="#GP">Raise Capital</a>
      <a class="px-4 py-2.5 rounded hover:bg-tint/10" href="#Marketplace">Marketplace</a>
    </nav> -->

    <!-- Request Access Button -->
    <Button tint href="#request-access" class="justify-self-end">
      Request Access
    </Button>

  </div>
</div>
