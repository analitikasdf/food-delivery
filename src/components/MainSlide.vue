<template>
	<div class="w-auto h-56 flex items-center justify-center bg-gray-700">
		<h2 class="text-white text-2xl">{{ title }}</h2>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
}

defineProps<Props>();
</script>
