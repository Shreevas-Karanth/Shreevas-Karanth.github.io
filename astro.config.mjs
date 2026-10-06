// @ts-check
import { defineConfig } from 'astro/config';

// User site repo (Shreevas-Karanth.github.io) is served from the domain root, so no `base` is needed.
// If you move this to a project repo (e.g. github.com/Shreevas-Karanth/portfolio), add `base: '/portfolio'`.
export default defineConfig({
  site: 'https://shreevas-karanth.github.io',
});
