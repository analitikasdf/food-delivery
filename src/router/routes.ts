import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '', name: 'home', component: () => import('pages/IndexPage.vue') }]
	},
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '/catalog', name: 'catalog', component: () => import('pages/CatalogProducts.vue') }]
	},
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '/cart', name: 'cart', component: () => import('pages/CartProducts.vue') }]
	},
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '/user', name: 'user', component: () => import('pages/UserInfo.vue') }]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue')
	}
];

export default routes;
