<script setup lang="ts">

  import {useStore} from "~/store";

  definePageMeta({
    layout: "auth"
  });

  const { countries } = useStore()
  const states = ref([])
  const institutions = ref([
    {
      text: 'High School',
      value:  'high-school',
    },
    {
      text: 'Higher Institution',
      value: 'higher-institution',
    },
    {
      text: 'Other',
      value: 'other',
    },
  ])
  const statuses = ref([
    {
      text: 'Student',
      value:  'student',
    },
    {
      text: 'Alumnus/Alumna',
      value: 'alumnus-alumna',
    },
    {
      text: 'Other',
      value: 'other',
    },
  ])
  const formStuff = reactive({
    name: "",
    type: "higher-institution",
    country: "",
    state: "",
    status: "student",
    course: "",
  })
  const setState = (e: any) =>{
    console.log('state', e)
    let coun = countries?.find(country => {
     return  country.name === e
    })
    states.value = coun?.states || []
  }
</script>

<template>
  <div>
    <form action="#" method="POST" class="space-y-6">
        <div>
          <v-text-field
              label="What is the name of your school?"
              placeholder="Example: John Hopkins University"
              variant="solo"
              hint="Tell us the name of the school you attended or are currently attending. You have the option to add more schools below."
              v-model="formStuff.name"
          />
        </div>
        <div class="mt-2">
          <h3 class="text-sec font-semibold mb-2">What type of institution is it?</h3>
          <v-radio-group inline v-model="formStuff.type">
            <v-radio v-for="(type, i) in institutions" :label="type.text" :value="type.value" :key="i" />
          </v-radio-group>
        </div>
        <div class="mt-2">
          <v-text-field
              label="What do/did you study at the school?"
              placeholder="Example: Electrical Engineering"
              variant="solo"
              v-model="formStuff.course"
          />
        </div>
        <div class="mt-2">
          <v-autocomplete
              label="Country"
              class="w-100"
              :items="countries"
              variant="solo"
              v-model="formStuff.country"
              @update:modelValue="setState"
              item-title="name"
              item-value="name"
          />
        </div>
        <div class="mt-2">
          <v-autocomplete
              label="State"
              class="w-100"
              :items="states"
              variant="solo"
              v-model="formStuff.state"
              item-title="name"
              item-value="name"
          />
        </div>
        <div class="mt-2">
          <h3 class="text-sec font-semibold mb-2">What is your status in reference to the school?</h3>
          <v-radio-group inline v-model="formStuff.status">
            <v-radio v-for="(status, i) in statuses" :label="status.text" :value="status.value" :key="i" />
          </v-radio-group>
        </div>

      <div>
        <button @click="$router.push('/auth/register/bio-info')" class="btn-gradient">NEXT</button>
      </div>
    </form>

    <div class="flex mt-5 items-center justify-end">
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