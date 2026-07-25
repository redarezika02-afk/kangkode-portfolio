import { writable } from 'svelte/store';

// Currently-open lightbox image src (null = closed).
export const lightboxSrc = writable(null);
export const openLightbox = (src) => lightboxSrc.set(src);
export const closeLightbox = () => lightboxSrc.set(null);
