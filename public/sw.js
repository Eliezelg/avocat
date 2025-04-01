// Service Worker pour LegalMultiLens
const CACHE_NAME = 'legalmultilens-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/global.css',
  '/images/logo.jpg',
  '/images/lawyer-portrait.png',
  '/favicon.svg',
  '/manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Stratégie de cache: Network First, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Mise en cache de la nouvelle réponse
        const responseClone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            // Ne mettre en cache que les requêtes GET
            if (event.request.method === 'GET') {
              cache.put(event.request, responseClone);
            }
          });
        return response;
      })
      .catch(() => {
        // Fallback au cache si le réseau échoue
        return caches.match(event.request);
      })
  );
});

// Nettoyage des anciens caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
