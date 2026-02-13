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
    transition = false,
    ...props
  } = $props();
</script>

<div 
  class={[
    `heading-group space-y-4 lg:space-y-6 flex-1 flex flex-col transition-all duration-500
      ${center ? 'text-center px-10' : ''}
    `, classCustom
  ]}
  {...props}
>

  {#if tag}
    <p class="
      {large ? 'opacity-50': 'text-xs uppercase text-foreground-tertiary'}
    ">
      {@html tag}
    </p>
  {/if}
  
  <h1 class="{large ? 'text-4xl md:text-5xl font-medium leading-[100%]' : 'text-lg md:text-2xl leading-tight'}">
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
