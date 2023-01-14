import { createApp } from 'vue';
import App from './App.vue';

const setup = async () => {
	// start mock server worker
	if (process.env.NODE_ENV === 'development') {
		const loadMockServerWorker = async () => await import('./mock/client');

		const { mockServerWorker } = await loadMockServerWorker();
		mockServerWorker.start({
			onUnhandledRequest: 'bypass'
		});
	}

	const app = createApp(App);

	// AUTOLOAD MODULES
	// Object.values(
	// 	import.meta.glob('/src/modules/*.ts', { eager: true })
	// ).forEach((module: any) => module?.install?.(app));

	app.mount('#app');
};

await setup();
