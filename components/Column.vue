<template>
  <div class="create-gist-wrapper">
    <v-card class="rounded-xl" color="#fafafa" elevation="2">
      <v-card-item>
        <div class="gist-card-header flex justify-start items-center">
          <v-avatar color="transparent" size="84">
            <v-img :src="`/${avatar}`" :alt="`${avatar} avatar Image`" />
          </v-avatar>
          <div class="ml-4">
            <p class="text-acc font-bold text-lg">
              @{{ handle }}
              <img class="inline" src="/crown.png" alt="Crown" />
            </p>
            <span class="block mb-2"
              >{{ school }} . <span>{{ occupation }}</span></span
            >
          </div>
        </div>
        <div class="gist-content mt-2">
          <p class="text-lg font-medium">
            {{ content }}
          </p>
        </div>
      </v-card-item>
      <v-card-item class="no-padding">
        <v-img
          max-height="600"
          v-if="image"
          cover
          class="post-image"
          :src="`/${image}`"
          :alt="`${image} image`"
        />
      </v-card-item>
      <v-card-item class="likes-n-follows">
        <hr />
        <div class="likes-content">
          <div class="flex items-center" v-if="follows">
            <v-img height="30" width="25" src="/hi5.png" alt="hi5 image" />
            <span class="block ml-4 text-sm italic"
              >danJayy and {{ follows - 1 }} sitizens hyped this gist</span
            >
          </div>
          <div class="flex gap-4">
            <div class="" v-if="quotes">
              <v-icon icon="mdi-message-reply-text-outline" color="#1e4f88"></v-icon>
              <span class="ml-1 text-sm text-sec">{{ quotes }}</span>
            </div>
            <div v-if="retweets">
              <v-icon icon="mdi-repeat-variant" color="#1e4f88"></v-icon>
              <span class="ml-1 text-sm text-sec">{{ retweets }}</span>
            </div>
          </div>
        </div>
        <hr />
      </v-card-item>

      <v-card-actions class="flex justify-space-between">
        <div class="gist-action-grid">
          <v-btn
            density="compact"
            variant="text"
            icon="mdi-handshake-outline"
            color="#1e4f88"
          ></v-btn>
          <v-btn
            density="compact"
            variant="text"
            icon="mdi-message-reply-text-outline"
            color="#1e4f88"
          ></v-btn>
          <v-btn
            density="compact"
            variant="text"
            icon="mdi-repeat-variant"
            color="#1e4f88"
          ></v-btn>
        </div>
        <v-btn
          density="compact"
          variant="text"
          icon="mdi-bookmark-outline"
          color="#1e4f88"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  handle: String,
  school: String,
  occupation: String,
  time: String,
  avatar: String,
  image: String,
  content: String,
  follows: Number,
  quotes: Number,
  retweets: Number,
});
</script>

<style lang="scss"></style>
