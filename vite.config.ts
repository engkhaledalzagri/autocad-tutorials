import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@context': path.resolve(__dirname, './src/context'),
    },
  },
});
