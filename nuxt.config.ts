// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    'usebootstrap',
    'nuxt-bootstrap-icons',
    '@vee-validate/nuxt',
    '@pinia/nuxt'],
    
    bootstrapIcons: {
      display: "inline",

    },

    css:[
      'bootstrap/scss/bootstrap.scss',
      '~/assets/css/index.css',

    ],
    image: {
      
        domains: ['res.cloudinary.com']
    },

    app:{
      head:{
        script: [
          {
            src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
            integrity: 'sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
            integrity: 'sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF',
            crossorigin: 'anonymous',
          },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },

          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap',
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap',
          },
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            integrity:
              'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
            crossorigin: 'anonymous',
          },
        ],
        titleTemplate: 'Fraction Nine',  // %s will be replaced by the page title
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Explore Fraction Nine\'s photography, cinematography, and editing services. We craft memories, frame stories, and bring visions to life through timeless storytelling.' },
          { name: 'keywords', content: 'photography services, cinematography, videography, photo editing, video editing, creative storytelling, Fraction Nine' },
          { name: 'author', content: 'Fraction Nine' },
          { property: 'og:title', content: 'Fraction Nine | Visual Storytelling Services' },
          { property: 'og:description', content: 'From photography to cinematic filmmaking, Fraction Nine captures life\'s most raw and beautiful moments.' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://fractionnine.com/' },
          { property: 'og:image', content: 'https://res.cloudinary.com/djtwgg6op/image/upload/v1745772408/splashscreen_tjiqty.png' }
        ]
      }
      },
})