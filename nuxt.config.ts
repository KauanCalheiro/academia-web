// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxt/ui",
    ],

    css: [
        '~/assets/css/fonts.css',
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-08-31'
})
