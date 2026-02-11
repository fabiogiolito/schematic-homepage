<script>
  let {
    large = false,
    center = false,
    tag, 
    title, 
    subtitle, 
    text, 
    children,
    class: classCustom,
    ...props
  } = $props();
</script>

<div 
  class={[
    ` space-y-4 flex-1
      ${center ? 'text-center' : ''}
    `, classCustom
  ]}
  {...props}
>

  {#if tag}
    <p class="
    text-foreground-tertiary
      {large ? 'text-tint': 'text-xs uppercase'}
    ">{@html tag}</p>
  {/if}
  
  <h1 class="{large ? 'text-4xl md:text-4xl lg:text-6xl font-medium leading-[100%]' : 'text-lg md:text-2xl leading-tight'}">
    {@html title}
  </h1>
  
  <div class="space-y-4 max-w-2xl {center ? 'mx-auto' : ''}">

    {#if subtitle}
      <p class="{large ? 'text-lg leading-tight md:text-2xl' : ''}">
        {@html subtitle}
      </p>
    {/if}

    {#if text}
      <p class="text-sm opacity-50 font-light">
        {@html text}
      </p>
    {/if}
  </div>

</div>
