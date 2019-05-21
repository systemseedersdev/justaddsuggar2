import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5c40504e = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages_about-us" */))
const _05bec7c5 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _dcc999ae = () => interopDefault(import('..\\pages\\career\\index.vue' /* webpackChunkName: "pages_career_index" */))
const _f9ffdcac = () => interopDefault(import('..\\pages\\cases\\index.vue' /* webpackChunkName: "pages_cases_index" */))
const _2c0ed6f5 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _77b461e6 = () => interopDefault(import('..\\pages\\cases\\tag\\_tag_slug.vue' /* webpackChunkName: "pages_cases_tag__tag_slug" */))
const _fd6d1f3c = () => interopDefault(import('..\\pages\\cases\\_slug.vue' /* webpackChunkName: "pages_cases__slug" */))
const _75ce1de7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about-us",
      component: _5c40504e,
      name: "about-us"
    }, {
      path: "/blog",
      component: _05bec7c5,
      name: "blog"
    }, {
      path: "/career",
      component: _dcc999ae,
      name: "career"
    }, {
      path: "/cases",
      component: _f9ffdcac,
      name: "cases"
    }, {
      path: "/contact",
      component: _2c0ed6f5,
      name: "contact"
    }, {
      path: "/cases/tag/:tag_slug?",
      component: _77b461e6,
      name: "cases-tag-tag_slug"
    }, {
      path: "/cases/:slug",
      component: _fd6d1f3c,
      name: "cases-slug"
    }, {
      path: "/",
      component: _75ce1de7,
      name: "index"
    }],

    fallback: false
  })
}
