const C='tcm-v4';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.url.includes('anthropic.com'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
