var SWVersion="5.201.3";"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register(`/sw.js?v=${SWVersion}`).catch(function(e){console.log("ServiceWorker registration failed: ",e)})});