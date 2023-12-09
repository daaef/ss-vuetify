<template>
      <v-card class="affair" link :to="`/sitadels/${id}`">
        <v-img
            :src="`/${image}`"
            height="200px"
            cover=""
        ></v-img>

        <v-card-title class="font-bold">
          {{ title }}
        </v-card-title>

        <v-card-subtitle class="text-sec">
          <span class="sub-small">TRY</span>#{{ handle }}
        </v-card-subtitle>
        <div class="mt-4">
          <span v-if="price">
            <span class="font-bold">{{ price }}</span> <span>Cash Prize</span>
          </span>
          <span v-if="extraPrize"> and {{ extraPrize }}</span>
        </div>
        <p>Entry Deadline: {{ deadline }}</p>
      </v-card>
</template>

<script lang="ts" setup>
defineProps({
  id: Number,
  image: String,
  title: String,
  handle: String,
  price: String,
  extraPrize: String,
  deadline: String,
});
  const show = ref(false)
</script>

<style lang="scss">

</style>
