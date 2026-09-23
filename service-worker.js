/* 社内ボウリング大会 - Service Worker
   キャッシュ戦略：シェルはキャッシュファースト、更新時は自動置換
*/
const CACHE_NAME = "bowling-app-v1.0.0";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((res) => {
        // 同一オリジンのみキャッシュ更新
        try {
          const url = new URL(req.url);
          if (url.origin === self.location.origin && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          }
        } catch (_) {}
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
