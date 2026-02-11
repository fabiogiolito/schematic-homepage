<script>
  let {
    Icon,
    title,
    text,
    class: classCustom,
  } = $props();
</script>

<div class="space-y-1 text-xs {classCustom}">
  {#if Icon}<span class="block mb-2"><Icon class="w-5 h-5 text-foreground-secondary" /></span>{/if}
  <p>{@html title}</p>
  <p class="font-light opacity-50">{@html text}</p>
</div>
