<script setup lang="ts">
const image = ref([])
const profile = ref([])
const onFileChange = (e) => {
  return URL.createObjectURL(e);
}
</script>

<template>
  <div>
    <form class="image-uploader" action="">
      <h3 class="text-sec font-semibold mb-2">Upload backdrop for your look</h3>
      <p class="text-sm mb-5">Using a backdrop for your profile will give it a more authentic and appealing
        look.
      </p>
      <VaFileUpload
          v-model="image"
          v-if="!image.length"
          type="gallery"
          :dropzone="true"
          file-types="image/*"
          uploadButtonText=""
          class="banner-img"
      />
      <img v-else class="banner-img" v-for="(img, i) in image" :key="i" :src="onFileChange(img)" alt=""/>
      <VaFileUpload
          v-model="profile"
          v-if="!profile.length"
          type="gallery"
          :dropzone="true"
          file-types="image/*"
          uploadButtonText=""
          class="profile"
      />
      <img v-else class="profile" v-for="(img, i) in profile" :key="i" :src="onFileChange(img)" alt=""/>

      <div>
        <button @click="$router.push('/auth/register/bio-info')" class="btn-gradient">NEXT</button>
      </div>
    </form>

    <div class="flex mt-5 items-center justify-center">
      <div class="text-sm leading-6">
        <nuxt-link to="/auth/login" class="font-semibold text-sec">
          Already have a look? <span class="font-bold">Login</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>