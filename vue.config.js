const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    },
  },
  pwa: {
    name : 'Music App',
    themeColor: '#ff55e3a',
    manifestOptions: {
      name: 'Music App',
      shot_name: 'Musica',
    }
  }
});
