// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxt/ui",
        '@formkit/auto-animate/nuxt',
    ],

    css: [
        '~/assets/css/fonts.css',
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: '2024-08-31',

    colorMode: {
        preference: 'dark',
        fallback: 'dark',
    },

    app: {
        head: {
            title: 'Zenith',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/zenith/favicon.ico', },
                { rel: 'apple-touch-icon', href: '/zenith/apple-touch-icon.png', },
            ],
        },
        baseURL: '/zenith',
    }
})
