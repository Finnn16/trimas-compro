self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                'src/styles/style.min.css',
                'src/scripts/index.js',
                'src/img/*.jpg',
                'src/img/*.webp',
                'src/img/*.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
    if (cachedResponse) {
        // Cek apakah cache sudah lebih dari 4 hari
        const cacheDate = new Date(cachedResponse.headers.get('date'));
        const now = new Date();
        const maxAge = 4 * 24 * 60 * 60 * 1000;  // 4 hari dalam milidetik
        if (now - cacheDate > maxAge) {
        // Cache sudah lebih dari 4 hari, ambil file dari server
        return fetch(event.request).then((networkResponse) => {
            return caches.open('my-cache').then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
            });
        });
        }
        // Jika cache masih valid, gunakan cache
        return cachedResponse;
    }

    // Jika tidak ada dalam cache, ambil dari jaringan
    return fetch(event.request).then((networkResponse) => {
        return caches.open('my-cache').then((cache) => {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
        });
    });
    })
);
});