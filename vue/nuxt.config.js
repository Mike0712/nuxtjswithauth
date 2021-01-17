export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'dialertouch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {color: 'blue'},
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/backend.scss',
    '@/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css',
    '@/assets/vendor/remixicon/fonts/remixicon.css',
    '@/assets/vendor/@icon/dripicons/dripicons.css',

    '@/assets/vendor/fullcalendar/core/main.css',
    '@/assets/vendor/fullcalendar/daygrid/main.css',
    '@/assets/vendor/fullcalendar/timegrid/main.css',
    '@/assets/vendor/fullcalendar/list/main.css',
    '@/assets/vendor/mapbox/mapbox-gl.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal'],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
