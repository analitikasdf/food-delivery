<template>
	<div>
		<h2>catalog</h2>
		<button @click="addProduct">Добавить товар</button>
		<pre>{{ products }}</pre>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { productsService } from '../services/products';

import type { IProduct } from '../types/products';

const products = ref<IProduct[]>([]);
const getProducts = async (): Promise<void> => {
	products.value = await productsService.getProducts();
};

const addProduct = async (): Promise<void> => {
	const newProductID = await productsService.addProduct({
		sku: '123',
		name: 'Новый товар',
		brand_id: 1,
		category_id: 1,
		series_id: 1
	});
	console.log(newProductID);
	await getProducts();
};

await getProducts();
</script>

<style scoped></style>
