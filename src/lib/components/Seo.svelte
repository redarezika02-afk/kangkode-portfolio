<script>
  import { profile } from '$lib/data/profile.js';

  export let title;
  export let description = profile.description;
  export let path = '/'; // route path, e.g. '/' or '/work/hrmonis'
  export let image = profile.ogImage; // relative path or absolute URL

  $: canonical = profile.url + (path === '/' ? '/' : path);
  $: ogImage = image && image.startsWith('http') ? image : profile.url + image;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Kangkode" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:locale" content="en_US" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
