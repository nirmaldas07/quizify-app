import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  json: {
    namedExports: true,
    stringify: false
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