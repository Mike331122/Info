export default defineNuxtConfig({
  
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },
  modules: ['pinceau'],
  pinceau: {
    configFileName: 'tokens.config.ts'
  },

  runtimeConfig: {
    apiNinjaKey: process.env.apiNinjaKey
  },
  compatibilityDate: '2024-10-24'
})
