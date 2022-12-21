<template>
	<swiper :slides-per-view="1" :space-between="50" navigation :modules="modules" :pagination="{ clickable: true }">
		<swiper-slide v-for="(slide, index) in slides" :key="index">
			<MainSlideVue :title="slide.title" />
		</swiper-slide>
	</swiper>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper';
import MainSlideVue from './MainSlide.vue';
const modules = [Navigation, Pagination];

const slides: mainSlides[] = [{ title: 'Новинка 1' }, { title: 'Новинка 2' }, { title: 'Новинка 3' }];
//TODO типизация

interface mainSlides {
	title: string;
}

// Import Swiper styles
</script>
