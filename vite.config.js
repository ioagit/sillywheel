import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import defaultConfig from './src/config/configs/default'
import companyConfig from './src/config/configs/company'
import schoolConfig from './src/config/configs/school'

const configs = {
  default: defaultConfig,
  company: companyConfig,
  school: schoolConfig,
}

// Get config from environment variable
const configName = process.env.VITE_CONFIG || 'default'
const selectedConfig = configs[configName] || configs.default

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This makes the config available at build time
    __APP_CONFIG__: JSON.stringify(selectedConfig),
  },
})
