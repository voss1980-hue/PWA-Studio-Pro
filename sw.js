// --- Deine originalen Variablen ---
const CN = 'pwa-cache-v5';
const URLS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./offline.html",
    "./icons/icon-192x192.png",
    "./icons/icon-512x512.png"
];

// --- Dein originaler 'install' Listener ---
// (Wird ausgelöst, wenn der SW heruntergeladen wird)
self.addEventListener('install', e => {
    console.log('SW: Installiere Version:', CN);
    e.waitUntil(
        caches.open(CN).then(c => c.addAll(URLS))
    );
});

// --- NEU: Listener für die 'SKIP_WAITING' Nachricht ---
// (Wird von der index.html aufgerufen, um das Update zu erzwingen)
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('SW: SKIP_WAITING empfangen, aktiviere sofort.');
        // Zwingt den neuen Service Worker, sofort aktiv zu werden
        self.skipWaiting();
    }
});

// --- NEU: 'activate' Listener für Cache-Bereinigung & Übernahme ---
// (Wird ausgelöst, nachdem der alte SW beendet wurde)
self.addEventListener('activate', event => {
    console.log('SW: Aktiviere Version:', CN);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    // Lösche alle alten PWA-Studio-Caches (z.B. 'pwa-cache-v4'),
                    // die nicht mit der aktuellen Version (CN) übereinstimmen.
                    return cacheName.startsWith('pwa-cache-') && cacheName !== CN;
                }).map(cacheName => {
                    console.log('SW: Lösche alten Cache:', cacheName);
                    return caches.delete(cacheName);
                })
            );
        }).then(() => {
            // Übernehme die Kontrolle über alle offenen Clients (Tabs)
            console.log('SW: Übernehme Kontrolle (clients.claim)');
            return self.clients.claim();
        })
    );
});

// --- Dein originaler 'fetch' Listener ---
// (Behandelt alle Netzwerkanfragen mit "Cache First"-Strategie)
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
        .catch(() => caches.match("./offline.html"))
    );
});
