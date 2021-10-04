const workboxVersion="5.1.4";importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@5.1.4/build/workbox-sw.min.js");const cacheSuffixVersion="1633346533404",precacheCacheName=workbox.core.cacheNames.precache,runtimeCacheName=workbox.core.cacheNames.runtime,maxEntries=100;workbox.core.setCacheNameDetails({prefix:"一个坏掉的番茄",suffix:"1633346533404"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute(["https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js","https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js","https://cdn.jsdelivr.net/npm/headroom.js@0.12.0/dist/headroom.min.js","https://cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js","https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js","https://cdn.jsdelivr.net/npm/@jaames/iro@5.2.3/dist/iro.min.js","https://cdn.jsdelivr.net/npm/github-cards@1.0.4/widget.js","https://cdn.jsdelivr.net/npm/typeface-roboto@1.1.13/index.min.css","https://cdn.jsdelivr.net/npm/firacode@5.2.0/distr/fira_code.min.css","https://cdn.jsdelivr.net/npm/node-waves@0.7.6/src/js/waves.min.js","https://cdn.jsdelivr.net/gh/Tomotoes/js/translate-ff7607fcb8.js","https://cdn.jsdelivr.net/gh/Tomotoes/js/log.min.js","https://cdn.jsdelivr.net/gh/Tomotoes/font/comic.min.css"]),workbox.routing.registerRoute(/.*cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-immutable-1633346533404",plugins:[new workbox.expiration.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/font\/.*/,new workbox.strategies.CacheFirst({cacheName:"font-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/css\/.*/,new workbox.strategies.CacheFirst({cacheName:"css-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/js\/.*/,new workbox.strategies.CacheFirst({cacheName:"js-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/cdn\/.*/,new workbox.strategies.CacheFirst({cacheName:"cdn-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|cur|ico|icon|webp)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"image-cache-1633346533404",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/images\/.*/,new workbox.strategies.CacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/Tomotoes\/gallery\/.*/,new workbox.strategies.CacheFirst({cacheName:"gallery-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/at.alicdn.com\/t\//,new workbox.strategies.CacheFirst({cacheName:"icon-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:woff|woff2|eot|ttf|otf)/,new workbox.strategies.CacheFirst({cacheName:"font-cache-1633346533404",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(css|js)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"source-cache-1633346533404",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/www.googletagmanager.com\/gtag/,new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://api.github.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://api.github.com/graphql(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("graphqlAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAuth",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://4tyocrqb.api.lncldglobal.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("leanCloudAPI",{maxRetentionTime:1440})]}),"PUT"),workbox.routing.registerRoute(new RegExp("/disqus/(.*).json(.*)"),new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disqus.com"),new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com(.*)(png|jpg|jpeg|svg|gif)"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-img-cache1633346533404",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-cdn-cache1633346533404",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]}));const blogRevision="1633346533404",aboutRevision="1622361007265",galleryRevision="1633344756576",home=["https://cdn.jsdelivr.net/gh/Tomotoes/Tomotoes.github.io@5134a598be2f7/css/style.css","https://cdn.jsdelivr.net/gh/Tomotoes/Tomotoes.github.io@5134a598be2f7/js/main.js","https://cdn.jsdelivr.net/gh/Tomotoes/Tomotoes.github.io@5134a598be2f7/js/background.js"],about=["https://cdn.jsdelivr.net/gh/Tomotoes/about@d39dde6873751/static/css/main.f0fb6718.chunk.css","https://cdn.jsdelivr.net/gh/Tomotoes/about@d39dde6873751/static/js/2.247b96ea.chunk.js","https://cdn.jsdelivr.net/gh/Tomotoes/about@d39dde6873751/static/js/main.58d207a1.chunk.js","https://cdn.jsdelivr.net/gh/Tomotoes/about@d39dde6873751/static/js/runtime-main.b0782015.js"],blog=["https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/archive-dc72ee348a.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/footer-7201371438.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/highlight-271688128f.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/home-d4d315965f.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/module/comment-bfd02bb730.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/module/relatedPosts-25786aa404.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/module/reward-fc1e0c7470.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/module/toc-15e89e9d69.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/page/guestbook-cc7002a06a.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/page/weibo/post-1a1000f0ad.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/post-3566510171.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/style-37d854d498.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/css/tag-8748e61325.css","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/live2d/index-0d3bb65134.js","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/main-792ee436ad.js","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/module/comment-bbb0691887.js","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/module/other-647322c4e1.js","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/module/post-f3276b6697.js","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/page/guestbook-33df010d97.js","https://cdn.jsdelivr.net/gh/Tomotoes/blog@8b12d1121e707/js/script-0db42b8ec1.js"],gallery=["https://cdn.jsdelivr.net/gh/Tomotoes/gallery@8f9531a4485d5/static/css/main.07434761.chunk.css","https://cdn.jsdelivr.net/gh/Tomotoes/gallery@8f9531a4485d5/static/js/2.e742a8d9.chunk.js","https://cdn.jsdelivr.net/gh/Tomotoes/gallery@8f9531a4485d5/static/js/main.6f253b97.chunk.js","https://cdn.jsdelivr.net/gh/Tomotoes/gallery@8f9531a4485d5/static/js/runtime-main.39cd3636.js"];workbox.precaching.precacheAndRoute(home),workbox.precaching.precacheAndRoute(blog),workbox.precaching.precacheAndRoute(about),workbox.precaching.precacheAndRoute(gallery),workbox.precaching.precacheAndRoute([{url:"index.html",revision:"9d1fe4c3449d78d9a2094e946f4c6ab9"}]);