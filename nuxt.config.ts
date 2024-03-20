// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public:{

      newsApiKey: process.env.VUE_APP_NEWS_API_KEY,
    }
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
  }], 'vue3-carousel-nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
 
})
