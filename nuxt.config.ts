// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:["~/assets/style.css"],
  modules:[
    ['@nuxtjs/google-fonts', {
      families: {
        'Nunito': [200,400,600,800],
        download: true,
        inject: true 
      }
    }]
  ]
})
