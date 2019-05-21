importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08cd6bce7ffe93600e41.js",
    "revision": "10a6460d39285fe64a52f8ccfec72e47"
  },
  {
    "url": "/_nuxt/44e3920138c6e29f3932.js",
    "revision": "4ced3cfe5ee91c0ac54de3232f38a1c9"
  },
  {
    "url": "/_nuxt/5a2cc6a8905163d955bc.js",
    "revision": "7f48390e763634ba01b5cda200716239"
  },
  {
    "url": "/_nuxt/648e0f92997dad1f7c0e.js",
    "revision": "c63188fdd9af215e2dac62bc5f10abf0"
  },
  {
    "url": "/_nuxt/7884da3e5e3840bca476.js",
    "revision": "b5fd9cc09a313b295168e89c49a0f162"
  },
  {
    "url": "/_nuxt/7cca28791611e080d921.js",
    "revision": "8262889d7c2dca7788b55e70838fcc6a"
  },
  {
    "url": "/_nuxt/911ff33e83da876af177.js",
    "revision": "ce84da0f89c3e3a5e0795a0add94d6b9"
  },
  {
    "url": "/_nuxt/bc5b038c1d9787457c22.js",
    "revision": "d385c3b12744bd702c68602d6d676dd4"
  },
  {
    "url": "/_nuxt/c4af91cd8b84a97fa60a.js",
    "revision": "0593604dbe88d2310a8884d096faa546"
  },
  {
    "url": "/_nuxt/d4708c516e5ee67213af.js",
    "revision": "8308fdae76f07c55bf71e47ce45cbca2"
  },
  {
    "url": "/_nuxt/d6e4a0617f63bd51719f.js",
    "revision": "8dc12114f999037acd2c7698dafe2a0b"
  },
  {
    "url": "/_nuxt/f6023761f758c8fd7347.js",
    "revision": "0be56fe90c061a002c17928475825a38"
  }
], {
  "cacheId": "Justaddsugar",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
