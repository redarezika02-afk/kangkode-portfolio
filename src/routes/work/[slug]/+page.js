import { error } from '@sveltejs/kit';
import { getProject, caseStudySlugs } from '$lib/data/projects.js';

export function load({ params }) {
  const project = getProject(params.slug);
  if (!project || !project.hasCaseStudy) {
    throw error(404, 'Case study not found');
  }
  return { project };
}

// Tell the static adapter which [slug] pages to prerender.
export function entries() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export const prerender = true;
