<template>
	<v-navigation-drawer floating permanent v-model="drawer" :rail="rail">
		<v-list class="side-navigation" nav density="compact">
			<a class="btn-gradient" href="#" :class="{ 'remove-margin': rail }">
				<span v-if="rail">
					<v-icon color="white" icon="mdi-message-outline" />
				</span>
				<span v-else>Drop a Gist</span></a
			>

			<v-list-item
				v-for="(item, i) in items"
				link
				:to="item?.href"
				:key="i"
				:value="item"
				active-class="active">
				<template v-slot:prepend>
					<v-icon :icon="item.icon"></v-icon>
				</template>
				<v-tooltip v-if="rail" activator="parent" location="start">
					{{ item.text }}
				</v-tooltip>
				<v-list-item-title>{{ item.text }}</v-list-item-title>
			</v-list-item>
		</v-list>
		<template v-slot:append>
			<v-list>
				<v-list-item>
					<template v-slot:append>
						<v-btn
							color="#1e4f88"
							variant="text"
							:icon="`${rail ? 'mdi-chevron-right' : 'mdi-chevron-left'}`"
							@click.stop="rail = !rail"></v-btn>
					</template>
				</v-list-item>
			</v-list>
		</template>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
	const { isMobileOrTablet } = useDevice();
	const drawer = ref(true);
	const rail = ref(true);
	watchEffect(() => {
		if (isMobileOrTablet) {
			rail.value = true;
		} else {
			rail.value = false;
		}
	});
	const items = ref([
		{ text: "Home", icon: "mdi-home-outline", href: "/" },
		{ text: "Sitadels", icon: "mdi-castle", href: "/sitadels" },
		{ text: "Notifications", icon: "mdi-bell-outline", href: "/notifications" },
		{ text: "Messages", icon: "mdi-forum-outline", href: "/messages" },
		{ text: "Explore", icon: "mdi-compass-outline", href: "/explore" },
		{
			text: "Bookmarks",
			icon: "mdi-bookmark-multiple-outline",
			href: "/bookmarks",
		},
	]);
	const route = useRoute();
</script>

<style></style>
