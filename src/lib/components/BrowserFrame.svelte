<script>
  import { asset } from '$lib/utils.js';
  import { openLightbox } from '$lib/stores.js';
  import Icon from './Icon.svelte';

  export let src = '';
  export let alt = '';
  export let url = '';
  export let zoom = true;

  const open = () => zoom && openLightbox(asset(src));
</script>

<div class="frame">
  <div class="bar">
    <div class="dots"><i></i><i></i><i></i></div>
    {#if url}
      <div class="url"><Icon name="lock" size={12} />{url}</div>
    {/if}
  </div>
  <img
    src={asset(src)}
    {alt}
    loading="lazy"
    class:zoom
    on:click={open}
    on:keydown={(e) => e.key === 'Enter' && open()}
    role={zoom ? 'button' : undefined}
    tabindex={zoom ? 0 : undefined} />
</div>

<style>
  .frame {
    border: 1px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    background: var(--surface);
    box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 0.8);
  }
  .bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    background: linear-gradient(180deg, #16203a, #111a2e);
    border-bottom: 1px solid var(--line);
  }
  .dots {
    display: flex;
    gap: 6px;
  }
  .dots i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    display: block;
  }
  .dots i:nth-child(1) {
    background: #ff5f57;
  }
  .dots i:nth-child(2) {
    background: #febc2e;
  }
  .dots i:nth-child(3) {
    background: #28c840;
  }
  .url {
    flex: 1;
    margin-left: 8px;
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--muted);
    background: var(--bg-2);
    border: 1px solid var(--line-soft);
    border-radius: 7px;
    padding: 5px 12px;
    display: flex;
    align-items: center;
    gap: 7px;
    max-width: 320px;
  }
  .url :global(svg) {
    color: var(--ok);
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  img.zoom {
    cursor: zoom-in;
  }
  @media (max-width: 820px) {
    .url {
      max-width: 180px;
    }
  }
</style>
