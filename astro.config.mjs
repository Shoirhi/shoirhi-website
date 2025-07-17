// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://shoirhi.github.io",

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [sitemap(), mdx(), react()],

    image: {
        responsiveStyles: true
    },
});