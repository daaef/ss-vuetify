<template>
	<div class="create-gist-wrapper">
		<v-card class="rounded-xl" color="#fafafa" elevation="2">
			<v-card-item>
				<div class="gist-card-header flex justify-start items-center">
					<v-avatar color="transparent" size="94">
						<v-img src="/nasir.png" alt="Gist Avatar Image" />
					</v-avatar>
					<div class="ml-4">
						<p class="text-acc font-bold mb-2 text-lg">@nasir_gambo</p>
						<!-- label="Visibility" -->
						<v-select
							density="compact"
							:items="['Public', 'Private', 'Draft']"
							variant="solo"
							placeholder="Visibility"></v-select>
					</div>
				</div>
				<div class="main-gist">
					<v-textarea
						label="Create a gist"
						class="mt-4"
						variant="solo"
						rows="2"
						placeholder="Hey Nasir, let people know the latest gist. Add pics, vids, voice-notes, hashtags or cite others if you like" />
				</div>
			</v-card-item>

			<v-card-actions class="flex justify-center">
				<div class="gist-action-grid">
					<v-btn
						density="compact"
						variant="text"
						icon="mdi-camera-plus-outline"
						color="#1e4f88"></v-btn>
					<v-btn
						density="compact"
						variant="text"
						icon="mdi-paperclip"
						color="#1e4f88"></v-btn>
					<v-btn
						density="compact"
						variant="text"
						icon="mdi-microphone-outline"
						color="#1e4f88"></v-btn>
				</div>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
