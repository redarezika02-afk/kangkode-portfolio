// ─────────────────────────────────────────────────────────────
//  All project content lives here. To add a project: copy a block,
//  change the data, drop screenshots in /static/shots. No markup needed.
//
//  strata layers via L(design, web, mobile, api, data, infra) — booleans.
//  A project renders a case-study page only when `hasCaseStudy` is true
//  and it has a `sections` array.
// ─────────────────────────────────────────────────────────────

const L = (d, w, m, a, da, i) => [
  { label: 'Design', on: d },
  { label: 'Web', on: w },
  { label: 'Mobile', on: m },
  { label: 'API', on: a },
  { label: 'Data', on: da },
  { label: 'Infra', on: i }
];

export const projects = [
  // ══════════════════════ HRMONIS (flagship) ══════════════════════
  {
    slug: 'hrmonis',
    name: 'HRMonis',
    feature: true,
    hasCaseStudy: true,
    strata: L(true, true, true, true, true, true),
    card: {
      type: 'Web & Mobile',
      badges: ['HRIS', 'flagship'],
      live: true,
      thumb: '/shots/hrmonis-dashboard-thumb.jpg',
      role: 'Developer + Designer (independent)',
      tags: ['Go', 'React', 'PostgreSQL', 'Flutter', 'Figma'],
      desc: 'A multi-tenant HRIS for <b>Transklin Indonesia</b> — <b>1,472 active staff</b> across client sites, with selfie clock-in, shift scheduling, leave, and payroll. Built solo end to end, then re-architected from a Laravel monolith to a <b>Go + React + Flutter</b> platform while staying live.'
    },
    hero: {
      eyebrow: 'case study · flagship',
      title: 'HRMonis — a multi-tenant<br>HRIS for Transklin Indonesia',
      lead: 'An HRIS serving <b>1,472 active employees</b> placed across client sites nationwide — attendance with selfie clock-in, shift scheduling, leave, and payroll. Designed and built solo, then <b>re-architected from a Laravel monolith to a Go + React platform</b> while staying live in production.',
      meta: [
        { k: 'client', v: 'Transklin Indonesia' },
        { k: 'role', v: 'Independent · solo · design + build' },
        { k: 'timeline', v: 'Nov 2023 – present' },
        { k: 'stack v2', v: 'Go · React · PostgreSQL · Flutter' }
      ],
      shot: { url: 'HRMonis v2.0.0', src: '/shots/hrmonis-dashboard.jpg', alt: 'HRMonis v2 dashboard' }
    },
    facts: [
      { k: 'Client', v: 'Transklin Indonesia' },
      { k: 'Scale', v: '1,472 active staff' },
      { k: 'Model', v: 'Multi-tenant · multi-site' },
      { k: 'Role', v: 'Solo · design + build' },
      { k: 'Status', v: 'Live · v2.0.0' }
    ],
    factTags: ['Go', 'React', 'PostgreSQL', 'Flutter', 'Figma'],
    sections: [
      {
        type: 'overview',
        eyebrow: 'the brief',
        heading: 'Workforce ops, across many sites at once.',
        paragraphs: [
          'Transklin places staff at client locations across Indonesia — hospitals, branches, facilities. Running HR for that means tracking attendance, shifts, leave, contracts, and payroll for <b>over a thousand people who don\u2019t sit in one office</b>, spread across sites that each run their own schedules.',
          'HRMonis is the platform that holds all of it: <b>multi-tenant, multi-site</b>, with a selfie-verified clock-in from a mobile app, a weekly shift planner, an approval queue covering seven request types, and a payroll module — built around Indonesian labour rules.',
          'I built and designed it end to end as an independent project. The first version shipped on Laravel; as it grew, I rebuilt the whole stack on <b>Go and React</b> without ever taking it offline.'
        ]
      },
      {
        type: 'evolution',
        eyebrow: 'the evolution',
        heading: 'From a Laravel monolith to a Go + React platform.',
        intro:
          'The same product, rebuilt. Here\u2019s the shift planner in both versions — identical job, a completely different machine underneath.',
        v1: { tag: 'v1 · 2023–24', meta: 'Laravel · Bootstrap', src: '/shots/hrmonis-shift-v1.jpg', alt: 'HRMonis v1 shift schedule' },
        v2: { tag: 'v2 · 2025 →', meta: 'Go · React', src: '/shots/hrmonis-shift-v2.jpg', alt: 'HRMonis v2 shift schedule' },
        sameLabel: 'same feature · <b>Shift Karyawan</b> — weekly schedule per site &amp; department',
        migrate: [
          { label: 'Frontend', from: 'Bootstrap · server-rendered', to: 'React SPA' },
          { label: 'Backend', from: 'Laravel (PHP)', to: 'Go' },
          { label: 'Database', from: 'MySQL', to: 'PostgreSQL' },
          { label: 'Mobile', from: 'No app', to: 'Flutter app · selfie clock-in' },
          { label: 'Experience', from: 'Full page reloads', to: '\u2318K palette · instant nav · week replication' }
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'inside v2',
        heading: 'The product today.',
        intro: 'Live production screens. Tap any to enlarge.',
        items: [
          {
            n: '01',
            url: 'HRMonis · dashboard',
            src: '/shots/hrmonis-dashboard.jpg',
            alt: 'Dashboard',
            title: 'Dashboard.',
            body: 'An HR command center — active headcount, today\u2019s attendance rate, pending approvals, an <b>approval queue</b> across seven request types, and a \u201Cneeds attention\u201D watchlist for expiring contracts, probation, and birthdays.'
          },
          {
            n: '02',
            url: 'HRMonis · kehadiran',
            src: '/shots/hrmonis-absensi.jpg',
            alt: 'Attendance',
            title: 'Attendance.',
            body: 'The web \u2194 mobile loop: staff clock in and out with a <b>selfie on the Flutter app</b>, and HR sees each scan here against the scheduled shift — on-time vs late, per site — with PDF, Excel, and recap exports.'
          },
          {
            n: '03',
            url: 'HRMonis · shift',
            src: '/shots/hrmonis-shift-v2.jpg',
            alt: 'Shift scheduling',
            title: 'Shift scheduling.',
            body: 'A weekly matrix per site and department with colour-coded shift codes, bulk select, \u201Capply to week,\u201D and <b>replicate-week</b> — built to schedule hundreds of staff fast, with off-days and approvals baked in.'
          },
          {
            n: '04',
            url: 'HRMonis · login',
            src: '/shots/hrmonis-login.jpg',
            alt: 'Login',
            title: 'Sign-in.',
            body: 'A focused auth screen with the Transklin identity — the same design language that runs through the whole product: dark navy, orange accent, Plus Jakarta Sans.'
          }
        ]
      },
      {
        type: 'phones',
        eyebrow: 'on mobile',
        heading: 'The other half of the loop.',
        intro:
          'The Flutter app is where the workforce actually lives. Staff clock in with a selfie, swap shifts, request leave, and pull payslips — and supervisors approve from the same app.',
        items: [
          { src: '/shots/hrmonis-m-home.jpg', alt: 'HRMonis mobile home', title: 'Beranda', caption: 'Greeting, today\u2019s shift,<br>one-tap clock-in + full menu' },
          { src: '/shots/hrmonis-m-absensi.jpg', alt: 'HRMonis mobile attendance', title: 'Absensi', caption: 'Clock-in status vs schedule<br>+ monthly summary' },
          { src: '/shots/hrmonis-m-approve.jpg', alt: 'HRMonis mobile supervisor view', title: 'Manajemen · atasan', caption: 'Role-based supervisor view<br>team attendance + approvals' },
          { src: '/shots/hrmonis-m-login.jpg', alt: 'HRMonis mobile login', title: 'Masuk', caption: 'Transklin-branded sign-in<br>v2.0.2 · shipped' }
        ]
      },
      {
        type: 'grid',
        eyebrow: 'under the hood',
        heading: 'What makes it hold together.',
        intro: 'The interesting problems in an HRIS aren\u2019t the forms — they\u2019re tenancy, time, and approvals at scale.',
        items: [
          { icon: 'building', title: 'Multi-tenant, multi-site', body: 'One platform serving staff placed across separate client sites — <b>RS Awal Bros Batam, Transklin Pekanbaru</b>, and more — each with its own schedules and data isolation.' },
          { icon: 'arrow-right', title: 'Stack migration, live', body: 'Rebuilt from <b>Laravel / Bootstrap / MySQL</b> to a <b>Go API + React SPA on PostgreSQL</b>, plus a Flutter app — without taking production offline.' },
          { icon: 'clock-in', title: 'Flutter clock-in', body: 'Selfie-verified attendance from the mobile app, synced to the web ledger and reconciled against each employee\u2019s scheduled shift.' },
          { icon: 'badge-check', title: 'Approval engine', body: 'Seven request types — onboarding, transfer, offboarding, leave, shift swap, data change, leave-balance adjustment — flowing through one unified queue.' },
          { icon: 'payroll', title: 'Payroll & shifts', body: 'A weekly shift planner with replication and bulk apply, feeding a payroll module shaped around Indonesian labour rules.' },
          { icon: 'gauge', title: 'Built for speed', body: 'The SPA rewrite pays off in daily use: a <b>\u2318K command palette</b>, instant client-side navigation, and dense tables that stay responsive at headcount.' }
        ]
      }
    ]
  },

  // ══════════════════════ WAREHOUSE MANAGEMENT SYSTEM ══════════════════════
  {
    slug: 'warehouse-management-system',
    name: 'Warehouse Management System',
    hasCaseStudy: true,
    strata: L(false, true, false, true, true, false),
    card: {
      type: 'Web',
      badges: ['WMS · F&B'],
      live: true,
      thumb: '/shots/wms-production-thumb.jpg',
      role: 'Developer (solo)',
      tags: ['Laravel', 'ExtJS', 'MySQL'],
      desc: 'Large-scale WMS for a multi-outlet F&B group (Hachi Group) — inventory, stock movement, recipe-based production planning, multi-warehouse transfers, and supplier procurement — handling high-volume data with queues and scheduled jobs.'
    },
    hero: {
      eyebrow: 'case study',
      title: 'Warehouse Management System<br>for Hachi Group',
      lead: 'A multi-outlet warehouse and central-kitchen platform for an Indonesian F&B group — <b>procurement, stock movement, recipe-based production planning, and inter-warehouse transfers</b> in one system, built end to end on Laravel and ExtJS.',
      meta: [
        { k: 'client', v: 'Hachi Group · F&B' },
        { k: 'role', v: 'Independent · solo build' },
        { k: 'timeline', v: 'Apr 2022 – Aug 2023' },
        { k: 'stack', v: 'Laravel · ExtJS · MySQL' }
      ],
      shot: { url: 'wms.hachigroup.id', src: '/shots/wms-production.jpg', alt: 'Production Plan screen' }
    },
    facts: [
      { k: 'Client', v: 'Hachi Group' },
      { k: 'Domain', v: 'F&B · multi-outlet' },
      { k: 'Role', v: 'Solo developer' },
      { k: 'Timeline', v: 'Apr 2022 – Aug 2023' },
      { k: 'Type', v: 'Internal web app' }
    ],
    factTags: ['Laravel', 'Eloquent', 'ExtJS', 'MySQL', 'Queues', 'Scheduler'],
    sections: [
      {
        type: 'overview',
        eyebrow: 'the brief',
        heading: 'Spreadsheets don\u2019t scale to a restaurant group.',
        paragraphs: [
          'Hachi Group runs multiple restaurant outlets fed by central kitchens and warehouses. Tracking ingredients, work-in-progress, and finished items across all of them by hand breaks down fast — especially with perishable F&B stock, recipes, and daily transfers between locations.',
          'They needed one system to <b>standardize the item master</b> across every outlet, run <b>procurement</b> from dozens of suppliers, move stock between warehouses and outlets, <b>plan production from recipes</b>, and reconcile exactly where every unit went each day.',
          'I built it as a single independent project — the <b>Laravel backend, the ExtJS front end, and the MySQL data model</b> — designed to hold up under high-volume daily operations.'
        ]
      },
      {
        type: 'grid',
        eyebrow: 'scope',
        heading: 'One system, the whole operation.',
        intro: 'The platform covers the full warehouse lifecycle — from raising a supplier PO to reconciling closing stock.',
        items: [
          { icon: 'cart', title: 'Procurement', body: 'Pemesanan Supplier, Penerimaan Supplier, Return Supplier — with approval status.' },
          { icon: 'clipboard', title: 'Inventory & opname', body: 'General Inventory, Partial Daily, Partial Weekly, BAP Form.' },
          { icon: 'cube', title: 'Production', body: 'Production Plan, Produksi, Item Production, Forecast Penjualan.' },
          { icon: 'transfer', title: 'Movement & transfers', body: 'Outlet & warehouse orders/dispatch, Stock Transfer, Perpindahan Lokasi, Kitchen Receiving.' },
          { icon: 'chart', title: 'Reporting', body: 'Pergerakan Stok, Laporan & Tools, Excel export.' },
          { icon: 'badge-check', title: 'Master & access', body: 'Shared item master, multi-outlet / multi-warehouse, department dimension, admin roles.' }
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'screens',
        heading: 'Inside the system.',
        intro: 'Live production screens. Tap any to enlarge.',
        items: [
          {
            n: '01',
            url: 'wms.hachigroup.id',
            src: '/shots/wms-production.jpg',
            alt: 'Production Plan',
            title: 'Production Plan.',
            body: 'Recipe-driven planning. A WIP item like <i>Bihun Paket</i> explodes into its recipe items and raw materials, with per-outlet, per-warehouse, per-department context — then generates the warehouse PO needed to produce it.'
          },
          {
            n: '02',
            url: 'wms.hachigroup.id',
            src: '/shots/wms-stock.jpg',
            alt: 'Stock Movement report',
            title: 'Stock Movement.',
            body: 'One reconciled ledger per item — opening stock through receipts, outlet shipments, supplier returns, BAP, location moves, production, transfers, and sales, all the way to closing stock — across hundreds of SKUs and every outlet.'
          },
          {
            n: '03',
            url: 'wms.hachigroup.id',
            src: '/shots/wms-po.jpg',
            alt: 'Supplier Purchase Orders',
            title: 'Supplier Purchase Orders.',
            body: 'Multi-outlet, multi-supplier procurement with approval states (<i>Approved / Closed</i>), generated PO numbers tied to each warehouse, and printable order documents.'
          }
        ]
      },
      {
        type: 'grid',
        eyebrow: 'under the hood',
        heading: 'Built to hold high-volume days.',
        intro: 'The hard part of a WMS isn\u2019t the screens — it\u2019s keeping a fast-moving stock ledger correct across many locations.',
        items: [
          { icon: 'server', title: 'Laravel core', body: 'Eloquent ORM, middleware, <b>queued jobs</b>, and the <b>task scheduler</b> handle heavy writes and background processing without blocking operators during peak hours.' },
          { icon: 'browser', title: 'ExtJS workspace', body: 'A tabbed, multi-document UI with <b>server-side grids</b> — paging and filtering over hundreds of SKUs — plus one-click Excel export for the ops and finance teams.' },
          { icon: 'database', title: 'Multi-location data model', body: 'A shared item master with <b>per-location stock ledgers</b>, supplier and warehouse entities, and outlet / warehouse / department dimensions on every movement.' },
          { icon: 'cube', title: 'Recipe / BOM engine', body: 'WIP items decompose into recipe items and raw materials, so a production plan can <b>explode finished dishes into the ingredients to order</b> and produce.' },
          { icon: 'transfer', title: 'Reconciling ledger', body: 'Every movement type folds into a single opening → closing balance, so <b>Stok Awal + ins − outs = Stok Akhir</b> always ties out per item, per day.' },
          { icon: 'badge-check', title: 'Approval workflows', body: 'Procurement and transfers move through explicit states (<b>Approved / Closed</b>) so warehouse and finance stay in sync on what\u2019s committed.' }
        ]
      }
    ]
  },

  // ══════════════════════ TATA TALENTS ══════════════════════
  {
    slug: 'tata-talents',
    name: 'Tata Talents',
    hasCaseStudy: true,
    strata: L(true, true, false, true, true, true),
    card: {
      type: 'Web',
      badges: ['Recruitment SaaS', 'AI'],
      live: false,
      thumb: '/shots/tata-status-thumb.jpg',
      role: 'Tech Lead + Developer',
      tags: ['Bun', 'Hono', 'Svelte', 'MySQL', 'Drizzle', 'Azure KV', 'GCS'],
      desc: 'Recruitment SaaS handling sensitive candidate data — CVs, salary, PII. <b>AI CV Autofill</b> (GPT-4o-mini) cut manual entry ~80% and scores CVs for ATS-friendliness. Client-side <b>envelope encryption</b> via Azure Key Vault and GCS signed-URL access, aligned with Indonesia\u2019s UU PDP.'
    },
    hero: {
      eyebrow: 'case study',
      title: 'Tata Talents — an AI-assisted<br>recruitment platform',
      lead: 'A recruitment SaaS built for KST to run hiring end to end — job requests, ads, candidate intake, an interview pipeline, and analytics. <b>AI reads each CV and auto-fills the form</b> (cutting manual entry ~80%) and scores it for ATS-friendliness, while sensitive candidate data is protected with <b>envelope encryption</b> and handled in line with Indonesia\u2019s UU PDP. I led it as Tech Lead.',
      meta: [
        { k: 'client', v: 'KST · internal SaaS' },
        { k: 'role', v: 'Tech Lead · design + build' },
        { k: 'focus', v: 'AI + sensitive PII' },
        { k: 'stack', v: 'Bun · Hono · Svelte · MySQL' }
      ],
      shot: { url: 'Tata Talents · dashboard', src: '/shots/tata-status.jpg', alt: 'Applicants by position and status dashboard' }
    },
    facts: [
      { k: 'Context', v: 'KST internal product' },
      { k: 'Domain', v: 'Recruitment SaaS' },
      { k: 'Role', v: 'Tech Lead + developer' },
      { k: 'Focus', v: 'AI + candidate PII' },
      { k: 'Version', v: 'v1.3.0' }
    ],
    factTags: ['Bun', 'Hono', 'Svelte', 'Drizzle', 'MySQL', 'Azure KV', 'GCS'],
    sections: [
      {
        type: 'overview',
        eyebrow: 'the brief',
        heading: 'Recruiting is data entry — and the data is sensitive.',
        paragraphs: [
          'Hiring runs on candidate data: CVs, contact details, expected salary, interview notes. Entering all of it by hand is slow and error-prone — and every field is <b>sensitive personal data</b> that has to be protected, not just stored.',
          'Tata Talents is the recruitment platform I built for KST to run the whole funnel: raise a <b>job request</b>, publish a <b>job ad</b>, intake candidates into a <b>talent pool</b>, move them through an interview pipeline, and read analytics on sources, salary, and status — all in one place.',
          'I led it as <b>Tech Lead</b>, owning the architecture, the AI pipeline, and the security model end to end.'
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'the flow',
        heading: 'From job request to hire.',
        intro: 'The core hiring loop. Tap any to enlarge.',
        items: [
          {
            n: '01',
            url: 'Tata Talents · add talent',
            src: '/shots/tata-intake.jpg',
            alt: 'Add Talent form',
            title: 'Candidate intake.',
            body: 'A new talent is tied to an accepted <b>job request</b> — the job ad and category auto-fill from it — then captures the candidate\u2019s details, location, and CV. One consistent entry point into the talent pool.'
          },
          {
            n: '02',
            url: 'Tata Talents · CV analysis',
            src: '/shots/tata-cv-ai.jpg',
            alt: 'AI CV Autofill and ATS score',
            title: 'AI CV Autofill + ATS score.',
            body: 'Upload a CV and <b>Analyze &amp; Auto-fill</b> reads the PDF, fills the form fields, and returns an <b>ATS-compatibility score</b> with reasons and the sections it detected — turning minutes of typing into a quick review-and-confirm. Roughly <b>80% less manual entry</b>.'
          },
          {
            n: '03',
            url: 'Tata Talents · interview status',
            src: '/shots/tata-pipeline.jpg',
            alt: 'Interview status pipeline',
            title: 'Interview pipeline.',
            body: 'A six-stage flow — <b>Open \u2192 Shortlisted \u2192 Recommended \u2192 Offering \u2192 Accepted \u2192 Finalized</b> — with contextual actions per stage (an accepted offer asks for a join date), tabbed candidate / interview / confirmation details, and full status history.'
          }
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'the numbers',
        heading: 'The reporting behind hiring.',
        intro: 'Analytics that make recruiting decisions data-driven.',
        items: [
          {
            n: '01',
            url: 'Tata Talents · analytics',
            src: '/shots/tata-analytics.jpg',
            alt: 'Applicant sources and salary overview',
            title: 'Sources & salary overview.',
            body: 'Which channels actually convert to hires (<b>Web, LinkedIn, referrals, Glints</b>) and what each role costs — average, min, and max salary per position — so recruiting spend and offers are grounded in the platform\u2019s own data.'
          }
        ]
      },
      {
        type: 'grid',
        eyebrow: 'under the hood',
        heading: 'AI where it saves time, encryption where it matters.',
        intro: 'The two hard problems here are reading messy CVs and protecting personal data — the rest is a clean, fast stack.',
        items: [
          { icon: 'sparkles', title: 'AI CV Autofill', body: 'A CV PDF is parsed by an LLM (<b>GPT-4o-mini</b>) into structured fields — name, contact, experience, skills — cutting manual data entry by roughly <b>80%</b>. HR reviews and confirms instead of retyping.' },
          { icon: 'chart', title: 'ATS compatibility scoring', body: 'The same analysis grades the CV for ATS-friendliness — a 0\u2013100 score with <b>reasons</b> (strong summary, missing keywords) and the <b>sections it detected</b> — so recruiters can flag weak CVs early.' },
          { icon: 'shield', title: 'Envelope encryption', body: 'Candidate files use <b>client-side envelope encryption</b>: a data key encrypts the file and <b>Azure Key Vault</b> wraps that key, with the unwrapped key cached briefly (15-min TTL) to stay fast.' },
          { icon: 'cloud', title: 'GCS document vault', body: 'CVs live in <b>Google Cloud Storage</b>, never publicly exposed — access flows through <b>signed-URL proxying</b>, so a file is only reachable by an authorized request, for a limited window.' },
          { icon: 'badge-check', title: 'UU PDP alignment', body: 'Because every record is sensitive PII, the data model and access paths were designed around Indonesia\u2019s <b>UU PDP</b> — deliberate handling of candidate data, not an afterthought.' },
          { icon: 'server', title: 'Bun + Hono + Svelte', body: 'A fast TypeScript stack: a <b>Bun / Hono</b> API, <b>Drizzle</b> over <b>MySQL</b> for typed queries, and a <b>Svelte</b> front end — light, quick, and easy to iterate as Tech Lead.' }
        ]
      }
    ]
  },

  // ══════════════════════ DOLARINDO CONNECT ══════════════════════
  {
    slug: 'dolarindo-connect',
    name: 'Dolarindo Connect',
    hasCaseStudy: false,
    strata: L(true, true, true, true, true, false),
    card: {
      type: 'Web & Mobile',
      badges: ['Employee Forum'],
      live: false,
      thumb: null,
      role: 'Developer + Designer (solo)',
      tags: ['Kotlin', 'Swift', 'Vue.js', 'Laravel'],
      desc: 'Internal employee forum app for HR communications. Native Android (Kotlin) and iOS (Swift) with a Vue.js back-office and Laravel backend — built solo, end to end, directly with HR stakeholders.'
    }
  },

  // ══════════════════════ DOLARINDO REMITTANCE CHAT ══════════════════════
  {
    slug: 'dolarindo-remittance-chat',
    name: 'Dolarindo Remittance Chat',
    hasCaseStudy: true,
    strata: L(false, true, false, true, true, true),
    card: {
      type: 'WhatsApp Chatbot',
      badges: ['Remittance', 'Chatbot'],
      live: false,
      thumb: '/shots/dolarindo-orders-thumb.jpg',
      role: 'Developer (solo)',
      tags: ['Laravel', 'WhatsApp Cloud API', 'MySQL'],
      desc: 'A WhatsApp chatbot for a money changer (Dolarindo) — customers pick a language, check <b>live exchange rates</b>, and start transactions in chat, while staff manage orders, branches, and every logged conversation from a <b>Laravel admin panel</b>. ~300 transactions/month on the WhatsApp Cloud API.'
    },
    hero: {
      eyebrow: 'case study',
      title: 'Dolarindo Remittance Chat — a<br>WhatsApp bot for a money changer',
      lead: 'Most money-changer inquiries in Indonesia happen on WhatsApp — today\u2019s rates, whether a transaction can proceed. Dolarindo Remittance Chat answers them automatically: a <b>WhatsApp Cloud API chatbot</b> that handles language choice, <b>live exchange rates</b>, and transaction hand-off, backed by a <b>Laravel operations panel</b> where staff manage orders, branches, and every logged conversation. Around <b>300 transactions a month</b> flow through it.',
      meta: [
        { k: 'client', v: 'Dolarindo Money Changer' },
        { k: 'role', v: 'Developer · solo' },
        { k: 'stack', v: 'Laravel · WhatsApp Cloud API · MySQL' },
        { k: 'scale', v: '~300 tx / month' }
      ],
      shot: { url: 'Dolarindo Remittance · sign in', src: '/shots/dolarindo-login.jpg', alt: 'Dolarindo Remittance login' }
    },
    facts: [
      { k: 'Client', v: 'Dolarindo Money Changer' },
      { k: 'Domain', v: 'Money changer · valas' },
      { k: 'Role', v: 'Solo developer' },
      { k: 'Channel', v: 'WhatsApp Cloud API' },
      { k: 'Scale', v: '~300 tx / month' }
    ],
    factTags: ['Laravel', 'WhatsApp Cloud API', 'MySQL', 'Broadcast'],
    sections: [
      {
        type: 'overview',
        eyebrow: 'the brief',
        heading: 'A money changer runs on WhatsApp. So does this.',
        paragraphs: [
          'For a money changer (<i>valas</i>), most customer contact happens in one place: WhatsApp. People ask today\u2019s rates, whether a currency is available, how to send a transfer. Answering each one by hand doesn\u2019t scale — and every missed message is a missed transaction.',
          'Dolarindo Remittance Chat turns that inbox into a product. A <b>WhatsApp chatbot</b> greets the customer, switches language, shows <b>live exchange rates</b>, and starts a transaction — and a <b>Laravel operations panel</b> gives staff the other half: orders, customers, branches, currencies, broadcasts, and a full log of every conversation.',
          'I built it solo on <b>Laravel</b>, the <b>WhatsApp Cloud API</b>, and <b>MySQL</b>. In production it handles roughly <b>300 transactions a month</b> across Dolarindo\u2019s branches.'
        ]
      },
      {
        type: 'phones',
        eyebrow: 'the chatbot',
        heading: 'The whole front desk, in WhatsApp.',
        intro: 'A guided conversation on the official WhatsApp Cloud API. Tap any to enlarge.',
        items: [
          { src: '/shots/dolarindo-wa-menu.jpg', alt: 'WhatsApp language and menu', title: 'Language & menu', caption: 'Greets the customer, offers<br>Bahasa / English, then a menu' },
          { src: '/shots/dolarindo-wa-rates.jpg', alt: 'WhatsApp live exchange rates', title: 'Live exchange rates', caption: 'Info Kurs — today\u2019s buy / sell<br>for ~15 currencies' },
          { src: '/shots/dolarindo-wa-end.jpg', alt: 'WhatsApp session end', title: 'Session flow', caption: 'Rate disclaimer + Kembali /<br>Akhiri Percakapan controls' }
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'the admin panel',
        heading: 'Where staff run the operation.',
        intro: 'A Laravel back office for everything the bot feeds. Tap any to enlarge.',
        items: [
          {
            n: '01',
            url: 'Dolarindo Remittance · orders',
            src: '/shots/dolarindo-orders.jpg',
            alt: 'Orders admin panel',
            title: 'Orders.',
            body: 'Every order — from WhatsApp or the web — lands here with branch, customer, service (Bank Note, Transfer Dana), and a <b>message status</b> (Direspon, Dibaca). Staff filter by branch, period, and status, update each one, and export to CSV. <i>(Customer phone numbers blurred for privacy.)</i>'
          },
          {
            n: '02',
            url: 'Dolarindo Remittance · chatbot log',
            src: '/shots/dolarindo-chatbot-log.jpg',
            alt: 'Chatbot log',
            title: 'Chatbot log.',
            body: 'Every WhatsApp conversation is captured — customer, number, and status (<b>Draft, Cancel</b>) — with a detail view per session. Thousands of entries deep, it\u2019s the audit trail behind the bot.'
          }
        ]
      },
      {
        type: 'grid',
        eyebrow: 'under the hood',
        heading: 'A bot and a back office, one Laravel app.',
        intro: 'The interesting part is state: keeping a WhatsApp conversation, live rates, and an order ledger in sync.',
        items: [
          { icon: 'chat', title: 'WhatsApp Cloud API', body: 'The bot runs on the official <b>WhatsApp Cloud API</b> on a verified business number, driving language, menu, and session control through interactive reply buttons.' },
          { icon: 'chart', title: 'Live rate engine', body: 'Info Kurs pulls the current <b>buy / sell rates</b> for ~15 currencies and formats them into a clean, timestamped WhatsApp message — with an \u201Cindicative, not binding\u201D disclaimer.' },
          { icon: 'server', title: 'Laravel backend', body: 'One <b>Laravel</b> app drives both the bot\u2019s conversation state and the operations panel, over <b>MySQL</b> — no separate services to keep in sync.' },
          { icon: 'clipboard', title: 'Every chat logged', body: 'Each conversation and order is persisted — the <b>Chatbot Log</b> and <b>Orders</b> tables give staff a full audit trail (thousands of entries) with statuses like Draft, Cancel, Direspon, Dibaca.' },
          { icon: 'browser', title: 'Operations panel', body: 'Staff manage customers, branches (<i>cabang</i>), currencies (<i>valas</i>), walk-in hours, and broadcasts — and update the status of every incoming order — from one web panel.' },
          { icon: 'gauge', title: 'Running in production', body: 'The system handles roughly <b>300 transactions a month</b> across Dolarindo\u2019s branches, with orders arriving from both WhatsApp and the web.' }
        ]
      }
    ]
  },

  // ══════════════════════ DOMUS CORDIS ══════════════════════
  {
    slug: 'community-planting',
    name: 'Community Planting',
    hasCaseStudy: true,
    strata: L(true, true, false, true, true, true),
    card: {
      type: 'Web',
      badges: ['Community', 'LMS'],
      live: false,
      thumb: '/shots/domus-result-thumb.jpg',
      role: 'Developer + Designer',
      tags: ['.NET Core', 'EF Core', 'Dapper', 'Svelte', 'MySQL'],
      desc: 'A discipleship and community-management platform built for <b>Domus Cordis</b>, a Catholic community — organizes members into cell groups and tracks gathering attendance, spiritual habits, and a <b>reviewer-scored LMS</b>. Role-based access and full multi-language (i18n).'
    },
    hero: {
      eyebrow: 'case study',
      title: 'Community Planting — a discipleship<br>platform for Domus Cordis',
      lead: 'Community Planting is a community-management and discipleship platform I built for <b>Domus Cordis</b>, a Catholic community. It organizes members into cell groups and runs the two things a growing community needs: a <b>Covenant Journal</b> for gathering attendance and spiritual-habit tracking, and an <b>LMS</b> where discipleship material is worked through and <b>reviewed by a real person</b>, not auto-graded. Role-based and multi-language, on a .NET Core stack.',
      meta: [
        { k: 'client', v: 'Domus Cordis' },
        { k: 'role', v: 'Developer + designer' },
        { k: 'stack', v: '.NET Core · Svelte · MySQL' },
        { k: 'build', v: 'EF Core · Dapper' }
      ],
      shot: { url: 'Community Planting · attendance', src: '/shots/domus-attendance.jpg', alt: 'Attendance dashboard' }
    },
    facts: [
      { k: 'Client', v: 'Domus Cordis' },
      { k: 'Domain', v: 'Discipleship + community' },
      { k: 'Role', v: 'Developer + designer' },
      { k: 'Access', v: 'Role-based · i18n' },
      { k: 'Version', v: 'v1.0.5' }
    ],
    factTags: ['.NET Core', 'EF Core', 'Dapper', 'Svelte', 'MySQL'],
    sections: [
      {
        type: 'overview',
        eyebrow: 'the brief',
        heading: 'Discipleship needs structure, not spreadsheets.',
        paragraphs: [
          'A Catholic community grows through small groups — <b>cell groups</b> that meet, learn, and form spiritual habits together. Tracking who showed up, who\u2019s working through which material, and how they\u2019re doing usually lives in scattered spreadsheets and chat threads.',
          '<b>Community Planting</b> brings it into one platform for Domus Cordis. Members are organized into cell groups; leaders track <b>gathering attendance</b> and spiritual habits through the <b>Covenant Journal</b> (shown above); and discipleship material runs as an <b>LMS</b> with quizzes that a reviewer scores and gives feedback on.',
          'I built and designed it on a <b>.NET Core</b> back end (EF Core + Dapper) with a <b>Svelte</b> front end, with role-based access for admins, reviewers, and participants, and full multi-language support.'
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'the LMS',
        heading: 'Discipleship material, actually reviewed.',
        intro: 'A full learn → submit → review → score loop. Tap any to enlarge.',
        items: [
          {
            n: '01',
            url: 'Community Planting · LMS',
            src: '/shots/domus-materi.jpg',
            alt: 'Learning material catalog',
            title: 'The material catalog.',
            body: 'Discipleship topics are published to cell groups on a schedule (e.g. \u201CBTS 1 \u2013 Mengapa aku ada?\u201D for Default Cell Group), each with a <b>publish / close status</b> and a per-participant <b>work status</b> — so leaders control what\u2019s open and members see exactly what to do next.'
          },
          {
            n: '02',
            url: 'Community Planting · review',
            src: '/shots/domus-review.jpg',
            alt: 'Reviewer participant list',
            title: 'The reviewer queue.',
            body: 'For each material, admins see who submitted and who hasn\u2019t — <b>Total Peserta, Dikumpulkan, Menunggu Review, Sudah Direview</b> — and open each submission to <b>review and score it</b>. Human assessment, not a machine grade.'
          },
          {
            n: '03',
            url: 'Community Planting · result',
            src: '/shots/domus-result.jpg',
            alt: 'Submission result and score',
            title: 'Scored, with feedback.',
            body: 'The participant sees their <b>score out of 100</b>, a reviewer\u2019s qualitative assessment (\u201CPemahaman Sangat Baik\u201D), and their quiz answers marked <b>\u201CSudah Direview\u201D</b> — closing the loop between learner and mentor.'
          }
        ]
      },
      {
        type: 'browserGallery',
        eyebrow: 'access & roles',
        heading: 'One door, many roles.',
        intro: 'A single sign-in fronts a role-aware, multi-language platform.',
        items: [
          {
            n: '01',
            url: 'Community Planting · sign in',
            src: '/shots/domus-login.jpg',
            alt: 'Login screen',
            title: 'Role-based, multi-language.',
            body: 'One sign-in fronts a <b>role-based</b> platform — Super Admin, reviewer, and participant (Peserta) each get a different app — with a <b>language switcher</b> (i18n) right in the header.'
          }
        ]
      },
      {
        type: 'grid',
        eyebrow: 'under the hood',
        heading: 'A pragmatic .NET + Svelte build.',
        intro: 'Nothing exotic — a clean, well-chosen stack that fits how a community actually works.',
        items: [
          { icon: 'server', title: '.NET Core back end', body: 'An <b>ASP.NET Core</b> API with a pragmatic data layer: <b>EF Core</b> for the domain model and migrations, and <b>Dapper</b> where hand-tuned SQL and speed matter.' },
          { icon: 'browser', title: 'Svelte front end', body: 'A <b>Svelte</b> SPA delivering the whole experience — dashboards, tables, filters, and the LMS flow — light and fast for community leaders on modest devices.' },
          { icon: 'users', title: 'Cell-group structure', body: 'Members are organized into <b>cell groups</b> (Default Cell Group, DC X\u2026); attendance, materials, and reviews all hang off that structure — mirroring how the community actually meets.' },
          { icon: 'clipboard', title: 'Human-reviewed LMS', body: 'Instead of an auto-graded quiz, submissions flow through a <b>review queue</b> — a reviewer scores each one and adds qualitative feedback, keeping discipleship personal.' },
          { icon: 'badge-check', title: 'Role-based access', body: 'Distinct roles — <b>Super Admin, reviewer, participant</b> — gate every module (Administrasi, Covenant Journal, LMS, Master Data), so people only see what their role needs.' },
          { icon: 'globe', title: 'Multi-language (i18n)', body: 'The interface switches languages from the header — built in from the start so the platform can serve a community in more than one language.' }
        ]
      }
    ]
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const caseStudySlugs = () => projects.filter((p) => p.hasCaseStudy).map((p) => p.slug);
