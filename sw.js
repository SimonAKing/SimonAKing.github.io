const workboxVersion="5.1.4";importScripts("https://cdn.jsdelivr.net/npm/workbox-sw@5.1.4/build/workbox-sw.min.js");const cacheSuffixVersion="1743343799534",precacheCacheName=workbox.core.cacheNames.precache,runtimeCacheName=workbox.core.cacheNames.runtime,maxEntries=100;workbox.core.setCacheNameDetails({prefix:"SimonAKing",suffix:"1743343799534"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute(["https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js","https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js","https://cdn.jsdelivr.net/npm/headroom.js@0.12.0/dist/headroom.min.js","https://cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js","https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js","https://cdn.jsdelivr.net/npm/@jaames/iro@5.2.3/dist/iro.min.js","https://cdn.jsdelivr.net/npm/github-cards@1.0.4/widget.js","https://cdn.jsdelivr.net/npm/typeface-roboto@1.1.13/index.min.css","https://cdn.jsdelivr.net/npm/firacode@5.2.0/distr/fira_code.min.css","https://cdn.jsdelivr.net/npm/node-waves@0.7.6/src/js/waves.min.js","https://cdn.jsdelivr.net/gh/SimonAKing/js/translate-ff7607fcb8.js","https://cdn.jsdelivr.net/gh/SimonAKing/js/log.min.js","https://cdn.jsdelivr.net/gh/SimonAKing/font/comic.min.css"]),workbox.routing.registerRoute(/.*cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-immutable-1743343799534",plugins:[new workbox.expiration.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/font\/.*/,new workbox.strategies.CacheFirst({cacheName:"font-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/css\/.*/,new workbox.strategies.CacheFirst({cacheName:"css-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/js\/.*/,new workbox.strategies.CacheFirst({cacheName:"js-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/cdn\/.*/,new workbox.strategies.CacheFirst({cacheName:"cdn-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|cur|ico|icon|webp)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"image-cache-1743343799534",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/images\/.*/,new workbox.strategies.CacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/gh\/SimonAKing\/gallery\/.*/,new workbox.strategies.CacheFirst({cacheName:"gallery-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/at.alicdn.com\/t\//,new workbox.strategies.CacheFirst({cacheName:"icon-cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(?:woff|woff2|eot|ttf|otf)/,new workbox.strategies.CacheFirst({cacheName:"font-cache-1743343799534",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/.*\.(css|js)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"source-cache-1743343799534",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(/^https:\/\/www.googletagmanager.com\/gtag/,new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://api.github.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://api.github.com/graphql(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("graphqlAPI",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("githubAuth",{maxRetentionTime:1440})]}),"POST"),workbox.routing.registerRoute(new RegExp("^https://4tyocrqb.api.lncldglobal.com/(.*)"),new workbox.strategies.NetworkOnly({plugins:[new workbox.backgroundSync.BackgroundSyncPlugin("leanCloudAPI",{maxRetentionTime:1440})]}),"PUT"),workbox.routing.registerRoute(new RegExp("/disqus/(.*).json(.*)"),new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disqus.com"),new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com(.*)(png|jpg|jpeg|svg|gif)"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-img-cache1743343799534",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800,purgeOnQuotaError:!0})]})),workbox.routing.registerRoute(new RegExp("^https://(.*)disquscdn.com"),new workbox.strategies.StaleWhileRevalidate({cacheName:"disqus-cdn-cache1743343799534",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]})),workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst({options:[{networkTimeoutSeconds:3}]}));const blogRevision="1743325666816",aboutRevision="1672421150207",galleryRevision="1668350529922",home=["https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@53289a2916bc9/css/style.css","https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@53289a2916bc9/js/main.js","https://cdn.jsdelivr.net/gh/SimonAKing/SimonAKing.github.io@53289a2916bc9/js/background.js"],about=["https://cdn.jsdelivr.net/gh/SimonAKing/about@4d5caa43dbaa1/static/css/main.c4edd4c7.chunk.css","https://cdn.jsdelivr.net/gh/SimonAKing/about@4d5caa43dbaa1/static/js/2.f95c777e.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/about@4d5caa43dbaa1/static/js/main.0b9a5b84.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/about@4d5caa43dbaa1/static/js/runtime-main.b0782015.js"],blog=["https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/archive-fe07d9fa4d.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/footer-7201371438.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/highlight-271688128f.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/home-d4d315965f.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/module/comment-bfd02bb730.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/module/relatedPosts-25786aa404.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/module/reward-fc1e0c7470.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/module/toc-15e89e9d69.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/page/guestbook-cc7002a06a.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/page/weibo/post-1a1000f0ad.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/post-5a3bec6883.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/style-bc37410a7d.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/css/tag-8748e61325.css","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/live2d/index-82bea678e2.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/main-04f3bea809.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/module/comment-5cad405b01.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/module/other-a1adb7a7ba.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/module/post-6c0c224aba.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/page/guestbook-ce2b4e08ea.js","https://cdn.jsdelivr.net/gh/SimonAKing/blog@45185907aa165/js/script-c7fb505bf4.js"],gallery=["https://cdn.jsdelivr.net/gh/SimonAKing/gallery@bd83f2ad97375/static/css/main.d49b58e9.chunk.css","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@bd83f2ad97375/static/js/2.4ee1ec88.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@bd83f2ad97375/static/js/main.ef180d63.chunk.js","https://cdn.jsdelivr.net/gh/SimonAKing/gallery@bd83f2ad97375/static/js/runtime-main.39cd3636.js"];workbox.precaching.precacheAndRoute(home),workbox.precaching.precacheAndRoute(blog),workbox.precaching.precacheAndRoute(about),workbox.precaching.precacheAndRoute(gallery),workbox.precaching.precacheAndRoute([{url:"index.html",revision:"ae254b84f6c8db9148e62c492de3b638"}]);