<template>
      <v-card class="affair" link :to="`/sitadels/${id}`">
        <v-img
            :src="`/${image}`"
            height="200px"
            cover=""
        ></v-img>

        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-subtitle class="text-sec">
          <span class="sub-small">EVT</span>{{ handle }}
        </v-card-subtitle>
        <p>{{ date }}</p>
        <p>{{ address }}</p>
      </v-card>
</template>

<script lang="ts" setup>
defineProps({
  id: Number,
  image: String,
  title: String,
  handle: String,
  address: String,
  date: String,
});
  const show = ref(false)
</script>

<style lang="scss"></style>
