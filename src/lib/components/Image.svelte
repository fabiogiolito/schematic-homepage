<script>
  let { src, alt, class: classCustom } = $props();

  function retina(scale, src) {
    return src.replace(/\.(\w{3,4})$/, `@${scale}x.$1`);
  }
</script>

<img {alt} {src} class="w-full {classCustom}" srcset="{retina(2, src)} 2x, {retina(3, src)} 3x" />
