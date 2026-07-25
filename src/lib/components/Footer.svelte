<script>
  import { base } from '$app/paths';
  import { profile } from '$lib/data/profile.js';
  import Icon from './Icon.svelte';
</script>

<footer>
  <div class="wrap foot">
    <span>© {new Date().getFullYear()} {profile.name} · Kangkode</span>
    <div class="social">
      {#if profile.github}
        <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" /></a>
      {/if}
      {#if profile.linkedin}
        <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" /></a>
      {/if}
      <a href="mailto:{profile.email}" aria-label="Email"><Icon name="mail" /></a>
    </div>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--line-soft);
    padding: 34px 0;
    margin-top: 24px;
  }
  .foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 13px;
    color: var(--muted);
  }
  .social {
    display: flex;
    gap: 18px;
  }
  .social a {
    color: var(--muted);
    transition: color 0.18s;
    display: inline-flex;
  }
  .social a:hover {
    color: var(--orange);
  }
</style>
