import { presetIcons, presetTypography, presetUno, UserConfig } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [presetUno(), presetTypography(), presetIcons()],
  include: ['./src/**/*.{jsx,tsx,vue,md,html,svelte,astro,js,ts}'],
})
// export default userConfig
