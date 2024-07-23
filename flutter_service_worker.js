'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "82c0721571b9fab03efb61982c0d2347",
"assets/AssetManifest.json": "49c7876bc03cd567aa24f36c7114416e",
"assets/assets/icons/Bell.png": "b22e80b7c95732b5c9192e42f640524d",
"assets/assets/icons/ChatCircle.png": "1cde9b7a05cb5d714da7e6dfcd94fc36",
"assets/assets/icons/EnvelopeSimple.png": "ad8462dcb63814fb40500003c83f6e6c",
"assets/assets/icons/hamburger.png": "457c0e5dd6a60d18f282ba18bfcb766a",
"assets/assets/icons/heart.png": "4314a40d6af6c15ab74c9070f9b5027c",
"assets/assets/icons/House.png": "1b7e241604e239bc18e8affa8618b999",
"assets/assets/icons/MagnifyingGlass.png": "c72e26b83c5d6ff304108eed89e25cae",
"assets/assets/icons/ShareFat.png": "35712e4a261c629c658df630722d757f",
"assets/assets/icons/verified.png": "3c42be5a0857c1ce8268fce85ce334e0",
"assets/assets/img/animation_lkwm9ibq.json": "6d6225189986cd795eaafc3088875534",
"assets/assets/img/animation_lkwmlmfb.json": "d732bc50821194c64c433f6f057d8a80",
"assets/assets/img/animation_ll10d3rt.json": "dca6521c0e20a1d660a03d9d08554664",
"assets/assets/img/bicepcurls.png": "2c56ea39730a223b285a0a29caaba9e7",
"assets/assets/img/bugle-logo.png": "14ee01cf1dc18d041491d4802298f8df",
"assets/assets/img/bugle-logo.svg": "a1adec8ab1539d4ae5c6c2c84c7bc8c4",
"assets/assets/img/bugles-icon.svg": "acf1e6e7acb6e9a123de93d627e71600",
"assets/assets/img/heart-filled.png": "74914c32e8bd99c546809e21b35c442b",
"assets/assets/img/img.png": "888beae818b39bba9da59fdbc791fdd2",
"assets/assets/img/img_4.png": "2e39dfa4f1e781d660248b93bbf38a7c",
"assets/assets/img/leg.png": "2d5e11840f93f683d77ca299283d1e84",
"assets/assets/img/logo.png": "5948c9f273fa11b5610e8a555b960b64",
"assets/assets/img/meditation.jpeg": "bdd583fb825d33fb38ebf0424f0c030c",
"assets/assets/img/noraperson.jpg": "d322334b3cb9a3ddebc108f266663341",
"assets/assets/img/notify.json": "494d21d75321da9c0960c5071092d9c7",
"assets/assets/img/portrait-youg-afro-american-sports-man-doing-pushup-exercise.jpg": "10139c4625b58f9d27be93d8ca856a4b",
"assets/assets/img/post-image.png": "4d42ce131dbb04ad19452756b20ee91c",
"assets/assets/img/pushups.png": "32da6ea54e452b46e024f30d0f3859f3",
"assets/assets/img/rearadmiral.png": "30eddad918f0be58febe288524104830",
"assets/assets/img/serious-fit-black-african-american-man-performing-pushup-from-light-wooden-floor-against-white-wall_346278-1710.avif": "929b8b2501d67f8e9c022bb960f1ed8e",
"assets/assets/img/soldier%25203.png": "7f26e40384e9bce872f217d9afd21eab",
"assets/assets/img/staggered-pushup.json": "a606539de3bcab95517af961cf32a8fa",
"assets/assets/img/team_bugle.png": "7e3cabeda5103536d6d4406244e5cc9b",
"assets/FontManifest.json": "fc7b91ca8328b0e876d50f24465fd7db",
"assets/fonts/Archivo.ttf": "fd8df9448157dc25ce59e9c4a58ee505",
"assets/fonts/Inter.ttf": "ba8d154465f7fd15e2fc2ced6dceec90",
"assets/fonts/MaterialIcons-Regular.otf": "7782b1d228964aa68056ccfede8fc7b9",
"assets/NOTICES": "ac506de3ddd2d4f1ccca8f4582ed309a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "496b29b223f6ab7fb836e3d2519aa62e",
"/": "496b29b223f6ab7fb836e3d2519aa62e",
"main.dart.js": "a97329a93cd96ea5c737d15ffcd95ff2",
"manifest.json": "fa02645b580a1ad29725d71b576483fd",
"version.json": "1cc663236ec551fafd72de4a248c5eab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
