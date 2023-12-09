<script setup lang="ts">
import {useStore} from "~/store";

const { tourneys, eventsToday, eventsAnticipated } = useStore()
</script>

<template>
  <div class="dash-main sitadel-page">
    <div class="sitadels-banner-builder">
      <div class="sit-banner">
        <CCarousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
          <CSlide :key="1">
            <v-img src="/sit-slide-1.png" />
          </CSlide>
          <CSlide :key="2">
            <v-img src="/sit-slide-2.png" />
          </CSlide>
          <CSlide :key="3">
            <v-img src="/sit-slide-3.png" />
          </CSlide>
        </CCarousel>
      </div>
      <div class="sit-builder">
        <v-card link>
          <v-card-item>
            <v-card-title>
              <v-icon icon="mdi-plus-circle-outline" class="icon-gradient"/>
            </v-card-title>
            <div class="flex justify-center">
              <v-btn icon class="mb-2">
                <v-icon class="icon-gradient" icon="mdi-castle"/>
              </v-btn>
            </div>
          </v-card-item>
          <v-card-item>
            <h3 class="text-lg font-bold text-center">Build  a Sitadel</h3>
            <p class="text-center text-sm">Make it easy for people to scout
              your brand, business, organization,
              events, side-hustle, etc</p>
          </v-card-item>
        </v-card>
      </div>
    </div>
    <h3 class="font-semibold text-xl my-6">Suggested Tourneys That Might Interest You</h3>
    <div class="sitadel-suggestions">
      <Tourney
          v-for="(tourney, i) in tourneys"
          :key="i"
          :id="tourney?.id"
          :image="tourney?.image"
          :title="tourney?.title"
          :handle="tourney?.handle"
          :price="tourney?.price"
          :extra-prize="tourney?.extraPrize"
          :deadline="tourney?.deadline"
      />
    </div>
    <h3 class="font-semibold text-xl my-6">Happening Today Near You</h3>
    <div class="sitadel-suggestions">
      <Event
          v-for="(event, i) in eventsToday"
          :key="i"
          :id="event?.id"
          :image="event?.image"
          :title="event?.title"
          :handle="event?.handle"
          :address="event?.address"
          :date="event?.date"
      />
    </div>
    <h3 class="font-semibold text-xl my-6">Most Anticipated Events</h3>
    <div class="sitadel-suggestions">
      <Event
          v-for="(event, i) in eventsAnticipated"
          :key="i"
          :id="event?.id"
          :image="event?.image"
          :title="event?.title"
          :handle="event?.handle"
          :address="event?.address"
          :date="event?.date"
      />
    </div>
  </div>
</template>
<style lang="scss">
.sitadels-banner-builder {
  display: grid;
  grid-template-columns: 1fr 250px;
  height: 250px;
  grid-gap: 15px;
  .sit-banner {
    img {
      height: 250px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
      object-position: top center;
    }
  }
  .sit-builder {
    .v-card {
      border-radius: 15px;
      background: transparent;
      border: solid 1px #1e4f88;
      height: 250px;
      display: grid;
      align-content: center;
    }
  }
}
.sitadel-suggestions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>