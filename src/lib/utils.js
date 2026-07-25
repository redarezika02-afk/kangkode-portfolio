import { base } from '$app/paths';

/** Prefix a static asset path with the configured base path. */
export const asset = (p) => (p ? `${base}${p}` : p);
