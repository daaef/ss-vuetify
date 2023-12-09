<script setup lang="ts">

import {useStore} from "~/store";

definePageMeta({
  layout: "auth"
});

const formStuff = reactive({
  bio: "",
  dob: new Date(1953, 0, 1),
  country: null,
  state: null,
  hustle: "",
  viewDob: true,
  status: "student",
  sex: "male",
  interest: ["one"],
})

const {countries} = useStore()
const states = ref([])

watchEffect(async () => {
  const a = countries.find(country => {
    return country.name === formStuff.country
  }) ?? {}
  states.value = a?.states
})
const institutions = ref([
  {
    text: 'High School',
    value: 'high-school',
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
    value: 'student',
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
const viewOptions = [
  {text: "Yes", value: true},
  {text: "No", value: false}
]
const sexType = ref([
  {text: "Male", value: 'male'},
  {text: "Female", value: 'female'}
])

const interests = ref([
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
])

const deleteChip = (chip: string) => {
  formStuff.interest = formStuff.interest.filter((v) => v !== chip);
}

const closeModal = () => {
  if(startMenu) {
    startMenu.value = false
  }
}

const rules = ref([(v: string | any[]) => v.length <= 200 || 'Max 200 characters'])

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const startMenu = ref(false)

</script>

<template>
  <div>
    <form action="#" method="POST" class="space-y-6">
      <div>
<!--        <va-textarea
            v-model="formStuff.bio"
            class="w-full textarea"
            label='What is the name of your school?'
            placeholder='Example: John Hopkins University'
            messages='In a sentence or two, say something interesting you want people to know about you when they view your profile.'
            name='bio'
            counter
            required-mark
            inner-label
            max-length="200"
        />-->
        <v-textarea
            label="Label"
            v-model="formStuff.bio"
            max-rows="3"
            hint="In a sentence or two, say something interesting you want people to know about you when they view your profile."
            variant="solo"
            placeholder='Example: John Hopkins University'
            name='bio'
            counter="200"
            max="200"
            :rules="rules"
        />
      </div>
      <div class="mt-2">

        <v-text-field
            type="date"
            v-model="formStuff.dob"
            label="Date of Birth"
            variant="solo"
        />
      </div>
      <div class="mt-2">
        <h3 class="text-sec font-semibold mb-2">Do you want people to be able to see your DOB?</h3>
          <v-switch
              v-model="formStuff.viewDob"
              hide-details
              inset
              color="primary"
              :label="`${formStuff.viewDob ? 'Yes' : 'No'}`"
          ></v-switch>
      </div>
      <div class="mt-2">
        <h3 class="text-sec font-semibold mb-2">Gender</h3>
        <v-radio-group inline v-model="formStuff.sex">
          <v-radio v-for="(type, i) in sexType" :label="type.text" :value="type.value" :key="i" />
        </v-radio-group>
      </div>
      <div class="mt-2">
        <v-textarea
            label='What’s your side hustle? (Optional)'
            v-model="formStuff.hustle"
            max-rows="3"
            hint="What do you do on the side to make some extra cash?"
            variant="solo"
            placeholder='Example: John Hopkins University'
            name='bio'
            counter="200"
            max="200"
            :rules="rules"
        />
      </div>
      <div class="mt-2">

        <v-select
            label="Interests"
            class="w-100"
            :items="interests"
            variant="solo"
            v-model="formStuff.interest"
            multiple
            chips
            hint="This will help ScoutSity better match you with Sitadels and the opportunities
they offer"
        />
      </div>
      <div>
        <h3 class="text-sec font-semibold mb-2">Where do you reside?</h3>
        <div class="country-grid">
          <div class="mt-2">
            <v-autocomplete
                label="Country"
                class="w-100"
                :items="countries"
                variant="solo"
                v-model="formStuff.country"
                item-title="name"
                item-value="name"
            />
          </div>
          <div class="mt-2">
<!--            <va-select
                class="w-full"
                placeholder="States"
                label="State"
                :options="states"
                inner-label
                v-model="formStuff.state"
                value-by="name"
                text-by="name"
            />-->
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
        </div>
      </div>
      <div>
        <button @click.prevent="$router.push('/auth/register/bio-info')" class="btn-gradient">NEXT</button>
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