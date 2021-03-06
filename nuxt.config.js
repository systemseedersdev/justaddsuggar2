import pkg from './package'
import axios from 'axios'

export default {
  mode: 'universal',

  router: {
    // scrollBehavior: function (to, from, savedPosition) {
    //   if (savedPosition) {
    //     return savedPosition;
    //   } else if (to.hash) {
    //     return {
    //       selector: to.hash
    //     };
    //   } else {
    //     return { x: 0, y: 0 };
    //   }
    // }
  },

  generate: {
    routes: async function () {
      let routes = [ '404' ];
      await axios.get( 'https://justaddsugardev.datadazzle.com/wp/wp-json/wp/v2/case?per_page=50' )
      .then((res) => {
        var data = res.data;
        if( data != null ) {
          data.map( function( item ) {
            routes.push( '/cases/'+item.slug );
          })
        }
      })
      await axios.get( 'https://justaddsugardev.datadazzle.com/wp/wp-json/wp/v2/case_tags' )
      .then((res) => {
        var data = res.data;
        if( data != null ) {
          data.map( function( item ) {
            routes.push( '/cases/tag/'+item.slug );
          })
        }
      })  
      return routes;
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { name: 'SKYPE_TOOLBAR', content: 'SKYPE_TOOLBAR_PARSER_COMPATIBLE' },
      { name: 'robots', content: 'index, follow' },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
    ],
    script: [
      { type: 'text/javascript', src: '/js/jquery.min.js', body: true },
      { type: 'text/javascript', src: '/js/bootstrap.min.js', body: true },
      { type: 'text/javascript', src: '/js/slick.min.js', body: true }
    ]
  },

  manifest: {
    mobileAppIOS: true,
  },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/slick.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css',
    '~/assets/fonts/fonts.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/function.js',
    '~/plugins/equalheight.js',
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/webfont.js", ssr: false },
    { src: "~/plugins/isotope.js", ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "https://justaddsugardev.datadazzle.com/wp/wp-json",
    requestInterceptor: (config, {store}) => {
      config.headers.common['Authorization'] = '';
      config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json';
      return config
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend( config, ctx ) {
      // Run ESLint on save
      if ( ctx.isDev && ctx.isClient ) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
