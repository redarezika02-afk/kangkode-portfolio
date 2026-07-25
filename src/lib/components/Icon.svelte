<script>
  // Centralized icon set (Tabler-style stroke paths).
  export let name = '';
  export let size = 20;

  const P = {
    'arrow-right': '<path d="M5 12h14M13 6l6 6l-6 6"/>',
    'arrow-left': '<path d="M19 12H5M11 18l-6-6l6-6"/>',
    'chevron-left': '<path d="M15 6l-6 6l6 6"/>',
    external: '<path d="M17 7l-10 10"/><path d="M8 7h9v9"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6l9-6"/>',
    mappin:
      '<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>',
    github:
      '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6-.6 1.2-.5 2v3.5"/>',
    linkedin:
      '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/>',
    palette:
      '<path d="M12 21a9 9 0 1 1 0-18a9 8 0 0 1 9 8a4.5 4 0 0 1-4.5 4h-2.5a2 2 0 0 0-1 3.75a1.3 1.3 0 0 1-1 2.25"/><circle cx="8.5" cy="10.5" r="1"/><circle cx="12.5" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/>',
    browser: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/>',
    mobile: '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M11 4h2M12 17v.01"/>',
    server:
      '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7v.01M7 17v.01"/>',
    database:
      '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    cloud: '<path d="M7 18a4 4 0 1 1 .5-7.97A6 6 0 0 1 19 11a3.5 3.5 0 0 1-1 6.86z"/>',
    building: '<path d="M3 21h18M5 21V8l7-5l7 5v13M9 21v-6h6v6"/>',
    'badge-check':
      '<path d="M9 11l3 3l8-8"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>',
    payroll: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h3M8 17h6"/>',
    gauge: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15l2-2l2 2M14 10h4M14 13h3"/>',
    'clock-in': '<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="9" r="2.4"/><path d="M8 18a4 4 0 0 1 8 0"/>',
    cart:
      '<path d="M6 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/><path d="M17 17H6V3H4M6 5l14 1l-1 7H6"/>',
    clipboard: '<path d="M3 3h18v4H3zM4 7v13h16V7M9 11h6"/>',
    cube: '<path d="M12 3l9 5v8l-9 5l-9-5V8z"/><path d="M12 12l9-5M12 12v9M12 12L3 7"/>',
    transfer: '<path d="M3 12h13M3 12l4-4M3 12l4 4M21 12H8M21 12l-4-4M21 12l-4 4"/>',
    chart: '<path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3"/>',
    shield: '<path d="M12 3l8 3v6c0 4-3 7-8 9c-5-2-8-5-8-9V6z"/><path d="M9 12l2 2l4-4"/>',
    image: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 14l4-4l5 5M14 12l3-3l4 4"/><circle cx="9" cy="9" r="1.4"/>',
    sparkles:
      '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.6a3 3 0 0 1 0 4.8M21 20a6 6 0 0 0-5-5.9"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5a9 9 0 0 1-4-1L3 20l1.3-3.9A8.4 8.4 0 0 1 3 11.5a8.5 8.5 0 0 1 9-8.5a8.4 8.4 0 0 1 9 8.5z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>'
  };

  $: inner = P[name] || '';
</script>

<svg
  class="ic"
  viewBox="0 0 24 24"
  style="width:{size}px;height:{size}px"
  aria-hidden="true"
  focusable="false">
  {@html inner}
</svg>
