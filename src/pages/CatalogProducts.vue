<template>
	<div>
		<h2>catalog</h2>
		<CatalogSlider />
		<ProductCard />
		<button @click="addProduct">Добавить товар</button>
		<!-- <pre>{{ products }}</pre> -->
		<pre>{{ categories }}</pre>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { productsService } from '../services/products';
import { categoriesService } from '../services/categories';
import ProductCard from 'components/ProductCard.vue';

import type { IProduct } from '../types/products';
import type { ICAtegories } from '../types/categories';
import CatalogSlider from 'src/components/CatalogSlider.vue';

const products = ref<IProduct[]>([]);
const categories = ref<ICAtegories[]>([]);
const getProducts = async (): Promise<void> => {
	products.value = await productsService.getProducts();
};
const getCategories = async (): Promise<void> => {
	categories.value = await categoriesService.getCategories();
};

const addProduct = async (): Promise<void> => {
	const newProductID = await productsService.addProduct({
		sku: '2',
		name: 'Товар 2',
		descr: 'loQuis do cupidatat anim pariatur voluptate culpa occaecat Lorem laborum aute proident nostrud exercitation anim. Culpa ex nisi veniam sint esse deserunt aliqua eiusmod ipsum consequat ex. Fugiat ea eu et labore reprehenderit non elit.',
		price: 500,
		brand_id: 1,
		category_id: 1,
		series_id: 10
	});
	console.log(newProductID);
	await getProducts();
};

await getProducts();
await getCategories();
</script>

<style scoped></style>
