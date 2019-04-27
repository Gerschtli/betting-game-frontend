module.exports = {
  pwa: {
    name: 'Fußball Tippspiel',
    themeColor: '#78909C',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  }
}
