import { defineConfig } from "astro/config"
import yaml from "@rollup/plugin-yaml"
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    vite: {
        plugins: [yaml()],
    },
    build: {
        assets: "assets",
    },
})
