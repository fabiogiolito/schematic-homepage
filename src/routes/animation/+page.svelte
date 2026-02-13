<script>
  import { onMount } from "svelte";


  // STATE ========
  
  let currentCard = $state(false);
  let showContent = $state(false);
  let mouseX = $state(0);
  let scrollImpact = $state(0);
  let contentTop = $state();
  let screenLG = $state(false);

  let LPCardStateClass = $derived(showContent ? 'card-static' : currentCard == "LP" ? 'card-expanded' : 'card-collapsed');
  let GPCardStateClass = $derived(showContent ? 'card-static' : currentCard == "GP" ? 'card-expanded' : 'card-collapsed');
  let highlightedCard = $derived(mouseX > 0 ? "GP" : "LP");

  
  // FUNCTIONS ========
  
  function handleCardClick(selected) {
    currentCard = selected;
    const container = document.getElementById("content");
    container.scrollIntoView({ behavior: "smooth" });

    window.setTimeout(() => { showContent = true; }, 400);
  }

  function handleScroll() {
    contentTop = contentTop || document.getElementById("content").getBoundingClientRect().top;
    const scrollMin = contentTop / 3;
    const scrollMax = contentTop / 3 * 2;
    scrollImpact = Math.max(0, Math.min(1, (window.scrollY - scrollMin ) / (scrollMax - scrollMin)));
    // Auto trigger
    if (screenLG && scrollImpact >= 1 && !currentCard) handleCardClick(highlightedCard);
  }

  function handleMouseMove(e) {
    mouseX = Math.round((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2) * 100) / 100;
  }

  function handleResize(e) {
    screenLG = window.innerWidth >= "768";
  }

  onMount(handleResize);
</script>

<svelte:window onmousemove={handleMouseMove} onscroll={handleScroll} onresize={handleResize}></svelte:window>

<div class="w-screen h-[800px] flex flex-col items-center justify-center">
  <span>Hero</span>
  <span>{highlightedCard}</span>
  <span>{currentCard}</span>
  <span>{mouseX}</span>
  <span>{scrollImpact}</span>
  <span>{screenLG}</span>
</div>

<div id="content" class="w-screen min-h-screen relative flex flex-col {currentCard == "GP" ? 'flex-col-reverse' : ''}"
  style="
    --mouseX: {mouseX};
    --scrollImpact: {scrollImpact};
  "
>
  
  <div class="card card-LP {LPCardStateClass} {highlightedCard == "LP" ? 'z-10' : ''}" style="--extra-scale: {highlightedCard == "LP" ? 0.25 * scrollImpact : 0};">
    <span>Card LP</span>
    <span class="{!showContent ? 'lg:hidden' : ''}">CONTENT</span>
    <button class="hidden absolute inset-0 {!showContent ? 'lg:block' : ''}" onclick={() => handleCardClick("LP")} aria-label="Explore LP Features"></button>
  </div>

  <div class="card card-GP {GPCardStateClass} {highlightedCard == "GP" ? 'z-10' : ''}" style="--extra-scale: {highlightedCard == "GP" ? 0.25 * scrollImpact : 0};">
    <span>Card GP</span>
    <span class="{!showContent ? 'lg:hidden' : ''}">CONTENT</span>
    <button class="hidden absolute inset-0 {!showContent ? 'lg:block' : ''}" onclick={() => handleCardClick("GP")} aria-label="Explore GP Features"></button>
  </div>

</div>

<style>

  @media (width >= 768px) {
  .card {
    position: absolute;
    transition: all cubic-bezier(0.22, 1, 0.36, 1) 300ms;
  }

  .card-static {
    position: relative;
    min-height: 100vh;
  }

  .card-collapsed {
    --card-w: 400px;
    --card-h: 520px;
    --distanceX: 2vw;

    width: var(--card-w);
    height: var(--card-h);
    border-radius: 24px;
    padding: 40px;
    top: 0;
  }

  .card-collapsed.card-LP { 
    left: calc(50% - var(--card-w) - var(--distanceX));
    scale: calc(1 + (0.25 * var(--mouseX) * -1) + var(--extra-scale));
    rotate: calc(10deg * min(0, var(--mouseX) * -1));
  }
  .card-collapsed.card-GP { 
    left: calc(50% + var(--distanceX));
    scale: calc(1 + (0.25 * var(--mouseX)) + var(--extra-scale));
    rotate: calc(10deg * min(0, var(--mouseX)) * -1);
  }

  .card-expanded {
    --normalizedMouseX: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    left: 0;
  }

  /* Not selected card goes out of view */
  #content:has(.card-expanded) .card-collapsed {
    scale: 0;
    opacity: 0;
  }

  }

  .card-LP { 
    background: red; 
  }
  .card-GP { 
    background: blue; 
  }

  

</style>
