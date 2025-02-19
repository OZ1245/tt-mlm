// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@pinia/nuxt',
    'nuxt-snackbar'
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000
  }
  // vuetify: {
  //   vuetifyOptions: {
  //     components: ['VDialog', 'VSnackbar']
  //   }
  // }
})