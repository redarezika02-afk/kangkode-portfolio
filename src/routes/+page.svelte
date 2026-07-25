<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { asset } from '$lib/utils.js';
  import { reveal } from '$lib/actions/reveal.js';
  import { profile } from '$lib/data/profile.js';
  import { projects } from '$lib/data/projects.js';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import StrataStrip from '$lib/components/StrataStrip.svelte';
  import Icon from '$lib/components/Icon.svelte';

  // Projects with a full case study go in the main grid; the rest go in "Also shipped".
  const mainProjects = projects.filter((p) => p.hasCaseStudy);
  const alsoShipped = projects.filter((p) => !p.hasCaseStudy);

  const heroLayers = ['Design · UI/UX', 'Web frontend', 'Mobile', 'API · services', 'Database', 'Infra · DevOps'];
  let built = false;
  onMount(() => (built = true));
</script>

<svelte:head>
  <title>{profile.name} — {profile.role} · Kangkode</title>
</svelte:head>

<!-- HERO -->
<section class="hero" id="top">
  <div class="wrap hero-grid">
    <div>
      <div class="status"><span class="dot"></span>{profile.status}</div>
      <h1 class="hero-h">{profile.hero.line1}<br /><span class="accent">{profile.hero.accent}</span></h1>
      <p class="hero-sub">{@html profile.hero.sub}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#work">View work <Icon name="external" size={16} /></a>
        <a class="btn btn-ghost" href="#contact">Get in touch</a>
      </div>
      <div class="hero-meta">
        {#each profile.hero.meta as m}<span>{@html m}</span>{/each}
      </div>
    </div>

    <div class="hstrata" class:built aria-hidden="true">
      <div class="stitle"><span>full stack</span><span>// owned</span></div>
      {#each heroLayers as layer}
        <div class="srow on"><span class="sbar"><span class="slabel">{layer}</span><span class="scheck">●</span></span></div>
      {/each}
    </div>
  </div>
</section>

<!-- STACK LEGEND -->
<section id="stack">
  <div class="wrap">
    <div class="sec-head" use:reveal>
      <span class="eyebrow">how to read the cards</span>
      <h2>One person. Six layers.</h2>
      <p>Every project below carries a stack strip showing which layers I personally designed and built. Most are end-to-end.</p>
    </div>
    <div class="legend">
      {#each profile.legend as l}
        <div class="lcard" use:reveal>
          <span class="lk">{l.k}</span>
          <div class="lico"><Icon name={l.icon} /></div>
          <h4>{l.title}</h4>
          <p>{l.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- WORK -->
<section id="work">
  <div class="wrap">
    <div class="sec-head" use:reveal>
      <span class="eyebrow">selected work</span>
      <h2>Production systems, shipped end to end.</h2>
      <p>Real platforms in production across HR, recruitment, F&B, fintech, and community — each one designed, built, and deployed.</p>
    </div>
    <div class="work-grid">
      {#each mainProjects as p}
        <ProjectCard project={p} feature={p.feature} />
      {/each}
    </div>

    {#if alsoShipped.length}
      <div class="also">
        <div class="also-head reveal">
          <span class="eyebrow">also shipped</span>
          <p>Production work without a full case study here — real, shipped, and part of the picture.</p>
        </div>
        <div class="also-grid">
          {#each alsoShipped as p}
            <div class="mini reveal">
              <div class="card-type">
                {p.card.type}
                {#each p.card.badges as b}<span class="badge">{b}</span>{/each}
              </div>
              <h3>{p.name}</h3>
              <p class="mini-desc">{@html p.card.desc}</p>
              <div class="mini-strata"><StrataStrip layers={p.strata} variant="card" /></div>
              <div class="tags">{#each p.card.tags as t}<span class="tag">{t}</span>{/each}</div>
              <div class="role">role · <b>{p.card.role}</b></div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- CAPABILITIES -->
<section>
  <div class="wrap">
    <div class="sec-head" use:reveal>
      <span class="eyebrow">capabilities</span>
      <h2>The toolbox.</h2>
      <p>Picked per problem, not per trend — backend and infra are home base, design is a deliberate choice.</p>
    </div>
    <div class="cap-grid">
      {#each profile.capabilities as cap}
        <div class="cap" use:reveal>
          <div class="cap-h"><span class="cico"><Icon name={cap.icon} /></span><h4>{cap.name}</h4></div>
          <ul>{#each cap.items as it}<li>{it}</li>{/each}</ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="wrap about-grid">
    <div class="about" use:reveal>
      <span class="eyebrow">about</span>
      <h2 class="about-h">{profile.name}</h2>
      {#each profile.about as p}<p>{@html p}</p>{/each}
    </div>
    <div use:reveal>
      <div class="stat-row">
        {#each profile.stats as s}
          <div class="stat"><div class="num">{s.num}</div><div class="lbl">{s.label}</div></div>
        {/each}
      </div>
      <div class="stat exploring">
        <div class="lbl explabel">// also exploring</div>
        <div class="tags">{#each profile.exploring as e}<span class="tag">{e}</span>{/each}</div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="wrap">
    <div class="contact" use:reveal>
      <span class="eyebrow ctop">let's talk</span>
      <h2>Got a platform to build?</h2>
      <p>Backend, mobile, or a whole product from zero — I can take it from architecture to a shipped, designed, deployed system.</p>
      <div class="contact-links">
        <a class="btn btn-primary" href="mailto:{profile.email}"><Icon name="mail" size={16} />{profile.email}</a>
        {#if profile.cv}
          <a class="btn btn-ghost" href={profile.cv.startsWith('http') ? profile.cv : asset(profile.cv)} target="_blank" rel="noopener">Download CV</a>
        {:else if profile.linkedin}
          <a class="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener"><Icon name="linkedin" size={16} />LinkedIn</a>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 78px 0;
    position: relative;
  }
  /* hero */
  .hero {
    padding: 96px 0 70px;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1.25fr 0.85fr;
    gap: 56px;
    align-items: center;
  }
  .status {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-2);
    background: var(--surface);
    border: 1px solid var(--line);
    padding: 6px 13px;
    border-radius: 999px;
    margin-bottom: 26px;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--ok);
    box-shadow: 0 0 0 0 rgba(57, 217, 138, 0.6);
    animation: pulse 2.4s infinite;
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(57, 217, 138, 0.55);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(57, 217, 138, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(57, 217, 138, 0);
    }
  }
  .hero-h {
    font-size: clamp(34px, 5vw, 58px);
    line-height: 1.02;
    letter-spacing: -0.025em;
    font-weight: 800;
    margin: 0 0 22px;
  }
  .hero-h .accent {
    color: var(--orange);
  }
  .hero-sub {
    font-size: clamp(15.5px, 1.6vw, 18px);
    color: var(--ink-2);
    max-width: 38ch;
    margin: 0 0 34px;
  }
  .hero-sub :global(b) {
    color: var(--ink);
    font-weight: 600;
  }
  .hero-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 34px;
  }
  .hero-meta {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    font-family: var(--mono);
    font-size: 12.5px;
    color: var(--muted);
  }
  .hero-meta :global(b) {
    color: var(--ink);
    font-weight: 600;
  }
  /* hero strata */
  .hstrata {
    padding: 24px;
    background: linear-gradient(160deg, var(--surface), var(--bg-2));
    border: 1px solid var(--line);
    border-radius: 20px;
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .stitle {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
  }
  .srow {
    display: flex;
    align-items: center;
  }
  .sbar {
    height: 30px;
    border-radius: 8px;
    flex: 1;
    border: 1px solid rgba(255, 106, 43, 0.5);
    background: linear-gradient(90deg, rgba(255, 106, 43, 0.22), rgba(255, 106, 43, 0.05));
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 13px;
  }
  .sbar::before {
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
    font-size: 12px;
    color: var(--ink);
    z-index: 1;
  }
  .scheck {
    margin-left: auto;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--orange);
    z-index: 1;
  }
  .hstrata.built .srow {
    animation: rise 0.55s cubic-bezier(0.2, 0.7, 0.3, 1) both;
  }
  .hstrata.built .srow:nth-child(7) {
    animation-delay: 0.05s;
  }
  .hstrata.built .srow:nth-child(6) {
    animation-delay: 0.16s;
  }
  .hstrata.built .srow:nth-child(5) {
    animation-delay: 0.27s;
  }
  .hstrata.built .srow:nth-child(4) {
    animation-delay: 0.38s;
  }
  .hstrata.built .srow:nth-child(3) {
    animation-delay: 0.49s;
  }
  .hstrata.built .srow:nth-child(2) {
    animation-delay: 0.6s;
  }
  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* legend */
  .legend {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  .lcard {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 18px 18px 16px;
    position: relative;
  }
  .lico {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: var(--surface-2);
    border: 1px solid var(--line);
    color: var(--orange);
    margin-bottom: 13px;
  }
  .lcard h4 {
    margin: 0 0 5px;
    font-size: 15px;
    font-weight: 700;
  }
  .lcard p {
    margin: 0;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.45;
  }
  .lk {
    position: absolute;
    top: 18px;
    right: 18px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--faint);
  }

  /* work */
  .work-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  /* also shipped */
  .also {
    margin-top: 40px;
    padding-top: 34px;
    border-top: 1px solid var(--line-soft);
  }
  .also-head {
    margin-bottom: 22px;
  }
  .also-head p {
    color: var(--muted);
    font-size: 14px;
    margin: 10px 0 0;
    max-width: 60ch;
  }
  .also-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 380px));
    gap: 16px;
  }
  .mini {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    transition: 0.25s;
  }
  .mini:hover {
    border-color: #2c3c63;
    transform: translateY(-2px);
  }
  .mini .card-type {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--orange);
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 11px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .mini .badge {
    color: var(--muted);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 2px 7px;
    font-size: 10px;
  }
  .mini h3 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0 0 9px;
  }
  .mini-desc {
    color: var(--ink-2);
    font-size: 13.5px;
    line-height: 1.55;
    margin: 0 0 16px;
  }
  .mini-desc :global(b) {
    color: var(--ink);
    font-weight: 600;
  }
  .mini-strata {
    margin-bottom: 16px;
  }
  .mini .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: auto;
  }
  .mini .role {
    margin-top: 14px;
    font-size: 12px;
    color: var(--muted);
    font-family: var(--mono);
  }
  .mini .role b {
    color: var(--gold);
    font-weight: 600;
  }
  @media (max-width: 560px) {
    .also-grid {
      grid-template-columns: 1fr;
    }
  }

  /* capabilities */
  .cap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  .cap {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 22px;
  }
  .cap-h {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 15px;
  }
  .cico {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: grid;
    place-items: center;
    background: var(--surface-2);
    border: 1px solid var(--line);
    color: var(--orange);
  }
  .cap-h h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
  }
  .cap ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .cap li {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-2);
    background: var(--bg-2);
    border: 1px solid var(--line-soft);
    border-radius: 7px;
    padding: 4px 9px;
  }

  /* about */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }
  .about-h {
    font-size: clamp(26px, 3.4vw, 38px);
    letter-spacing: -0.02em;
    font-weight: 800;
    margin: 14px 0 18px;
  }
  .about p {
    color: var(--ink-2);
    font-size: 15.5px;
    line-height: 1.7;
    margin: 0 0 16px;
  }
  .about p :global(b) {
    color: var(--ink);
  }
  .stat-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .stat {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 20px;
  }
  .stat .num {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--orange);
  }
  .stat .lbl {
    font-size: 12.5px;
    color: var(--muted);
    margin-top: 4px;
    font-family: var(--mono);
  }
  .exploring {
    margin-top: 16px;
  }
  .explabel {
    margin-bottom: 10px;
    color: var(--ink-2);
  }
  .exploring .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  /* contact */
  .contact {
    background: linear-gradient(160deg, var(--surface), var(--bg-2));
    border: 1px solid var(--line);
    border-radius: 24px;
    padding: 54px 44px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .contact::before {
    content: '';
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 480px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 106, 43, 0.16), transparent 60%);
  }
  .ctop {
    position: relative;
  }
  .contact h2 {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 14px 0 14px;
    position: relative;
  }
  .contact p {
    color: var(--ink-2);
    max-width: 46ch;
    margin: 0 auto 30px;
    position: relative;
  }
  .contact-links {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }

  @media (max-width: 880px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 38px;
    }
    .hstrata {
      max-width: 420px;
    }
    .legend {
      grid-template-columns: 1fr;
    }
    .work-grid {
      grid-template-columns: 1fr;
    }
    .cap-grid {
      grid-template-columns: 1fr;
    }
    .about-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  @media (max-width: 560px) {
    .stat-row {
      grid-template-columns: 1fr 1fr;
    }
    .contact {
      padding: 40px 24px;
    }
    section {
      padding: 60px 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .hstrata .srow {
      opacity: 1;
      transform: none;
    }
  }
</style>
