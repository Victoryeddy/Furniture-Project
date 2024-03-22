// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public:{

      newsApiKey: process.env.VUE_APP_NEWS_API_KEY,
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' }
    ],
    script: [
      { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', type: 'text/javascript' }
    ]
  },
  plugins: ['~/plugins/vue3-google-map.ts', '~/plugins/G-news-api.ts'],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ['@pinia/nuxt', ['@nuxtjs/google-fonts', {
    families: {
      Roboto: true,
      Inter: [400, 700],
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  }], 'vue3-carousel-nuxt', 'nuxt-aos'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
 
})
