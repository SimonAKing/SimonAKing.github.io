var SWVersion="5.195.3";"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register(`/sw.js?v=${SWVersion}`).catch(function(e){console.log("ServiceWorker registration failed: ",e)})});