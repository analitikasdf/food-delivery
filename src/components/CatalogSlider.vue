<template>
	<h2>Category</h2>
	<swiper
		:slides-per-view="'auto'"
		:space-between="10"
		:pagination="{ clickable: true }"
		:freeMode="true"
	>
		<swiper-slide v-for="(item, index) in categories" :key="index">
			<h2
				class="px-3 inline-flex justify-center items-center bg-emerald-400 h-8 leading-4"
			>
				{{ item }}
			</h2>
		</swiper-slide>
	</swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import {} from 'swiper';

// const modules = [Navigation, Pagination];

const categories = ref<string[]>([
	'drinks',
	'deserts',
	'hot dishes',
	'cold dishes',
	'starters',
	'drinks',
	'deserts',
	'hot dishes',
	'cold dishes',
	'starters'
]);
</script>

<style scoped>
.swiper-slide {
	width: fit-content;
}
</style>
