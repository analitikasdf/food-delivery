<template>
	<q-page class="row items-center justify-evenly">
		<MainSliders :main-sliders-data="mainSlidersData" />
	</q-page>
</template>

<script setup lang="ts">
import MainSliders from 'src/components/MainSliders.vue';

import type { ImainSlidersData } from 'src/types/slider';

const mainSlidersData = <ImainSlidersData[]>[
	{
		header: 'Header 1',
		slides: [
			{ name: 'dishName 1', imgUrl: '' },
			{ name: 'dishName 2', imgUrl: '' },
			{ name: 'dishName 3', imgUrl: '' }
		]
	},
	{
		header: 'Header 2',
		slides: [
			{ name: 'dishName 1', imgUrl: '' },
			{ name: 'dishName 2', imgUrl: '' },
			{ name: 'dishName 3', imgUrl: '' }
		]
	},
	{
		header: 'Header 3',
		slides: [
			{ name: 'dishName 1', imgUrl: '' },
			{ name: 'dishName 2', imgUrl: '' },
			{ name: 'dishName 3', imgUrl: '' }
		]
	}
];
</script>
