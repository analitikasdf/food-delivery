import { rest, RestHandler } from 'msw';

// TODO: Поправить пути
import initModel from 'src/mock/utils/init-model';
import initCtrl from 'src/mock/modules/products/controller';
import { tables } from 'src/mock/modules/products/ids';

import type { ImockDB } from 'src/mock/libs/mock-db';

export default async (
	mockDB: ImockDB,
	apiURL: string,
	serviceName: string,
	delay = 0
): Promise<RestHandler[]> => {
	const API_URL = `${apiURL}/${serviceName}`;

	await initModel(mockDB, serviceName, tables);

	const { getProducts, addProduct } = initCtrl(mockDB, serviceName, delay);

	return [
		rest.get(API_URL, getProducts),
		rest.post(API_URL, addProduct)
		// rest.post(API_URL),
		// rest.put(API_URL),
		// rest.delete(API_URL)
	];
};
