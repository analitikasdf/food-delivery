<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>
				<q-toolbar-title> Food-Delivery </q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>

		<q-footer elevated>
			<q-toolbar class="justify-center">
				<q-tabs v-model="tab" class="text-white">
					<q-tab name="home" icon="mail" label="Home" />
					<q-tab name="catalog" icon="alarm" label="Catalog" />
					<q-tab name="cart" icon="movie" label="Cart" />
					<q-tab name="user" icon="movie" label="User" />
				</q-tabs>
			</q-toolbar>
		</q-footer>
	</q-layout>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
	toPage(tab);
});

const tab = ref<string>('home');

const router = useRouter();
const toPage = (name: { value: string }): void => {
	router.push({ name: name.value });
};

watch(
	() => tab.value,
	() => {
		toPage(tab);
	}
);
</script>
