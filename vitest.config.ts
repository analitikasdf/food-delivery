import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
		clearMocks: true,
		include: ['./src/**/*.spec.ts'],
		setupFiles: ['fake-indexeddb/auto', './src/mock/server.ts']
	},
	plugins: [
		vue({
			template: { transformAssetUrls }
		}),
		quasar({
			sassVariables: 'src/quasar-variables.scss'
		}),
		tsconfigPaths()
	]
});
