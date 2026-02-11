<script>
  let { 
    tint = false, 
    children,
    class: classCustom,
    ...props
  } = $props();
</script>

<a
  class={[
    ` inline-block px-4 py-2 rounded-lg text-sm font-medium
    ${tint ? 'bg-tint text-background-primary' : 'bg-white shadow text-tint'}
    `, classCustom
  ]}
  {...props}
>
  {@render children?.()}
</a>
