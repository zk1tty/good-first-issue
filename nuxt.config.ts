// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     script: [
  //       { src: 'https://tally.so/widgets/embed.js'}
  //     ]
  //   }
  // },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag' 
  //,'nuxt-simple-sitemap'
  ],

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  // site: {
  //   url: 'https://goodfirstissue.dev'
  // },

  compatibilityDate: '2024-07-10'
})