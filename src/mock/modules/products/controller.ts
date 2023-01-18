import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { ResponseResolver, RestRequest, RestContext } from 'msw';
import { tables } from './ids';

import type { ImockDB } from 'src/mock/libs/mock-db';

import type { IProduct } from 'src/types/products';

export default (
	db: ImockDB,
	storeName: string,
	delay = 0
): Record<string, ResponseResolver<RestRequest, RestContext>> => ({
	/**
	 *
	 * Handle `GET /products`
	 * Return all products
	 *
	 * @example getProducts;
	 *
	 */
	getProducts: async (req, res, ctx) => {
		const response = await db.getAll(storeName, tables.PRODUCTS);
		if (!response) {
			return res(
				ctx.delay(delay),
				ctx.status(StatusCodes.NOT_FOUND),
				ctx.text(ReasonPhrases.NOT_FOUND)
			);
		}

		return res(
			ctx.delay(delay),
			ctx.status(StatusCodes.OK),
			ctx.json(response)
		);
	},

	/**
	 *
	 * Handle `POST /products`
	 * Add new product
	 *
	 * @example addProduct;
	 *
	 */
	addProduct: async (req, res, ctx) => {
		const data = <Omit<IProduct, 'id'>>await req.json();

		return res(
			ctx.delay(delay),
			ctx.status(StatusCodes.CREATED),
			ctx.json(await db.put(storeName, tables.PRODUCTS, data))
		);
	}
});
