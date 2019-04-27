module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    config.optimization.runtimeChunk('single');
    config.optimization.splitChunks({
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      }
    });
  },
  pwa: {
    name: 'Fußball Tippspiel',
    themeColor: '#78909C',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  }
}
