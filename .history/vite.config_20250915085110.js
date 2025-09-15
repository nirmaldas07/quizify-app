import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  json: {
    namedExports: true,
    stringify: false
  },
  resolve: {
    alias: {
      '@capacitor/core': 'node_modules/@capacitor/core/dist/esm/index.js',
      '@capacitor/app': 'node_modules/@capacitor/app/dist/esm/index.js'
    }
  },
  build: {
    rollupOptions: {
      external: []
    }
  },
  optimizeDeps: {
    exclude: ['@capacitor/core', '@capacitor/app']
  }
});