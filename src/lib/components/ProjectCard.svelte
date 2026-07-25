<script>
  import { base } from '$app/paths';
  import { asset } from '$lib/utils.js';
  import StrataStrip from './StrataStrip.svelte';
  import Icon from './Icon.svelte';

  export let project;
  export let feature = false;

  $: c = project.card;
  $: href = project.hasCaseStudy ? `${base}/work/${project.slug}` : null;
</script>

<article class="card" class:feature>
  {#if feature}
    <!-- feature layout: text column + visual column -->
    <div class="fcol">
      <div class="card-type">
        {c.type}
        {#each c.badges as b}<span class="badge">{b}</span>{/each}
      </div>
      <h3>{project.name}</h3>
      <p class="card-desc">{@html c.desc}</p>
      <div class="tags">{#each c.tags as t}<span class="tag">{t}</span>{/each}</div>
      <div class="role">role · <b>{c.role}</b></div>
      {#if href}
        <a class="case-link" {href}>View case study <Icon name="arrow-right" size={14} /></a>
      {:else}
        <span class="case-soon">○ Case study coming soon</span>
      {/if}
    </div>
    <div class="fcol">
      {#if c.thumb}
        <a class="shot" {href} aria-label={project.name}>
          {#if c.live}<span class="glive">LIVE</span>{/if}
          <img src={asset(c.thumb)} alt="{project.name} screenshot" loading="lazy" />
        </a>
      {:else}
        <div class="shot empty"><span><Icon name="image" size={15} />Add screenshot</span></div>
      {/if}
      <StrataStrip layers={project.strata} variant="card" />
    </div>
  {:else}
    <!-- standard card -->
    {#if c.thumb}
      <a class="shot" {href} aria-label={project.name}>
        {#if c.live}<span class="glive">LIVE</span>{/if}
        <img src={asset(c.thumb)} alt="{project.name} screenshot" loading="lazy" />
      </a>
    {:else}
      <div class="shot empty"><span><Icon name="image" size={15} />Add screenshot</span></div>
    {/if}
    <div class="card-type">
      {c.type}
      {#each c.badges as b}<span class="badge">{b}</span>{/each}
    </div>
    <h3>{project.name}</h3>
    <p class="card-desc">{@html c.desc}</p>
    <div class="strata-wrap"><StrataStrip layers={project.strata} variant="card" /></div>
    <div class="tags">{#each c.tags as t}<span class="tag">{t}</span>{/each}</div>
    <div class="role">role · <b>{c.role}</b></div>
    {#if href}
      <a class="case-link" {href}>View case study <Icon name="arrow-right" size={14} /></a>
    {:else}
      <span class="case-soon">○ Case study coming soon</span>
    {/if}
  {/if}
</article>

<style>
  .card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--r);
    padding: 26px;
    position: relative;
    transition: 0.25s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .card::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--orange), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s;
  }
  .card:hover {
    border-color: #2c3c63;
    transform: translateY(-3px);
    box-shadow: 0 26px 50px -28px rgba(0, 0, 0, 0.75);
  }
  .card:hover::after {
    transform: scaleX(1);
  }
  .card.feature {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1.35fr 0.9fr;
    gap: 34px;
    padding: 34px;
  }
  .fcol {
    display: flex;
    flex-direction: column;
  }
  .card-type {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--orange);
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 13px;
    display: flex;
    align-items: center;
    gap: 9px;
    flex-wrap: wrap;
  }
  .badge {
    color: var(--muted);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 2px 7px;
    font-size: 10.5px;
  }
  h3 {
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0 0 10px;
  }
  .feature h3 {
    font-size: 27px;
  }
  .card-desc {
    color: var(--ink-2);
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 18px;
  }
  .feature .card-desc {
    font-size: 15px;
  }
  .strata-wrap {
    margin: 0 0 16px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
  }
  .role {
    margin-top: 16px;
    font-size: 12.5px;
    color: var(--muted);
    font-family: var(--mono);
  }
  .role b {
    color: var(--gold);
    font-weight: 600;
  }
  .shot {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--line);
    margin-bottom: 18px;
    background: var(--bg-2);
    display: block;
  }
  .feature .shot {
    aspect-ratio: 16 / 10;
    margin-bottom: 16px;
  }
  .shot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.45s;
  }
  .card:hover .shot img {
    transform: scale(1.04);
  }
  .shot.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    background: repeating-linear-gradient(135deg, var(--bg-2), var(--bg-2) 11px, #0d1525 11px, #0d1525 22px);
  }
  .shot.empty span {
    font-family: var(--mono);
    font-size: 11.5px;
    color: var(--faint);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .glive {
    position: absolute;
    top: 10px;
    left: 10px;
    font-family: var(--mono);
    font-size: 10px;
    color: #160a03;
    background: var(--orange);
    border-radius: 6px;
    padding: 3px 8px;
    font-weight: 700;
    z-index: 2;
    letter-spacing: 0.03em;
  }
  .case-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 15px;
    font-family: var(--mono);
    font-size: 12.5px;
    color: var(--orange);
    font-weight: 500;
    transition: gap 0.2s;
  }
  .case-link:hover {
    gap: 11px;
  }
  .case-soon {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 15px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--faint);
  }
  @media (max-width: 880px) {
    .card.feature {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
</style>
