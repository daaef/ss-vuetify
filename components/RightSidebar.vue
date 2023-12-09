<template>
	<v-navigation-drawer
		floating
		permanent
		v-model="drawer"
		location="right"
		:width="320">
		<div class="grid gap-3">
			<v-card elevation="2" class="rounded-lg">
				<v-card-item>
					<v-card-title>
						Your Sitadels
						<v-btn
							density="compact"
							variant="text"
							icon="mdi-dots-horizontal"
							color="#1e4f88"></v-btn
					></v-card-title>
				</v-card-item>
				<v-card-item>
					<div class="sitadel-title">
						<v-avatar color="transparent" size="64">
							<v-img src="/nasir.png" alt="Gist Avatar Image" />
						</v-avatar>
						<span class="text-acc text-xl font-bold">@NasirMGC</span>
					</div>
          <a class="sitadel-overview block flex pl-14">
            <v-icon icon="mdi-bell-outline" />
            <span class="ml-2 font-semibold">5 new notifications</span>
          </a>
          <a class="sitadel-overview block mt-3 flex pl-14">
            <v-icon icon="mdi-account-box-multiple-outline" />
            <span class="ml-2 font-semibold">Switch to sitadel</span>
          </a>
				</v-card-item>
			</v-card>
			<v-card elevation="2" class="rounded-lg">
				<v-card-item>
					<v-card-title>
						<span class="font-bold">Ad</span>
						<v-btn
							density="compact"
							variant="text"
							icon="mdi-dots-horizontal"
							color="#1e4f88"></v-btn
					></v-card-title>
				</v-card-item>
				<v-card-item>
          <h3 class="text-center font-bold">Subscribe with N100 airtime only
            and tap into your full potential
            with SityWatch Pro.</h3>
          <div class="flex justify-center my-4">
            <v-img max-width="100" src="/ad-img.png" />
          </div>
          <h4 class="text-center font-semibold">BENEFITS</h4>
          <ul class="text-center grid gap-2">
            <li>Appear on the search list
              of renowned talent scouts. </li>
            <li>Gain access to lucrative
              opportunities tailored to
              your interests & side hustles.</li>
            <li>Network with professionals and
              other enthusiasts who share
              your goals and passions.</li>
            <li>
              <a href="#" class="btn-gradient">FREE 30-DAY TRIAL</a>
            </li>
          </ul>
				</v-card-item>
			</v-card>
		</div>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
	const { isMobileOrTablet } = useDevice();
	const drawer = ref(true);
	const rail = ref(true);
	watchEffect(() => {
		if (isMobileOrTablet) {
			drawer.value = false;
			rail.value = true;
		} else {
			rail.value = false;
		}
	});
	const open = ref;
</script>

<style></style>
