// ─────────────────────────────────────────────────────────────
//  Edit your identity, contact details, and homepage content here.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: 'Reda Rezika',
  brandDomain: 'kangkode.dev',
  role: 'Fullstack Developer',
  location: 'Bogor / Jakarta, ID',

  // SEO / social sharing
  url: 'https://kangkode.dev',
  description:
    'Reda Rezika — fullstack developer building multi-tenant SaaS end to end: backend, web, mobile, infra, and UI/UX. Case studies across HRIS, recruitment, F&B, and community platforms.',
  ogImage: '/og.png',

  status: 'Open for select freelance & full-time roles',

  hero: {
    line1: 'I build entire platforms,',
    accent: 'top to bottom.',
    sub: 'Fullstack developer with <b>9 years</b> shipping multi-tenant SaaS solo — <b>backend, web, mobile, infra</b>, and the UI/UX in between. I don\u2019t hand off the design; I own it.',
    meta: [
      '<b>Kangkode</b> · independent studio',
      'Bogor / Jakarta, ID',
      'Go · .NET · Laravel · Flutter'
    ]
  },

  // Contact + socials. Leave a value as '' to hide it (e.g. github).
  email: 'reda.rezika02@gmail.com',
  phone: '+62 812-8178-1947',
  linkedin: 'https://linkedin.com/in/reda-rezika-7814a41b3',
  github: '', // no public GitHub yet — set a URL to show the link
  // CV download. Left empty so no PDF (with your phone number) is committed to the repo.
  // To offer a direct download, host the PDF yourself (Google Drive / Dropbox / R2 / etc.)
  // and paste the public URL here. Empty = the contact section shows a LinkedIn button instead.
  cv: '',

  stats: [
    { num: '9', label: 'years building' },
    { num: '3', label: 'countries shipped' },
    { num: '6', label: 'stack layers owned' }
  ],

  exploring: ['LLM pipelines', 'Ollama · Qwen3', 'RAG · pgvector', 'text-to-SQL', 'SDXL / ComfyUI'],

  // "How to read the cards" — the six ownership layers.
  legend: [
    { k: 'L1', icon: 'palette', title: 'Design · UI/UX', desc: 'Product flows, design systems, hi-fi prototypes — not just dev-grade screens.' },
    { k: 'L2', icon: 'browser', title: 'Web frontend', desc: 'React, Svelte / SvelteKit, TypeScript — dense, fast enterprise UIs.' },
    { k: 'L3', icon: 'mobile', title: 'Mobile', desc: 'Flutter apps with geofencing, clock-in, and offline-friendly flows.' },
    { k: 'L4', icon: 'server', title: 'API · services', desc: 'Go, .NET, Laravel, Bun/Hono — multi-tenant domains, events, approvals.' },
    { k: 'L5', icon: 'database', title: 'Database', desc: 'PostgreSQL / MySQL — versioned schemas, migrations, encryption, pgvector.' },
    { k: 'L6', icon: 'cloud', title: 'Infra · DevOps', desc: 'GCP, Azure, Docker, Jenkins, Caddy — CI/CD, deploys, secrets.' }
  ],

  capabilities: [
    { icon: 'server', name: 'Backend', items: ['Go', '.NET', 'Laravel / PHP', 'Bun · Hono'] },
    { icon: 'browser', name: 'Frontend', items: ['React', 'Svelte / SvelteKit', 'TypeScript'] },
    { icon: 'mobile', name: 'Mobile', items: ['Flutter', 'Dart'] },
    { icon: 'database', name: 'Data', items: ['PostgreSQL', 'MySQL', 'Drizzle', 'pgvector'] },
    { icon: 'cloud', name: 'DevOps', items: ['GCP', 'Azure', 'Docker', 'Jenkins', 'CI/CD', 'Caddy'] },
    { icon: 'palette', name: 'Design', items: ['UI/UX', 'Figma', 'Design systems', 'Prototyping'] }
  ],

  about: [
    'I\u2019m a fullstack developer based near <b>Bogor, West Java</b>, building enterprise software at <b>KST (Jakarta)</b> and running my own studio, <b>Kangkode</b>, for independent work.',
    'My focus is HR and workforce platforms and other multi-tenant SaaS — the kind of product where one person has to be comfortable from PostgreSQL migrations all the way up to the design system. I treat <b>UI/UX as part of engineering</b>, not a separate phase, and I care about deployments that actually survive production.',
    'Currently open to <b>international freelance and full-time roles</b>.'
  ]
};
