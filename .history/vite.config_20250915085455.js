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
      '@capacitor/core': false,
      '@capacitor/app': false
    }
  },
  build: {
    rollupOptions: {
      external: ['@capacitor/core', '@capacitor/app'],
      output: {
        globals: {
          '@capacitor/core': 'capacitorCore',
          '@capacitor/app': 'capacitorApp'
        }
      }
    }
  }
});