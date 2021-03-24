import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import hooks from '@midwayjs/vite-plugin-hooks';
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    hooks(),
    reactRefresh()
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
});
