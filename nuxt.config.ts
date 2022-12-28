import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-proxy',
        '@vueuse/nuxt',
        [
            '@pinia/nuxt',
            {
              autoImports: [
                // automatically imports `defineStore`
                'defineStore', // import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
              ],
            },
        ],
        'unplugin-icons/nuxt',
        '~/modules/websocket'
    ],
    proxy: {
        options: {
            target: 'http://localhost:3005',
            pathFilter: ['/socket.io/'],
            pathRewrite: {
                '^/socket.io': '/socket.io'
            },
            ws: true,
        }
    },
    css: ['element-plus/dist/index.css'],
    vite: {
        plugins: [
          AutoImport({
            resolvers: [ElementPlusResolver()]
          }),
          Components({
            dts: true,
            resolvers: [IconsResolver({}), ElementPlusResolver({
              ssr: true,
            })],
          }),
        ],
      },
})
