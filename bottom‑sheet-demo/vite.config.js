import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bottom-sheet-demo/',   //  << exact repo name wrapped in slashes
});
