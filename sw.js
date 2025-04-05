const workboxVersion="5.1.4";importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@5.1.4/build/workbox-sw.min.js");const cacheSuffixVersion="1743838493515",precacheCacheName=workbox.core.cacheNames.precache,runtimeCacheName=workbox.core.cacheNames.runtime,maxEntries=100;workbox.core.setCacheNameDetails({prefix:"SimonAKing",suffix:"1743838493515"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute(["https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js","https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js","https://cdn.jsdelivr.net/npm/headroom.js@0.12.0/dist/headroom.min.js","https://cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js","https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js","https://cdn.jsdelivr.net/npm/@jaames/iro@5.2.3/dist/iro.min.js","https://cdn.jsdelivr.net/npm/github-cards@1.0.4/widget.js","https://cdn.jsdelivr.net/npm/typeface-roboto@1.1.13/index.min.css","https://cdn.jsdelivr.net/npm/firacode@5.2.0/distr/fira_code.min.css","https://cdn.jsdelivr.net/npm/node-waves@0.7.6/src/js/waves.min.js","https://cdn.jsdelivr.net/gh/SimonAKing/js/translate-ff7607fcb8.js","https://cdn.jsdelivr.net/gh/SimonAKing/js/log.min.js","https://cdn.jsdelivr.net/gh/SimonAKing/font/comic.min.css"]),workbox.routing.registerRoute(/.*cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-immutable-1743838493515",plugins:[new workbox.expiration.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/font\/.*/,new workbox.strategies.CacheFirst({cacheName:"font-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/css\/.*/,new workbox.strategies.CacheFirst({cacheName:"css-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/js\/.*/,new workbox.strategies.CacheFirst({cacheName:"js-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/cdn\/.*/,new workbox.strategies.CacheFirst({cacheName:"cdn-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|cur|ico|icon|webp)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"image-cache-1743838493515",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/images\/.*/,new workbox.strategies.CacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/gallery\/.*/,new workbox.strategies.CacheFirst({cacheName:"gallery-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/at.alicdn.com\/t\//,new workbox.strategies.CacheFirst({cacheName:"icon-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:woff|woff2|eot|ttf|otf)/,new workbox.strategies.CacheFirst({cacheName:"font-cache-1743838493515",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(css|js)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"source-cache-1743838493515",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/www.googletagmanager.com\/gtag/,new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://api.github.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://api.github.com/graphql(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("graphqlAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAuth",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://4tyocrqb.api.lncldglobal.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("leanCloudAPI",{maxRetentionTime:1440})]}),"PUT"),workbox.routing.registerRoute(new RegExp("/disqus/(.*).json(.*)"),new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disqus.com"),new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com(.*)(png|jpg|jpeg|svg|gif)"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-img-cache1743838493515",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-cdn-cache1743838493515",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]}));const blogRevision="1743838493515",aboutRevision="1743773552561",galleryRevision="1743775193952",home=["https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@3f5bbb1003585/css/style.css","https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@3f5bbb1003585/js/main.js","https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@3f5bbb1003585/js/background.js"],about=["https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/css/main.e51a6dac.chunk.css","https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/js/2.50bcf752.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/js/main.2d63edd1.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/about@676a60bad4c33/static/js/runtime-main.b955cec2.js"],blog=["https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/archive-a14da4ac4a.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/footer-0c53abd87e.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/highlight-271688128f.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/home-8886d6a785.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/live2d-f1e3bae765.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/module/comment-2c4172461a.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/module/relatedPosts-d4bd6ceec4.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/module/reward-f789a3c636.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/module/toc-15e89e9d69.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/page/guestbook-cc7002a06a.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/page/weibo/post-caf267b224.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/post-3bb2ca1a5f.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/style-1cda497ea4.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/css/tag-de4f84fcc0.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/live2d/live-7348bf1137.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/live2d/live2d-3d42e5e824.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/main-4c845175ee.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/module/comment-5cad405b01.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/module/cover-generator-038c420834.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/module/hover-effect-e72a114ce3.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/module/other-810233ad54.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/module/post-5ac1a0a3d9.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/module/spotlight-66977d7abe.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/page/guestbook-ce2b4e08ea.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/particles-585dd6bbf8.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/script-41743558b0.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@37b1ed011c7f7/js/tag-gravity-679e91c015.js"],gallery=["https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/css/main.018e9f65.chunk.css","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/js/2.f303c2e5.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/js/main.64609f6f.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@1bb4680d3c983/static/js/runtime-main.8541ffae.js"];workbox.precaching.precacheAndRoute(home),workbox.precaching.precacheAndRoute(blog),workbox.precaching.precacheAndRoute(about),workbox.precaching.precacheAndRoute(gallery),workbox.precaching.precacheAndRoute([{url:"index.html",revision:"a1012905d9fca0bb823a35f625c1a07c"}]);