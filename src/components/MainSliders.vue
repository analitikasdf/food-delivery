<template>
	<template v-for="(item, indexMain) in mainSlidersData" :key="indexMain">
		<h2>{{ item.header }}</h2>
		<swiper
			:slides-per-view="1"
			:space-between="50"
			navigation
			:modules="modules"
			:pagination="{ clickable: true }"
		>
			<swiper-slide v-for="(slide, index) in item.slides" :key="index">
				<MainSlide :title="slide.name" />
			</swiper-slide>
		</swiper>
	</template>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper';
import MainSlide from 'components/MainSlide.vue';

import type { ImainSlidersData } from 'src/types/slider';

const modules = [Navigation, Pagination];
defineProps<{ mainSlidersData: ImainSlidersData[] }>();
</script>
