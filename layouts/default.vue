<template>
  <v-app class="dashboard-wrapper">
    <v-layout>
      <v-app-bar color="white" elevation="0" border="1" density="prominent">
        <template v-slot:prepend>
          <img class="dash-logo" src="/favicon.png" alt="Logo" />
        </template>
        <v-app-bar-title>
          <CCarousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
            <CSlide :key="1">
              <div class="slider-detail">
                <h3>411</h3>
                <v-divider
                    class="ms-3"
                    inset
                    vertical
                    thickness="3"
                ></v-divider>
                <p>
                  <span class="text-acc">#HiFL2023 </span>registration is still ongoing for higher
                  institutions. Registration ends 20th April.
                </p>
              </div>
            </CSlide>
            <CSlide :key="2">
              <div class="slider-detail">
                <h3>411</h3>
                <v-divider
                    class="ms-3"
                    inset
                    vertical
                    thickness="3"
                 />
                <p>
                  Henry Aondoakaa <span class="text-prim">@hendohuncho</span> has been announced as the best player of
                  <span class="text-acc">#NUGAfootball2023</span>
                </p>
              </div>
            </CSlide>
            <CSlide :key="3">
              <div class="slider-detail">
                <h3>411</h3>
                <v-divider
                    class="ms-3"
                    inset
                    vertical
                    thickness="3"
                ></v-divider>
                <p>
                  <span class="text-acc">#SityWatchBeautyPageant2023 </span>has released the list of finalists
                </p>
              </div>
            </CSlide>
          </CCarousel>
        </v-app-bar-title>

        <template v-slot:append>
          <div class="grid grid-cols-3 gap-x-4">
            <v-btn icon density="compact">
              <v-icon size="40">mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="slide-y-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn icon density="compact" v-bind="props">
                    <v-avatar color="transparent" size="44">
                      <v-img src="/nasir.png" alt="Gist Avatar Image" />
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card max-width="320">
                  <v-list density="compact">
                    <v-list-item
                      prepend-avatar="/nasir.png"
                      title="Nasir Gambo"
                      subtitle="View my look"
                      append-icon="mdi-menu-right"
                  >
                  </v-list-item>
                  </v-list>
                    <v-list class="my-sitadels">
                      <v-list-subheader class="font-semibold">Sitadels</v-list-subheader>
                      <v-list-item
                          title="Nasir Monopoly Game Club"
                          subtitle="@NasirMGC"
                          prepend-avatar="/monopoly.png"
                      ></v-list-item>
                      <v-list-item
                          title="Nasir Kingly Touch Photography"
                          subtitle="@NKTPhotography"
                          prepend-avatar="/photography.png"
                      ></v-list-item>
                    </v-list>
                    <v-list class="menu-links">
                      <v-list-item
                          title="Log into another look"
                          prepend-icon="mdi-swap-horizontal"
                      ></v-list-item>
                      <v-list-item
                          title="Create a new look"
                          prepend-icon="mdi-home-plus-outline"
                      ></v-list-item>
                      <v-list-item
                          title="Build a new sitadel"
                          prepend-icon="mdi-home-plus"
                      ></v-list-item>
                    </v-list>
                    <v-list class="setting-links">
                      <v-list-item
                          title="Settings"
                          prepend-icon="mdi-cog-outline"
                      ></v-list-item>
                      <v-list-item
                          title="Help"
                          prepend-icon="mdi-help-circle-outline"
                      ></v-list-item>
                      <v-list-item
                          title="Logout"
                          prepend-icon="mdi-logout"
                      ></v-list-item>
                    </v-list>
              </v-card>
              </v-menu>

            <v-btn icon density="compact">
              <v-icon size="40">mdi-format-list-bulleted</v-icon>
            </v-btn>
          </div>
        </template>
      </v-app-bar>

      <left-sidebar />

      <right-sidebar v-if="!route.fullPath.includes('sitadels')" />

      <v-main class="d-flex justify-center" style="min-height: 300px">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
const menu = ref(false)
const route = useRoute()
</script>
<style lang="scss"></style>