export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  googleAnalytics: {
    id: "UA-167213766-1"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Meraki UI Tailwindcss Components',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.' },
      { name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:title", name: "twitter:title", content: "Meraki UI Tailwindcss Components" },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.",
      },
      { hid: "twitter:image", name: "twitter:image", content: 'https://raw.githubusercontent.com/bakateam/merakiui/main/assets/merakiui-og.png' },
      { hid: "og:title", property: "og:title", content: "Meraki UI Tailwindcss Components" },
      { property: "og:site_name", content: "Meraki UI" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:image", property: "og:image", content: 'https://raw.githubusercontent.com/bakateam/merakiui/main/assets/merakiui-og.png' },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Beautiful Tailwindcss components that support RTL languages & fully responsive based on Flexbox & CSS Grid.",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-clipboard'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
