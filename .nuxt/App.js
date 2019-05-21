import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\css\\bootstrap.min.css'

import '..\\assets\\css\\slick.css'

import '..\\assets\\css\\style.css'

import '..\\assets\\css\\responsive.css'

import '..\\assets\\fonts\\fonts.css'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Justaddsugar","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"},{"name":"SKYPE_TOOLBAR","content":"SKYPE_TOOLBAR_PARSER_COMPATIBLE"},{"name":"robots","content":"index, follow"},{"name":"msapplication-TileColor","content":"#00aba9"},{"hid":"description","name":"description","content":"Justaddsugar - Digital Agency"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"default"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Justaddsugar"},{"hid":"author","name":"author","content":"SystemSeeders"},{"hid":"theme-color","name":"theme-color","content":"#ffffff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Justaddsugar"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Justaddsugar"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Justaddsugar - Digital Agency"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#000000"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.1e97ada0.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.dBCcPcPCmrc.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.dBCcPcPCmrc.png","sizes":"512x512"},{"rel":"apple-touch-startup-image","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.dBCcPcPCmrc.png"}],"script":[{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fjquery.min.js","body":true},{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fbootstrap.min.js","body":true},{"type":"text\u002Fjavascript","src":"\u002Fjs\u002Fslick.min.js","body":true}],"style":[],"htmlAttrs":{"lang":"en"}},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
