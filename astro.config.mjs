import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // TODO: Replace with your GitHub Pages URL and repository name
  // site: 'https://<username>.github.io',
  // base: '/<repo>',
  site: 'https://example.github.io',
  base: '/',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
