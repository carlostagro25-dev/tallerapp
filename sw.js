/* Guarda solo la "cáscara" de la app (esta página e íconos) para que abra rápido.
   Los datos del taller NO se guardan aquí: siempre vienen del sistema en Google. */
const VERSION = 'taller-at-v1';
const CASCARA = ['./', 'index.html', 'manifest.webmanifest', 'icono-192.png', 'icono-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CASCARA)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== 'GET') return;   // Google se pide directo
  // Red primero (para recibir cambios de la página), y si no hay red, lo guardado
  e.respondWith(fetch(e.request).then(r => {
    const copia = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copia)); return r;
  }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
