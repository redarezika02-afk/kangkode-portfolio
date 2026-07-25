<script>
  // layers: [{ label: 'Design', on: true }, ...]  (6 entries)
  export let layers = [];
  export let variant = 'card'; // 'card' | 'facts'
  $: owned = layers.filter((l) => l.on).length;
</script>

<div class="strata {variant}">
  <div class="scaption">stack owned · {owned}/{layers.length}</div>
  {#each layers as l}
    <div class="srow" class:on={l.on}>
      <span class="sbar"><span class="slabel">{l.label}</span></span>
    </div>
  {/each}
</div>

<style>
  .strata {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .facts {
    margin-top: 18px;
  }
  .scaption {
    font-family: var(--mono);
    font-size: 10.5px;
    color: var(--faint);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .sbar {
    height: 24px;
    border-radius: 7px;
    border: 1px solid var(--line);
    background: var(--surface-2);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 11px;
  }
  .card .sbar {
    height: 22px;
    border-radius: 6px;
    padding: 0 10px;
  }
  .srow.on .sbar {
    border-color: rgba(255, 106, 43, 0.5);
    background: linear-gradient(90deg, rgba(255, 106, 43, 0.2), rgba(255, 106, 43, 0.04));
  }
  .srow.on .sbar::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--orange);
  }
  .slabel {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--faint);
    z-index: 1;
  }
  .card .slabel {
    font-size: 11px;
  }
  .srow.on .slabel {
    color: var(--ink);
  }
</style>
