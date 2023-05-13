import { defineConfig } from "astro/config"
import yaml from "@rollup/plugin-yaml"
import vue from "@astrojs/vue"
import sassGlobImports from "vite-plugin-sass-glob-import"

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    vite: {
        plugins: [yaml(), sassGlobImports()],
    },
    build: {
        assets: "assets",
    },
})
