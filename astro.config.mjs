import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import yaml from "@rollup/plugin-yaml"
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
    integrations: [react(), vue()],
    vite: {
        plugins: [yaml()],
    },
    build: {
        assets: "assets",
    },
})
