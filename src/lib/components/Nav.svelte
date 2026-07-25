<script>
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile.js';

  let open = false;
  const close = () => (open = false);
</script>

<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="{base}/" on:click={close}>
      <span class="mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M5 3.5V18.5" stroke="#ECEFF7" stroke-width="2.4" stroke-linecap="round" />
          <path d="M5 11L16 3.5" stroke="#FF6A2B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 11L16 18.5" stroke="#FF6A2B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <span class="name">{profile.name}<small>{profile.brandDomain}</small></span>
    </a>

    <nav class="nav-links" class:open>
      <a href="{base}/#work" on:click={close}>Work</a>
      <a href="{base}/#stack" on:click={close}>Stack</a>
      <a href="{base}/#about" on:click={close}>About</a>
      <a class="nav-cta" href="{base}/#contact" on:click={close}>
        <span class="dot"></span>Available
      </a>
    </nav>

    <button class="nav-toggle" aria-label="Menu" on:click={() => (open = !open)}>
      <svg class="ic" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
    </button>
  </div>
</header>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    -webkit-backdrop-filter: saturate(140%) blur(14px);
    backdrop-filter: saturate(140%) blur(14px);
    background: rgba(8, 11, 20, 0.72);
    border-bottom: 1px solid var(--line-soft);
  }
  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 11px;
    font-weight: 700;
  }
  .name {
    font-size: 15px;
    letter-spacing: -0.01em;
  }
  .name small {
    display: block;
    font-family: var(--mono);
    font-size: 10.5px;
    font-weight: 500;
    color: var(--muted);
    letter-spacing: 0.02em;
  }
  .mark {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    border-radius: 9px;
    display: grid;
    place-items: center;
    background: linear-gradient(140deg, #1a2540, #0e1626);
    border: 1px solid var(--line);
  }
  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .nav-links a {
    font-size: 14px;
    color: var(--ink-2);
    font-weight: 500;
    transition: color 0.18s;
  }
  .nav-links a:hover {
    color: var(--ink);
  }
  .nav-cta {
    font-family: var(--mono);
    font-size: 12.5px;
    padding: 9px 15px;
    border-radius: 9px;
    border: 1px solid var(--line);
    color: var(--ink) !important;
    display: inline-flex;
    gap: 7px;
    align-items: center;
  }
  .nav-cta:hover {
    border-color: var(--orange);
    color: var(--orange) !important;
  }
  .dot {
    width: 7px;
    height: 7px;
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
  .nav-toggle {
    display: none;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--line);
    border-radius: 9px;
    background: transparent;
    color: var(--ink);
    cursor: pointer;
  }
  @media (max-width: 880px) {
    .nav-links {
      display: none;
    }
    .nav-links.open {
      display: flex;
      position: absolute;
      top: 66px;
      left: 0;
      right: 0;
      flex-direction: column;
      gap: 0;
      background: var(--bg-2);
      border-bottom: 1px solid var(--line);
      padding: 8px 24px;
    }
    .nav-links.open a {
      padding: 13px 0;
      border-bottom: 1px solid var(--line-soft);
    }
    .nav-toggle {
      display: grid;
    }
  }
</style>
