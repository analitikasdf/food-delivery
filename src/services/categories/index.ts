import { joinURL } from 'ufo';
import { StatusCodes } from 'http-status-codes';

import { createApi } from 'src/modules/axios';

import type { ICAtegories } from 'src/types/categories';

const api = createApi(joinURL(<string>process.env.API_URL, 'categories'));

export const categoriesService = {
	/**
	 *
	 * Получить список категорий
	 *
	 * @example categoriesService.getCategories();
	 *
	 */
	getCategories: async (): Promise<ICAtegories[]> =>
		await api.get<ICAtegories[]>('', {
			validateStatus: (status: number) => status === StatusCodes.OK
		})
};
