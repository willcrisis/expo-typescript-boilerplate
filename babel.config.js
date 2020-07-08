module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            assets: './assets',
            components: './components',
            contexts: './contexts',
            screens: './screens',
            test: './test'
          }
        }
      ]
    ]
  };
};
