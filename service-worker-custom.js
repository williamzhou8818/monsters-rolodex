// console.log('My custom service worker')

const CACHE_NAME = 'NKW_API_CACH';


self.addEventListener('install', e => {
    console.log('installing service worker!!');
    const timeStamp = Date.now();
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                `/`,
                `/index.html`,
                `https://nkwapi.jbgcore.com:5000/api/about`,
                `/static/js/bundle.js`
            ]).then(() => self.skipWaiting());
        })
    )
})

