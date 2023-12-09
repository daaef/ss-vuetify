<script setup lang="ts">

import {useStore} from "~/store";

definePageMeta({
  layout: "auth"
});

const { countries, countryCodes } = useStore()
const states = ref([])
const rules = ref({
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
  emailMatch: () => (`The email and password you entered don't match`),
})
const show = ref(false)

const formStuff = reactive({
  country: "",
  state: "",
  code: "234",
  password: '',
})
const setState = (e: any) =>{
  states.value = e?.states
  return e?.name
}
</script>

<template>
  <div>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <v-text-field
            label="What is your name?"
            placeholder="Example: Jon Snow"
            variant="solo"
            hint="Tell us your name. Preferably your first and last name. You can add a middle name if you like."
        />
      </div>
      <div class="mt-2">
        <v-text-field
            label="How should we refer to you on ScoutSity?"
            placeholder="Example: Jon Snow"
            variant="solo"
            hint="This will be your alias, so that other Sitizens can easily cite you. It can be your nickname, a
combination of letters and numbers, or anything you like, Just make it unique to you."
            prefix="@"
        />
      </div>
      <div class="mt-2">
        <v-text-field
            label="Email"
            placeholder="Example: jon@snow.targarian"
            variant="solo"
            hint="This will be your alias, so that other Sitizens can easily cite you. It can be your nickname, a
combination of letters and numbers, or anything you like, Just make it unique to you."
            prepend-inner-icon="mdi-email-outline"
        />
      </div>
      <div class="mt-2">
        <v-text-field
            label="Phone Number"
            placeholder="01 234 567 8910"
            variant="solo"
            hint="This will be your alias, so that other Sitizens can easily cite you. It can be your nickname, a
combination of letters and numbers, or anything you like, Just make it unique to you."
        >
          <template v-slot:prepend>
            <v-autocomplete
                label="Code"
                class="w-100"
                :items="countryCodes"
                variant="solo"
                v-model="formStuff.code"
                item-title="name"
                item-value="phone_code"
            >
              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props" :title="item.raw.phone_code" :subtitle="item.raw.name"></v-list-item>
              </template>
            </v-autocomplete>
          </template>
        </v-text-field>
      </div>
      <div class="mt-2">
        <v-text-field
            :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
            :type="show ? 'text' : 'password'"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="solo"
            label="Password"
            @click:append-inner="show = !show"
            hint="At least 8 characters"
            v-model="formStuff.password"
            :rules="[rules.required, rules.min]"
            counter
        />
      </div>

      <div>
        <button @click="$router.push('/auth/register/school')" class="btn-gradient">NEXT</button>
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