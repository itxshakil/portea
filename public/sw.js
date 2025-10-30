const CACHE_NAME = "my-site-cache-v0.1";
const TTL = 7 * 24 * 60 * 60 * 1000;

const urlsToCache = [
    '/',
    '/?source=pwa',
    '/assets/index-ns3tTPsp.css',
    '/assets/index-Oc-BKd8m.js',
    '/android-chrome-192x192.png',
];

const dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open("cache-metadata", 1);
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore("timestamps");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
});

async function setTimestamp(url) {
    const db = await dbPromise;
    const tx = db.transaction("timestamps", "readwrite");
    tx.objectStore("timestamps").put(Date.now(), url);
}

async function isExpired(url) {
    const db = await dbPromise;
    const tx = db.transaction("timestamps", "readonly");
    const store = tx.objectStore("timestamps");
    const result = await new Promise((resolve) => {
        const req = store.get(url);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
    });
    return !result || (Date.now() - result > TTL);
}

// No pre-cache
// self.addEventListener("install", (event) => {
//     self.skipWaiting();
// });

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) =>
            Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    const url = event.request.url;
    const isStaticAsset = /\.(png|jpe?g|webp|gif|avif|svg|js|css)$/i.test(url);

    if (!isStaticAsset) return; // Only cache images, JS, CSS

    event.respondWith(
        caches.match(event.request).then(async (cachedResponse) => {
            const expired = await isExpired(url);

            if (cachedResponse && !expired) {
                return cachedResponse;
            }

            return fetch(event.request)
                .then((networkResponse) => {
                    if (
                        !networkResponse ||
                        networkResponse.status !== 200 ||
                        networkResponse.type !== "basic"
                    ) {
                        return networkResponse;
                    }

                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                        setTimestamp(url);
                    });

                    return networkResponse;
                })
                .catch(() => cachedResponse); // fallback to old if network fails
        })
    );
});
