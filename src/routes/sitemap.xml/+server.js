import { projects } from '$lib/data/projects.js';
import { profile } from '$lib/data/profile.js';

export const prerender = true;

export function GET() {
  const paths = ['/', ...projects.filter((p) => p.hasCaseStudy).map((p) => `/work/${p.slug}`)];
  const urls = paths
    .map((p) => `  <url><loc>${profile.url}${p === '/' ? '/' : p}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
