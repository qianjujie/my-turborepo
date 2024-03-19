import UnoCSS from 'unocss/vite'
import { type UserConfig } from 'vite'

const commonConfig: (mode: string) => UserConfig = (mode) => ({
  server: {
    host: true,
    port: 5174,
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      // TODO: Prevent memory overflow
      maxParallelFileOps: 3,
    },
  },
  plugins: [
    UnoCSS({
      configFile: '../plugins/uno.config.ts',
    }),
  ],
})

export { commonConfig }
