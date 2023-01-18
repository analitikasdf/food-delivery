import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { ResponseResolver, RestRequest, RestContext } from 'msw';
import { tables } from './ids';

import type { ImockDB } from 'src/mock/libs/mock-db';

import type { ICAtegories } from 'src/types/categories';

export default (
	db: ImockDB,
	storeName: string,
	delay = 0
): Record<string, ResponseResolver<RestRequest, RestContext>> => ({
	/**
	 *
	 * Handle `GET /categories`
	 * Return all categories
	 *
	 * @example getcategories;
	 *
	 */
	getCategories: async (req, res, ctx) => {
		return res(
			ctx.delay(delay),
			ctx.status(StatusCodes.OK),
			ctx.json(await db.getAll(storeName, tables.CATEGORIES))
		);
	}
});
