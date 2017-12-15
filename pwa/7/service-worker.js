importScripts('sw-toolbox.js', 'pirate-manager.js');

self.addEventListener('install', function(event){
    // nothing to do for now...
});

toolbox.router.get('/images/*', toolbox.fastest, {
  cache: {
    name: 'sw-toolbox-version1',
    maxEntries: 20,
    maxAgeSeconds: 60 * 30
  }
});

toolbox.router.get('/styles/*', toolbox.cacheFirst, {
  cache: {
    name: 'sw-toolbox-version1',
    maxEntries: 20,
    maxAgeSeconds: 60 * 60 * 24 * 7
  }
});

toolbox.router.get('*.html', toolbox.cacheFirst, {
  cache: {
    name: 'sw-toolbox-version1',
    maxEntries: 20,
    maxAgeSeconds: 60 * 60 * 24 * 7
  }
});

toolbox.router.get('/*', toolbox.networkFirst, {
  origin: 'openlibrary.org',
  cache: {
    name: 'sw-toolbox-version1',
    maxEntries: 20,
    maxAgeSeconds: 60 * 60 * 12
  }
});