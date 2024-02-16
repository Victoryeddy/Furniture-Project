// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
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
   }]],
  css: ['~/assets/css/main.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
