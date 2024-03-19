import { defineApplicationConfig } from '@qianjj/vite-config'
import { loadEnv } from 'vite'

const config = defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [],
    },
    server: {
      proxy: {
        '/basic-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          // secure: false
        },
        '/api/smart': {
          target: 'http://172.16.3.76:8081', //'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api/smart`), '/api/smart'),
          // only https
          // secure: false
        },
        '/media': {
          target: 'http://172.16.3.76:18086', //'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/media`), '/media'),
          // only https
          // secure: false
        },
        '/upload': {
          target: 'http://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
    },
  },
})

export default config
