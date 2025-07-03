self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("clock-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./tick.mp3",
        "./manifest.json",
        "./clock-icon.png",
        "./clock-icon-large.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
