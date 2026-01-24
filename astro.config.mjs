// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      transformers: [
        {
          name: 'meta',
          pre(node) {
            if (this.options.meta?.__raw) {
              node.properties['data-meta'] = this.options.meta.__raw;
            }
          }
        }
      ]
    }
  },

  adapter: cloudflare(),
  integrations: [mdx()]
});