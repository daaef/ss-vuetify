<script setup lang="ts">
  defineProps({
    name: String,
    className: String
  })
</script>

<template>
  <svg v-if="name === 'bio-info'" :class="className" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
      <stop class="gradient__brand-secondary" offset="0"/>
      <stop class="gradient__brand" offset="100%"/>
    </linearGradient>
    <mask id="mask0_3778_8082" maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="36">
      <rect x="0.5" width="36" height="36" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_3778_8082)">
      <path fill="url(#gradient)" d="M8 31.5C7.175 31.5 6.46875 31.2063 5.88125 30.6188C5.29375 30.0312 5 29.325 5 28.5V7.5C5 6.675 5.29375 5.96875 5.88125 5.38125C6.46875 4.79375 7.175 4.5 8 4.5H24.5L32 12V28.5C32 29.325 31.7063 30.0312 31.1188 30.6188C30.5312 31.2063 29.825 31.5 29 31.5H8ZM8 28.5H29V13.5H23V7.5H8V28.5ZM11 25.5H26V22.5H11V25.5ZM11 13.5H18.5V10.5H11V13.5ZM11 19.5H26V16.5H11V19.5Z" />
    </g>
  </svg>
  <svg v-if="name === 'confirm'" :class="className" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
      <stop class="gradient__brand-secondary" offset="0"/>
      <stop class="gradient__brand" offset="100%"/>
    </linearGradient>
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient1">
      <stop class="gradient__brand-secondary1" offset="0"/>
      <stop class="gradient__brand1" offset="100%"/>
    </linearGradient>
    <mask id="mask0_3778_8106" maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="36">
      <rect x="0.5" width="36" height="36" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_3778_8106)">
      <path fill="url(#gradient)" d="M14.8249 27.0004L6.2749 18.4504L8.4124 16.3129L14.8249 22.7254L28.5874 8.96289L30.7249 11.1004L14.8249 27.0004Z"/>
    </g>
  </svg>
  <svg v-if="name === 'google'" :class="className" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 48" version="1.1" >
    <title>Google</title>
    <desc>Created with Sketch.</desc>
    <defs/>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Social-Icons---Isolated" transform="translate(-389.000000, -727.000000)">
        <g id="Google" transform="translate(389.000000, 727.000000)">
          <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"/>
          <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EA4335"/>
          <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"/>
          <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"/>
        </g>
      </g>
    </g>
  </svg>
  <svg v-if="name === 'image'" :class="className" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
      <stop class="gradient__brand-secondary" offset="0"/>
      <stop class="gradient__brand" offset="100%"/>
    </linearGradient>
    <mask id="mask0_3778_8103" maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="36">
      <rect x="0.5" width="36" height="36" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_3778_8103)">
      <path fill="url(#gradient)" d="M8 31.5C7.175 31.5 6.46875 31.2063 5.88125 30.6188C5.29375 30.0312 5 29.325 5 28.5V7.5C5 6.675 5.29375 5.96875 5.88125 5.38125C6.46875 4.79375 7.175 4.5 8 4.5H29C29.825 4.5 30.5312 4.79375 31.1188 5.38125C31.7063 5.96875 32 6.675 32 7.5V28.5C32 29.325 31.7063 30.0312 31.1188 30.6188C30.5312 31.2063 29.825 31.5 29 31.5H8ZM8 28.5H29V7.5H8V28.5ZM9.5 25.5H27.5L21.875 18L17.375 24L14 19.5L9.5 25.5Z"/>
    </g>
  </svg>
  <svg v-if="name === 'name'" :class="className" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
      <stop class="gradient__brand-secondary" offset="0"/>
      <stop class="gradient__brand" offset="100%"/>
    </linearGradient>
    <mask id="mask0_3778_8067" x="0" y="0" width="37" height="36">
      <rect x="0.5" width="36" height="36" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_3778_8067)">
      <path fill="url(#gradient)" d="M21.6125 17.5875C23.4375 16.2375 24.8625 14.7563 25.8875 13.1438C26.9125 11.5312 27.425 9.925 27.425 8.325C27.425 7.525 27.2938 6.9375 27.0312 6.5625C26.7687 6.1875 26.4125 6 25.9625 6C24.7875 6 23.75 6.99375 22.85 8.98125C21.95 10.9688 21.5 13.2125 21.5 15.7125C21.5 16.0625 21.5063 16.3938 21.5187 16.7062C21.5312 17.0187 21.5625 17.3125 21.6125 17.5875ZM5 31.5V28.5H8V31.5H5ZM11 31.5V28.5H14V31.5H11ZM17 31.5V28.5H20V31.5H17ZM23 31.5V28.5H26V31.5H23ZM29 31.5V28.5H32V31.5H29ZM5.6 25.5L3.5 23.4L5.9 21L3.5 18.6L5.6 16.5L8 18.9L10.4 16.5L12.5 18.6L10.1 21L12.5 23.4L10.4 25.5L8 23.1L5.6 25.5ZM23.675 24C22.925 24 22.2375 23.8563 21.6125 23.5688C20.9875 23.2812 20.45 22.8125 20 22.1625C19.375 22.5125 18.7313 22.825 18.0688 23.1C17.4063 23.375 16.725 23.65 16.025 23.925L14.975 21.1125C15.675 20.8625 16.3438 20.5938 16.9813 20.3063C17.6188 20.0188 18.2375 19.7125 18.8375 19.3875C18.7125 18.8375 18.6188 18.2375 18.5563 17.5875C18.4938 16.9375 18.4625 16.2375 18.4625 15.4875C18.4625 11.8875 19.175 8.90625 20.6 6.54375C22.025 4.18125 23.8125 3 25.9625 3C27.2625 3 28.325 3.48125 29.15 4.44375C29.975 5.40625 30.3875 6.75 30.3875 8.475C30.3875 10.625 29.7062 12.75 28.3438 14.85C26.9813 16.95 25.0875 18.8375 22.6625 20.5125C22.8375 20.6875 23.0187 20.8188 23.2062 20.9062C23.3937 20.9937 23.5875 21.0375 23.7875 21.0375C24.4375 21.0375 25.1938 20.625 26.0563 19.8C26.9188 18.975 27.7 17.8875 28.4 16.5375L31.1375 17.8125C30.9625 18.2375 30.825 18.75 30.725 19.35C30.625 19.95 30.6375 20.475 30.7625 20.925C31.0125 20.8 31.3063 20.5875 31.6438 20.2875C31.9813 19.9875 32.325 19.6125 32.675 19.1625L35.0375 21C34.3875 21.9 33.6375 22.625 32.7875 23.175C31.9375 23.725 31.15 24 30.425 24C29.9 24 29.4313 23.8438 29.0188 23.5312C28.6063 23.2188 28.2625 22.7375 27.9875 22.0875C27.2875 22.7125 26.575 23.1875 25.85 23.5125C25.125 23.8375 24.4 24 23.675 24Z"/>
    </g>
  </svg>
  <svg v-if="name === 'school'" :class="className" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
      <stop class="gradient__brand-secondary" offset="0"/>
      <stop class="gradient__brand" offset="100%"/>
    </linearGradient>
    <mask id="mask0_3778_8071" maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="36">
      <rect x="0.5" width="36" height="36" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_3778_8071)">
      <path fill="url(#gradient)" d="M18.5 31.5L8 25.8V16.8L2 13.5L18.5 4.5L35 13.5V25.5H32V15.15L29 16.8V25.8L18.5 31.5ZM18.5 19.05L28.775 13.5L18.5 7.95L8.225 13.5L18.5 19.05ZM18.5 28.0875L26 24.0375V18.375L18.5 22.5L11 18.375V24.0375L18.5 28.0875Z"/>
    </g>
  </svg>
</template>

<style scoped>

</style>