import { fireDB } from './plugins/firebase.js'
const generateRoutesForPosts = async () => {
  let refPosts = fireDB.collection('posts').where('published', '==', true)

  const postsCollection = await refPosts.get()
  const routes = []

  postsCollection.forEach((postItem) => {
    const postData = postItem.data()
    const route = '/posts/' + postData.slug
    routes.push(route)
  })

  return routes
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    htmlAttrs: {
      lang: 'fr'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Cinzel|Gothic+A1|Lalezar|Muli|Noto+Sans+TC|Philosopher|Ramabhadra|Teko&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/firebase.js'
    },
    {
      src: '~/plugins/lazyload.js',
      mode: 'client'
    },
    {
      src: '~/plugins/aos.js',
      mode: 'client'
    },
    {
      src: '~/plugins/disqus.js',
      mode: 'client'
    },
    { src: '~/plugins/jsonld' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-141104841-1',
        debug: {
          enabled: true,
          sendHitTask: true,
          trace: true
        }
      }
    ],
    ['@nuxtjs/google-tag-manager', { id: 'UA-141104841-1' }],
    //'nuxt-cookie-control',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient, isServer }) {
      if (isServer) {
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/firestore': 'commonjs @firebase/firestore'
        }
      }
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes: generateRoutesForPosts
  },
  pwa: {
    icon: {
      /* icon options */
    }
  },

  sitemap: {
    hostname: 'https://developpeurfullstack.fr',
    gzip: true,
    routes: generateRoutesForPosts
  }
}
