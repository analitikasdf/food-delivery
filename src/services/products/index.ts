import { joinURL } from 'ufo';
import { StatusCodes } from 'http-status-codes';

import { createApi } from 'src/modules/axios';

import type { IProduct } from 'src/types/products';

const api = createApi(joinURL(<string>process.env.API_URL, 'products'));

export const productsService = {
	/**
	 *
	 * Получить список товаров
	 *
	 * @example productsService.getProducts();
	 *
	 */
	getProducts: async (): Promise<IProduct[]> =>
		await api.get<IProduct[]>('', {
			validateStatus: (status: number) => status === StatusCodes.OK
		}),

	/**
	 *
	 * Добавить новый товар
	 *
	 * @param {IProduct} data - данные
	 * @param {string} data.sku sku
	 * @param {string} data.name name
	 * @param {number} data.brand_id brand_id
	 * @param {number} data.category_id category_id
	 * @param {number} data.series_id series_id
	 *
	 * @example productsService.addProduct(data);
	 *
	 */
	addProduct: async (data: Omit<IProduct, 'id'>): Promise<number> =>
		await api.post<number>('', data, {
			validateStatus: (status: number) => status === StatusCodes.CREATED
		})
};
