<script setup lang="ts">
    import {useStore} from "~/store";

    const id = useRoute().params.id
    const { affairs } = useStore()
    const tabs = ref([
        {
          name: "Partners",
          icon: "mdi-post-outline",
          id: 5
        },
    ])
    const affair = computed(()=> {

    })
</script>

<template>
  <div class="dash-main affair-page">
    <div class="affair-overview">
      <v-img cover height="220px" width="100%" class="affair-banner" src="/sit-tourney-banner.png" />
      <div class="">

      </div>
    </div>
    <div class="affair-breakdown">
      <div class="tabs tabs-lifted" data-theme="light">
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadels/${id}/`" class="tab">
          <span class="material-symbols-outlined">
          table_rows
          </span>
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadels/${id}/media`" role="tab" class="tab">
          <span class="material-symbols-outlined">
          video_library
          </span>
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadels/${id}/royals`" role="tab" class="tab">
          <v-icon icon="mdi-crown-outline"></v-icon>
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadels/${id}/information`" role="tab" class="tab">
          <v-icon icon="mdi-information-outline"></v-icon>
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadels/${id}/partners`" role="tab" class="tab">
          <v-icon icon="mdi-account-group-outline"></v-icon>
        </nuxt-link>
      </div>
      <div :class="{first: $route.name === 'sitadels-id',last: $route.name === 'sitadels-id-partners'}"
           class="active-tab-content bg-base-100 border-base-300 rounded-box p-6">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .active-tab-content {
    grid-column-start: 1;
    grid-column-end: span 9999;
    grid-row-start: 2;
    margin-top: calc(var(--tab-border) * -1);
    border-color: #e5e6e6;
    border-width: var(--tab-border, 0);
    background: white;
    height: 100%;
    &.first {
      border-top-left-radius: 0;
    }
    &.last {
      border-top-right-radius: 0;
    }
  }
  .tabs-lifted {
    background: transparent !important;
    & > .tab {
      &:first-child {
        border-bottom: solid 0;
      }
      border-color: #e5e6e6;
      color: #1e4f88;

      &.tab-active {
        background: white !important;
        span,  .v-icon{
          color: #1e4f88;
          @supports (background-clip: text) {
            background-image: linear-gradient(45deg, #1e4f88, #f24055 );
            background-clip: text;
            color: transparent;
          }
        }
      }

      &:last-child {
        border-bottom: solid 0;
      }
    }
  }
  .affair-overview {
    .affair-banner {
      border-radius: 15px;
    }
  }
</style>