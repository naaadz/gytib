// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: false,
  image: {
    provider: "prismic",
    prismic: {}
  },
  devtools: {
    enabled: true,

    vscode: {
      enabled: true
    },
  },
  experimental: {
    componentIslands: true
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxt/image'
  ],
  prismic: { endpoint: 'https://zaneraywebsite.cdn.prismic.io/api/v2' },
   css: [
    '@/assets/style.css' 
  ],
})