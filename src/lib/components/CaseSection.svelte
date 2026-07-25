<script>
  import { asset } from '$lib/utils.js';
  import { openLightbox } from '$lib/stores.js';
  import { reveal } from '$lib/actions/reveal.js';
  import StrataStrip from './StrataStrip.svelte';
  import BrowserFrame from './BrowserFrame.svelte';
  import PhoneFrame from './PhoneFrame.svelte';
  import Icon from './Icon.svelte';

  export let section;
  export let project;
</script>

{#if section.type === 'overview'}
  <section class="sec">
    <div class="wrap ov">
      <div use:reveal>
        <span class="eyebrow">{section.eyebrow}</span>
        <h2 class="oh">{section.heading}</h2>
        {#each section.paragraphs as p}<p>{@html p}</p>{/each}
      </div>
      <div class="facts" use:reveal>
        <h4>at a glance</h4>
        {#each project.facts as f}
          <div class="frow"><span>{f.k}</span><b>{@html f.v}</b></div>
        {/each}
        <div class="ftags">{#each project.factTags as t}<span class="tag">{t}</span>{/each}</div>
        <StrataStrip layers={project.strata} variant="facts" />
      </div>
    </div>
  </section>

{:else if section.type === 'evolution'}
  <section class="sec">
    <div class="wrap">
      <div class="sec-head" use:reveal>
        <span class="eyebrow">{section.eyebrow}</span>
        <h2>{section.heading}</h2>
        <p>{section.intro}</p>
      </div>
      <div class="evo">
        {#each [section.v1, section.v2] as v, i}
          <div class="vcard" use:reveal>
            <div class="vhead">
              <span class="vtag {i === 0 ? 'old' : 'new'}">{v.tag}</span>
              <span class="vmeta">{v.meta}</span>
            </div>
            <img
              src={asset(v.src)}
              alt={v.alt}
              loading="lazy"
              on:click={() => openLightbox(asset(v.src))}
              on:keydown={(e) => e.key === 'Enter' && openLightbox(asset(v.src))}
              role="button"
              tabindex="0" />
          </div>
        {/each}
      </div>
      <p class="same">{@html section.sameLabel}</p>
      <div class="migrate" use:reveal>
        {#each section.migrate as m}
          <div class="mrow">
            <span class="ml">{m.label}</span>
            <span class="from">{m.from}</span>
            <span class="arr"><Icon name="arrow-right" size={16} /></span>
            <span class="to">{m.to}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

{:else if section.type === 'browserGallery'}
  <section class="sec">
    <div class="wrap">
      <div class="sec-head" use:reveal>
        <span class="eyebrow">{section.eyebrow}</span>
        <h2>{section.heading}</h2>
        <p>{section.intro}</p>
      </div>
      <div class="gallery">
        {#each section.items as it}
          <div use:reveal>
            <BrowserFrame src={it.src} alt={it.alt} url={it.url} />
            <div class="shot-cap">
              <span class="n">{it.n}</span>
              <p><b>{it.title}</b> {@html it.body}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

{:else if section.type === 'phones'}
  <section class="sec">
    <div class="wrap">
      <div class="sec-head" use:reveal>
        <span class="eyebrow">{section.eyebrow}</span>
        <h2>{section.heading}</h2>
        <p>{section.intro}</p>
      </div>
      <div class="phones" use:reveal>
        {#each section.items as it}
          <PhoneFrame src={it.src} alt={it.alt} title={it.title} caption={it.caption} />
        {/each}
      </div>
    </div>
  </section>

{:else if section.type === 'grid'}
  <section class="sec">
    <div class="wrap">
      <div class="sec-head" use:reveal>
        <span class="eyebrow">{section.eyebrow}</span>
        <h2>{section.heading}</h2>
        <p>{section.intro}</p>
      </div>
      <div class="mods">
        {#each section.items as it}
          <div class="mod" use:reveal>
            <span class="mico"><Icon name={it.icon} /></span>
            <h4>{it.title}</h4>
            <p>{@html it.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  .sec {
    padding: 60px 0;
    border-top: 1px solid var(--line-soft);
    margin-top: 30px;
  }
  .oh {
    font-size: clamp(24px, 3.2vw, 34px);
    letter-spacing: -0.02em;
    font-weight: 800;
    margin: 13px 0 18px;
  }
  /* overview */
  .ov {
    display: grid;
    grid-template-columns: 1.5fr 0.9fr;
    gap: 40px;
    align-items: start;
  }
  .ov p {
    color: var(--ink-2);
    font-size: 15.5px;
    line-height: 1.7;
    margin: 0 0 16px;
  }
  .ov :global(p b) {
    color: var(--ink);
  }
  .facts {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 22px;
  }
  .facts h4 {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    margin: 0 0 16px;
  }
  .frow {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    padding: 11px 0;
    border-bottom: 1px solid var(--line-soft);
    font-size: 13.5px;
  }
  .frow span {
    color: var(--muted);
  }
  .frow :global(b) {
    color: var(--ink);
    font-weight: 600;
    text-align: right;
  }
  .ftags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 16px;
  }
  /* evolution */
  .evo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-bottom: 24px;
  }
  .vcard {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 16px;
    overflow: hidden;
  }
  .vhead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 16px;
    border-bottom: 1px solid var(--line);
  }
  .vtag {
    font-family: var(--mono);
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 700;
    letter-spacing: 0.03em;
  }
  .vtag.old {
    background: rgba(130, 143, 170, 0.13);
    color: var(--muted);
    border: 1px solid var(--line);
  }
  .vtag.new {
    background: rgba(255, 106, 43, 0.16);
    color: var(--orange);
    border: 1px solid rgba(255, 106, 43, 0.45);
  }
  .vmeta {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--faint);
  }
  .vcard img {
    display: block;
    width: 100%;
    height: auto;
    cursor: zoom-in;
  }
  .same {
    text-align: center;
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--muted);
    margin: 0 0 24px;
  }
  .same :global(b) {
    color: var(--orange);
  }
  .migrate {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 6px 24px;
  }
  .mrow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    padding: 15px 0;
    border-bottom: 1px solid var(--line-soft);
  }
  .mrow:last-child {
    border-bottom: none;
  }
  .ml {
    font-family: var(--mono);
    font-size: 10.5px;
    color: var(--faint);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    flex: 0 0 96px;
  }
  .from {
    color: var(--muted);
    font-size: 14.5px;
    text-decoration: line-through;
    text-decoration-color: var(--faint);
  }
  .arr {
    color: var(--orange);
    display: inline-flex;
  }
  .to {
    color: var(--ink);
    font-weight: 600;
    font-size: 14.5px;
  }
  /* gallery */
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
  .shot-cap {
    display: flex;
    gap: 13px;
    margin-top: 14px;
    align-items: flex-start;
  }
  .shot-cap .n {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--orange);
    flex: 0 0 auto;
    padding-top: 1px;
  }
  .shot-cap p {
    margin: 0;
    font-size: 14px;
    color: var(--ink-2);
    line-height: 1.6;
  }
  .shot-cap :global(p b) {
    color: var(--ink);
    font-weight: 600;
  }
  /* phones */
  .phones {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    justify-content: center;
  }
  /* grid / modules */
  .mods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .mod {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 22px;
  }
  .mico {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: var(--surface-2);
    border: 1px solid var(--line);
    color: var(--orange);
    margin-bottom: 14px;
  }
  .mod h4 {
    margin: 0 0 7px;
    font-size: 15.5px;
    font-weight: 700;
  }
  .mod p {
    margin: 0;
    font-size: 13.5px;
    color: var(--muted);
    line-height: 1.6;
  }
  .mod :global(p b) {
    color: var(--ink-2);
    font-weight: 600;
  }
  @media (max-width: 820px) {
    .ov {
      grid-template-columns: 1fr;
      gap: 26px;
    }
    .evo {
      grid-template-columns: 1fr;
    }
    .mods {
      grid-template-columns: 1fr;
    }
  }
</style>
