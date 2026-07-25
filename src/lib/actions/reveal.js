// Svelte action: adds the `in` class when the element scrolls into view.
// Respects prefers-reduced-motion (reveals immediately).
export function reveal(node, options = {}) {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || typeof IntersectionObserver === 'undefined') {
    node.classList.add('in');
    return {};
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          node.classList.add('in');
          io.unobserve(node);
        }
      }
    },
    { threshold: options.threshold ?? 0.12 }
  );
  io.observe(node);

  return {
    destroy() {
      io.disconnect();
    }
  };
}
