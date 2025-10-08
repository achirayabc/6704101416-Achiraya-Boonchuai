// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    boot: [],

    css: ['app.scss'],

    extras: [
      'roboto-font', 
      'material-icons',
    ],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      vueRouterMode: 'hash',

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
            server: false, // <- ต้องอยู่ข้างใน object
          }
        ]
      ],
    },

    devServer: {
      open: true, // opens browser window automatically
    },

    framework: {
      config: {},

      plugins: [
        ['Notify']
      ]
    },

    animations: [],

    ssr: {
      prodPort: 3000,

      middlewares: [
        'render',
      ],

      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: '6704101416-achiraya-boonchuai',
      },
    },

    bex: {
      extraScripts: [],
    },
  }
});
