const expectedCaches = ['vincenttertre-v1'];
const filesToCache = [
  '/',
  '/robots.txt',
  '/manifest.json',
  '/assets/app/app.css',
  '/assets/app/app.js',
  '/assets/image/avatar.jpg',
  '/assets/image/favicon.ico',
  '/assets/icons/android-chrome-192x192.png',
  '/assets/icons/android-chrome-512x512.png'
];

self.addEventListener('install', function (event) {
  return event.waitUntil(
    caches.open('vincenttertre-v1').then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (expectedCaches.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      )
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
