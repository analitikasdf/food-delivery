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
					<q-tab name="mails" icon="mail" label="Mails" />
					<q-tab name="alarms" icon="alarm" label="Alarms" />
					<q-tab name="movies" icon="movie" label="Movies" />
					<q-tab name="movies2" icon="movie" label="Movies" />
				</q-tabs>
			</q-toolbar>
		</q-footer>
	</q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref<string>('mails');
</script>
