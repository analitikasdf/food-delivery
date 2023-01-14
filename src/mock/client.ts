import { setupWorker } from 'msw';
import { mockDB } from './libs/mock-db';
import { allowModules } from './config';

const mockDbInstance = new mockDB({ level: 5 });
const enabledModules = allowModules || [];

const handlers = await Promise.all(
	enabledModules.map(async moduleName => {
		const handler = (await import(`./modules/${moduleName}/index.ts`))
			.default;
		return handler(
			mockDbInstance,
			process.env.API_URL,
			moduleName,
			process.env.NODE_ENV === 'development' ? 300 : 0
		);
	})
);

export const mockServerWorker = setupWorker(...handlers.flat());
