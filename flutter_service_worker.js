'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"index.html": "f9ee761834024e8bd5be3e25620793bf",
"/": "f9ee761834024e8bd5be3e25620793bf",
"main.dart.js": "f5ccf828f42bc0d8838a81e1de4061d4",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"assets/assets/img/certifications/ComputerVision.png": "85b63c803c7f1948cfe73e9ce24b5e1e",
"assets/assets/img/certifications/DataCleaning.png": "cc1b3b5191610ed11c7b1ff2ac07599d",
"assets/assets/img/certifications/IntermediateMachineLearning.png": "f7e32c1cbe8337310b4575a99b422297",
"assets/assets/img/certifications/IntrotoDeepLearning.png": "f80a7eb22f3d60100eae44eee022930c",
"assets/assets/img/certifications/IntrotoMachineLearning.png": "60bd5e18b5e691c1678217a13b0ddf36",
"assets/assets/img/certifications/Pandas.png": "48f36ae2da9016de85ed7daab4b158e2",
"assets/assets/img/certifications/Python.png": "afadd1f7df1de5e17b355ff339f9e5f5",
"assets/assets/img/man(1).png": "494d39151fefcc951b30520560772f35",
"assets/assets/img/man.png": "0458cba11339ca91bfc872462684a323",
"assets/assets/pdf/CV_ING4_FR.pdf": "b76d317647bc5053c07c6fc2ee31d258",
"assets/assets/pdf/cv.png": "1a9aec518f6db72f490a6208f093b5ac",
"assets/assets/fonts/SocialIcons.ttf": "158c733f732b58e5e1f9f7f442991f2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "b04e8fa4817c0eb7115b95713ef36dfa",
"assets/FontManifest.json": "6e211820e72def5722880833838d04e2",
"assets/NOTICES": "defc4606833e0540a3c438464fc69c20",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"README.md": "862c7ca7db1cead3d503707d5fb1c914",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "7fe2e75c7b81ffd8be255848018be5c4",
".git/refs/remotes/origin/main": "7fe2e75c7b81ffd8be255848018be5c4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "a2824523da1c240c720aaf2a08e1a8f8",
".git/objects/8b/9f335224c7749e37f06bcfecabc433778824f2": "3c2c055057ff7f066587b9e2bcae7f0d",
".git/objects/6e/77026c3b25457f52fff715008d8c062d787f78": "1f8d7e6fd580e8338bf7e35879958a59",
".git/objects/b5/8a35f061928f636d3a06a7fba07fdb2cdc4375": "e7146d3ef21ede9d9a9b5959b8f2e291",
".git/objects/4b/b9805c6a7547e1c7450157ebdf49f56bc803e9": "14fea594ed2046bb5af0d5faa9b18671",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/c3/b2b129d130209326bb65314a9363ebf2fba602": "9421bdc0e718659dbbb92901645d2d77",
".git/objects/87/8189982f60b80597a6f45bd1989a03c5b9fd48": "098eef42fe0cd77118b62f3b27bd33d3",
".git/objects/6a/05db83d538e8916e6edff3dfab632e6e3a6269": "f0c73887f0f5b874c441ba4567c2e537",
".git/objects/71/4e43a7f40509088ed412186847c8ea680c1688": "5d5744de0aa2d51618ffefc06aa2e11e",
".git/objects/d4/da6ef8fe21bd46d36734df6d186923bd039d6f": "e7d016acbfc38fed7fc2deb82fbd8eb2",
".git/objects/ef/95a8f58e5961c6596146be5a27cb36b3472e7a": "ad7ab2f147701fbc6d4cd9bbcb4fe511",
".git/objects/99/fcd63575864e2948f73ebc716d1631368f7b04": "1507556529d6287e32110e74901bc40e",
".git/objects/f8/0c4a475958832981a438a7821487f865a67df8": "42b1004c6b56d65b554f0b420e1d76ef",
".git/objects/58/25e826e000c5fb2ccbed1c2c4c51ba3ca5788d": "5517a83ae2a274f2ecb5501e2c785700",
".git/objects/fd/b5130e1155f4194b4dba9ada87a58218e981a8": "224b3cab66177dd1564dfccc06d7df8f",
".git/objects/8a/f8f823d28b3396fc8812e88cc3e69a5f0ac6da": "d614f162ee053a11a77527c910ad2127",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1c/643448a5435148441eb8779f0015706c5de96d": "6b02d33aa2205002e343bec195a35475",
".git/objects/73/757ac280c76915c7f1ac05802a095ce21fa6b7": "ed4bce70f15fab7bb5efb0397a4b89c7",
".git/objects/c1/8010df5a9390aeccbc75943c2c0d88b673a525": "1882ea42517a3bd32ec47a1ad6e4cdf6",
".git/objects/af/e99558d2e560d3867e1366c377505a03ee00c2": "75eee54c75a936e876917cb272989ffd",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/91/185ddb18096146cab06b82553d2b134c7367e8": "b1e8f799fa6dbbd459349e3f81c90fee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b4/58321e70076a669ea1f7727d6e20f66a0cb4fb": "86aca05ed656ccc0d82a727aac3fb5ca",
".git/objects/1d/ce673d40051a4a84e32375d59a2c08c82c8332": "2290798e289094f0b7aaee4acf454bd8",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/511918968d62b5a208ab7be867616f990bb9cc": "3d8e2dd57403d36ffae0ca0bff8107be",
".git/objects/c5/30bf1dacd3802364328aace6b83e06efffa6ea": "99f4f739bfd56a826763a6ba6b5b0032",
".git/objects/b1/ddcd1d30b3bf1d0e2203336b499ddb0412f3f8": "3cad460b75fb9296af63a7754b0b4489",
".git/objects/0c/e99655fe70bf362afae1dbe4ef414c1ef59190": "d2c9a9ab629b4b6e11ca124e2d6937a9",
".git/objects/0c/1994abe33d352f27269e23fa40f3e406a66637": "cffd4ed6247b26e6868772db2f90da2f",
".git/objects/e4/b9d20565d178392026e87089b8ce3b0237f21f": "1a1ef185483ca41c23f54986fea22dab",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ca/5d98c27cfea509755e42c029f968ac9a057103": "a8b5999f231c7dd24d30f04f3c83090e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/9d/df3627595eed240bf676451d9208fd53758411": "eea8258e573ab993b7474461417965fe",
".git/index": "1b228eea4c9eee12d373c1b0e26c8411",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/logs/HEAD": "b540110d28542bc2fcc084c4c5ae1ec9",
".git/logs/refs/heads/main": "17dea4860efab0c9ae9e68e732de16a6",
".git/logs/refs/remotes/origin/main": "f37c361651bcf152aad65b61d464b9e4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
