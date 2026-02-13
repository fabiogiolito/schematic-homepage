<script>
  import { fly } from "svelte/transition";
  import { page } from "$app/state";

	import LogoSymbol from '$lib/assets/LogoSymbol.svelte';
  import LogoText from '$lib/assets/LogoText.svelte';
  import BreakpointsDebug from '$lib/components/BreakpointsDebug.svelte';
  import Button from '$lib/components/Button.svelte';

  let { 
    showTabs = false,
    light = false,
    class: classCustom
   } = $props();

</script>

<div class="fixed z-20 w-full top-0 left-0 right-0 px-4 md:px-10 {light ? 'text-white' : ''} {classCustom}">
  <div class="container mx-auto py-4 md:py-6 flex justify-between items-center">

    <!-- Logo -->
    <a href="/" class="flex gap-2 justify-self-start {light ? '' : 'text-tint'}">
      <LogoSymbol />
      <span class="hidden md:block">
        <LogoText />
      </span>
    </a>

    {#if showTabs}
      <div class="p-1 flex gap-1 text-center text-sm font-medium rounded-lg bg-background-tertiary/50 backdrop-blur-lg">
        <a href="/deploy" class="w-24 rounded px-3 py-2 {page.url.pathname == '/deploy' ? 'bg-white text-foreground-primary shadow' : ''}">
          <span class="">Deploy</span>
        </a>
        <a href="/raise" class="w-24 rounded px-3 py-2 {page.url.pathname == '/raise' ? 'bg-white text-foreground-primary shadow' : ''}">
          <span class="">Raise</span>
        </a>
      </div>
    {/if}

    <!-- Request Access Button -->
    <Button tint href="#request-access" class="justify-self-end">
      Request Access
    </Button>

  </div>
</div>
