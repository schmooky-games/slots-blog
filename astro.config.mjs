import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
      remarkPlugins: [remarkToc],
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
    ,
    sitemap(),
    react(),
  ],
});
