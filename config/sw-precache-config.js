module.exports = {
    stripPrefix: 'build/',
    maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // increase the max size to 10MB
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/!(*map*)',
      /* add all files on root of the build folder and pico2wave */
      'build/*',
      'build/pico2wave/*',
      'build/assets/*'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
};
