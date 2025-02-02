export default defineNuxtConfig({
  ssr: true,
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  runtimeConfig: {
    apiNinjaKey: process.env.apiNinjaKey,
    public: {
      NODE_ENV: process.env.NODE_ENV
    }
    
  },
  compatibilityDate: '2024-10-24'
})
