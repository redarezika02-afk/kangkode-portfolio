<script>
  import { base } from '$app/paths';
  import { reveal } from '$lib/actions/reveal.js';
  import { profile } from '$lib/data/profile.js';
  import { projects } from '$lib/data/projects.js';
  import BrowserFrame from '$lib/components/BrowserFrame.svelte';
  import CaseSection from '$lib/components/CaseSection.svelte';
  import Icon from '$lib/components/Icon.svelte';

  export let data;
  $: project = data.project;

  // next case study (wraps), for the bottom pager
  $: caseList = projects.filter((p) => p.hasCaseStudy);
  $: idx = caseList.findIndex((p) => p.slug === project.slug);
  $: next = caseList[(idx + 1) % caseList.length];
</script>

<svelte:head>
  <title>{project.name} — Case study · {profile.name}</title>
</svelte:head>

<!-- HERO -->
<section class="chero">
  <div class="wrap">
    <a class="crumb" href="{base}/#work"><Icon name="chevron-left" size={15} />All work</a>
    <span class="eyebrow">{project.hero.eyebrow}</span>
    <h1 class="chero-h">{@html project.hero.title}</h1>
    <p class="chero-lead">{@html project.hero.lead}</p>
    <div class="chero-meta">
      {#each project.hero.meta as m}<span class="chip"><b>{m.k}</b> {m.v}</span>{/each}
    </div>
    <div class="chero-shot" use:reveal>
      <BrowserFrame src={project.hero.shot.src} alt={project.hero.shot.alt} url={project.hero.shot.url} />
    </div>
  </div>
</section>

{#each project.sections as section}
  <CaseSection {section} {project} />
{/each}

<!-- PAGER -->
<section class="pager">
  <div class="wrap pager-inner">
    <a class="pg all" href="{base}/#work"><Icon name="arrow-left" size={16} />All work</a>
    <a class="pg next" href="{base}/work/{next.slug}">
      <span>
        <small>next case study</small>
        <b>{next.name}</b>
      </span>
      <Icon name="arrow-right" size={18} />
    </a>
  </div>
</section>

<style>
  .chero {
    padding: 40px 0 30px;
  }
  .crumb {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--mono);
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 26px;
    transition: color 0.18s;
  }
  .crumb:hover {
    color: var(--orange);
  }
  .chero-h {
    font-size: clamp(30px, 4.6vw, 50px);
    line-height: 1.05;
    letter-spacing: -0.025em;
    font-weight: 800;
    margin: 14px 0 20px;
  }
  .chero-lead {
    font-size: clamp(15.5px, 1.7vw, 18px);
    color: var(--ink-2);
    max-width: 60ch;
    line-height: 1.6;
    margin: 0 0 24px;
  }
  .chero-lead :global(b) {
    color: var(--ink);
    font-weight: 600;
  }
  .chero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
  }
  .chero-shot {
    margin-top: 8px;
  }

  .pager {
    padding: 40px 0 20px;
    border-top: 1px solid var(--line-soft);
    margin-top: 30px;
  }
  .pager-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }
  .pg {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: 0.2s;
  }
  .pg.all {
    font-family: var(--mono);
    font-size: 13.5px;
    color: var(--muted);
  }
  .pg.all:hover {
    color: var(--ink);
  }
  .pg.next {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 16px 22px;
    color: var(--ink);
  }
  .pg.next:hover {
    border-color: var(--orange);
    transform: translateY(-2px);
  }
  .pg.next small {
    display: block;
    font-family: var(--mono);
    font-size: 10.5px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .pg.next b {
    font-size: 15px;
    font-weight: 700;
  }
  .pg.next :global(svg) {
    color: var(--orange);
  }
</style>
