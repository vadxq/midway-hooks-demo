import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import hooks from '@midwayjs/vite-plugin-hooks';
import { join } from 'path'
// import eslint from 'vite-plugin-eslint';
import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    hooks(),
    {...eslint({include: 'src/**/*.+(js|jsx|ts|tsx)'}), enforce: 'pre'},
    reactRefresh(),
    // eslint({
    //   cache: false,
    //   fix: false,
    //   include: ['./*.ts', './*.tsx'],
    // }),
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
});
