<script>
  import { lightboxSrc, closeLightbox } from '$lib/stores.js';
  import Icon from './Icon.svelte';

  function onKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }
</script>

<svelte:window on:keydown={onKey} />

{#if $lightboxSrc}
  <div class="lb" on:click={closeLightbox} role="presentation">
    <div class="lb-close"><Icon name="arrow-left" size={16} />close</div>
    <img src={$lightboxSrc} alt="" />
  </div>
{/if}

<style>
  .lb {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(4, 6, 12, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    cursor: zoom-out;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
  .lb img {
    max-width: 100%;
    max-height: 92vh;
    border-radius: 10px;
    border: 1px solid var(--line);
    box-shadow: 0 40px 100px -30px #000;
  }
  .lb-close {
    position: absolute;
    top: 20px;
    right: 24px;
    color: var(--ink-2);
    font-family: var(--mono);
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 7px;
  }
</style>
