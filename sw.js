const workboxVersion="5.1.4";importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@5.1.4/build/workbox-sw.min.js");const cacheSuffixVersion="1743775842637",precacheCacheName=workbox.core.cacheNames.precache,runtimeCacheName=workbox.core.cacheNames.runtime,maxEntries=100;workbox.core.setCacheNameDetails({prefix:"SimonAKing",suffix:"1743775842637"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute(["https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js","https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js","https://cdn.jsdelivr.net/npm/headroom.js@0.12.0/dist/headroom.min.js","https://cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js","https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js","https://cdn.jsdelivr.net/npm/@jaames/iro@5.2.3/dist/iro.min.js","https://cdn.jsdelivr.net/npm/github-cards@1.0.4/widget.js","https://cdn.jsdelivr.net/npm/typeface-roboto@1.1.13/index.min.css","https://cdn.jsdelivr.net/npm/firacode@5.2.0/distr/fira_code.min.css","https://cdn.jsdelivr.net/npm/node-waves@0.7.6/src/js/waves.min.js","https://cdn.jsdelivr.net/gh/SimonAKing/js/translate-ff7607fcb8.js","https://cdn.jsdelivr.net/gh/SimonAKing/js/log.min.js","https://cdn.jsdelivr.net/gh/SimonAKing/font/comic.min.css"]),workbox.routing.registerRoute(/.*cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-immutable-1743775842637",plugins:[new workbox.expiration.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/font\/.*/,new workbox.strategies.CacheFirst({cacheName:"font-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/css\/.*/,new workbox.strategies.CacheFirst({cacheName:"css-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/js\/.*/,new workbox.strategies.CacheFirst({cacheName:"js-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/cdn\/.*/,new workbox.strategies.CacheFirst({cacheName:"cdn-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|cur|ico|icon|webp)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"image-cache-1743775842637",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/images\/.*/,new workbox.strategies.CacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/gallery\/.*/,new workbox.strategies.CacheFirst({cacheName:"gallery-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/at.alicdn.com\/t\//,new workbox.strategies.CacheFirst({cacheName:"icon-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:woff|woff2|eot|ttf|otf)/,new workbox.strategies.CacheFirst({cacheName:"font-cache-1743775842637",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(css|js)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"source-cache-1743775842637",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/www.googletagmanager.com\/gtag/,new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://api.github.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://api.github.com/graphql(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("graphqlAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAuth",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://4tyocrqb.api.lncldglobal.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("leanCloudAPI",{maxRetentionTime:1440})]}),"PUT"),workbox.routing.registerRoute(new RegExp("/disqus/(.*).json(.*)"),new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disqus.com"),new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com(.*)(png|jpg|jpeg|svg|gif)"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-img-cache1743775842637",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-cdn-cache1743775842637",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]}));const blogRevision="1743775842637",aboutRevision="1743773552561",galleryRevision="1743775193952",home=["https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@bf05583186071/css/style.css","https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@bf05583186071/js/main.js","https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@bf05583186071/js/background.js"],about=["https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/css/main.e51a6dac.chunk.css","https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/js/2.50bcf752.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/js/main.2d63edd1.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/js/runtime-main.b955cec2.js"],blog=["https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/archive-835deab2c9.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/footer-7201371438.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/highlight-271688128f.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/home-281ff5f7af.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/live2d-f1e3bae765.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/module/comment-bfd02bb730.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/module/relatedPosts-77f428350e.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/module/reward-fc1e0c7470.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/module/toc-15e89e9d69.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/page/guestbook-cc7002a06a.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/page/weibo/post-caf267b224.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/post-cf05623487.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/style-4bba1678f0.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/css/tag-9a3c99dd7c.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/live2d/live-7348bf1137.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/live2d/live2d-3d42e5e824.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/main-4c845175ee.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/module/comment-5cad405b01.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/module/cover-generator-038c420834.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/module/other-a1adb7a7ba.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/module/post-6c0c224aba.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/module/spotlight-66977d7abe.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/page/guestbook-ce2b4e08ea.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/particles-585dd6bbf8.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/script-72218ae274.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@a3b6ffb1653e9/js/tag-gravity-82480d9ae7.js"],gallery=["https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/css/main.018e9f65.chunk.css","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/js/2.f303c2e5.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/js/main.64609f6f.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/js/runtime-main.8541ffae.js"];workbox.precaching.precacheAndRoute(home),workbox.precaching.precacheAndRoute(blog),workbox.precaching.precacheAndRoute(about),workbox.precaching.precacheAndRoute(gallery),workbox.precaching.precacheAndRoute([{url:"index.html",revision:"56571141b7b4e5728367c2b4c9eeb2d7"}]);