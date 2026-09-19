import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Fully prerendered static site — deploy the ./build folder anywhere
    // (Cloudflare Pages, Netlify, GitHub Pages, Vercel, S3, ...).
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: ['*', '/sitemap.xml']
    }
    // If you ever deploy under a sub-path, set:
    // paths: { base: '/your-subpath' }
  }
};

export default config;
