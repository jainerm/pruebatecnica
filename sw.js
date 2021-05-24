self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then( cache => {
            return cache.addAll(['./', 'src/css/index.css', 'imgs/aeronaves192.png']);
        })
    );
});
self.addEventListener('fetch', e => {
    //e.respondWith(
    //    caches.match(e.request).then(response => {
    //        return response || fetch(e.request);
    //    })
    //);
    console.log(`Interceptando la solicitud de recuperación para: ${e.request.url}`);
});