import { rest, RestHandler } from 'msw';

import initModel from 'src/mock/utils/init-model';
import initCtrl from 'src/mock/modules/categories/controller';
import { tables } from 'src/mock/modules/categories/ids';

import type { ImockDB } from 'src/mock/libs/mock-db';

export default async (
	mockDB: ImockDB,
	apiURL: string,
	serviceName: string,
	delay = 0
): Promise<RestHandler[]> => {
	const API_URL = `${apiURL}/${serviceName}`;

	await initModel(mockDB, serviceName, tables);

	const { getCategories } = initCtrl(mockDB, serviceName, delay);

	return [
		rest.get(API_URL, getCategories)
		// rest.post(API_URL),
		// rest.put(API_URL),
		// rest.delete(API_URL)
	];
};
