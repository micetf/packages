import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'MicetfData',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        // Préserver la structure des modules
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    sourcemap: true,
  },
});