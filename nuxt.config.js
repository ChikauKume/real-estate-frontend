export default {
  head: {
    title: 'MyKurashi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: [
      'clearValidationErrors',
      // 'admin',
    ]
  },

  css: [
  ],

  plugins: [
    { src: '~/plugins/vue2-google-maps.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/mixins/validation.js' },
    { src: '~/plugins/mixins/user.js' },
    
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-fontawesome', 
    '@nuxtjs/proxy',
    '@nuxtjs/vuetify',
  ],

  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons", // Solid
        icons: ["faHome", "faCaretRight"],
      },
      {
        set: "@fortawesome/free-brands-svg-icons", // Brand
        icons: ["faTwitter","faGoogle"],
      },
    ],
  },
  
  axios: { 
    baseURL: 'http://localhost/api',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "/user",
            method: "get",
            propertyName: false
          },
          logout: {
            url: "/logout",
            method: "post"
          }
        }
      }
    },
    redirect: {
      login: '/admin/login',
      home: '/admin/real-estates',
      logout: '/',
      realEstate:'/admin/real-estates',
    }
  },

  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    standalone: true,
  }
}
