<script>
  import { asset } from '$lib/utils.js';
  import { openLightbox } from '$lib/stores.js';

  export let src = '';
  export let alt = '';
  export let title = '';
  export let caption = ''; // may contain simple <br>

  const open = () => openLightbox(asset(src));
</script>

<div class="phone">
  <div class="device">
    <img
      src={asset(src)}
      {alt}
      loading="lazy"
      on:click={open}
      on:keydown={(e) => e.key === 'Enter' && open()}
      role="button"
      tabindex="0" />
  </div>
  <div class="pcap">
    <b>{title}</b>
    <span>{@html caption}</span>
  </div>
</div>

<style>
  .phone {
    width: 216px;
  }
  .device {
    border: 2px solid #263450;
    border-radius: 30px;
    padding: 7px;
    background: #0c1322;
    box-shadow: 0 34px 60px -28px rgba(0, 0, 0, 0.85);
  }
  .device img {
    display: block;
    width: 100%;
    border-radius: 23px;
    cursor: zoom-in;
  }
  .pcap {
    margin-top: 13px;
    text-align: center;
  }
  .pcap b {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .pcap span {
    font-family: var(--mono);
    font-size: 10.5px;
    color: var(--muted);
    line-height: 1.5;
    display: block;
  }
  @media (max-width: 560px) {
    .phone {
      width: 46%;
    }
  }
</style>
