<template>
  <v-app>
    <div :class="`grid lg:grid-cols-2 ${route.fullPath.includes('register') ? 'register' : ''} auth-container`">
      <div class="flex flex-1 flex-col justify-center form-container lg:order-2 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="form-main">
          <div class="look-tabs">
            <nuxt-link v-for="(item, index) in navigation" :to="item.href"
                       :class="`look-tab ${route?.fullPath == item.href ? 'active' : ''}`" :key="index">
              <icons :name="item.icon" class-name='look-tab-icon' />
              <div class="look-tab-line"/>
              <h3 class="look-tab-title">{{ item.name }}</h3>
            </nuxt-link>
          </div>
          <div class='flex logo-container justify-center'>
            <nuxt-link to="/auth/login">
              <img src="/favicon.png" class="logo" alt="">
            </nuxt-link>
          </div>
          <div class="mt-10 w-full form-holder">
            <slot/>
            <div class="mt-8">
              <div :class="`${route.fullPath.includes('register') ? 'hidden' : ''}`" class="relative">
                <div class="relative flex justify-center text-sm font-medium leading-6">
                  <span class="px-6 text-gray-900">OR</span>
                </div>
              </div>
              <div :class="`${route.fullPath.includes('register') ? 'hidden' : ''}`" class="mt-6">
                <a
                    href="#"
                    class="btn-gradient outlined"
                >
                  <icons name="google" class-name="google" />
                  <span class="text-sm font-semibold leading-6">Log in with Google</span>
                </a>
              </div>
              <div class="agreement italic mt-5 text-center">
                <p>By creating a look, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative h-screen hidden lg:block">
        <div class="section-header">
          <h2 class="page-title sarina">{{ content?.title }}</h2>
          <h3 class="section-title rakkas">{{ content?.subTitle }}</h3>
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {useStore} from "~/store";
import GoogleIcon from '~/assets/svgs/googleIcon.svg'

const route = useRoute()
const {countries, navigation, pageContent} = useStore()
const content = computed(() => pageContent.find((cont) => route.fullPath == cont.route) || {})
</script>
