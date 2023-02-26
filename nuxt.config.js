import projects from './assets/projects/projects.json'
const dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(projects.map(p => `projects/${p.id}`))
  })
}

export default {
  server: {
    port: 8085,
    host: '0.0.0.0'
  },

  generate: {
    routes: dynamicRoutes
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Igor Yaitsky - Design & Dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/index.scss',
    '@egjs/vue-flicking/dist/flicking.css',
    '@egjs/flicking-plugins/dist/pagination.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/ui', extensions: ['vue'] },
    { path: '~/components/common', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'mobile',
        breakpoints: {
          mobile: 768,
          tablet: 1200,
          desktop: Infinity
        }
      }
    ]
  ],

  styleResources: {
    scss: ['./styles/variables.scss', './styles/mixins.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
