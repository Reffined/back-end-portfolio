import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = true;
export const csr = true;

export const load = (async () => {
    return {};
}) satisfies PageLoad;