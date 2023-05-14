import { defineConfig } from "astro/config"
import yaml from "@rollup/plugin-yaml"
import vue from "@astrojs/vue"
import sassGlobImports from "vite-plugin-sass-glob-import"
import { cssm, removeCssModulesChunk } from "vite-plugin-vue-css-modules"

// https://astro.build/config
export default defineConfig({
    integrations: [cssm(), vue(), removeCssModulesChunk()],
    vite: {
        plugins: [yaml(), sassGlobImports()],
    },
    build: {
        assets: "assets",
    },
})
