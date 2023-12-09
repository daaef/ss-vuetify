<script setup lang="ts">
definePageMeta({
  layout: "auth"
});
const formStuff = reactive({
  email: '',
  password: '',
})

const rules = ref({
  required: (value: any) => !!value || 'Required.',
  min: (v: string | any[]) => v.length >= 8 || 'Min 8 characters',
  emailMatch: () => (`The email and password you entered don't match`),
})
const show = ref(false)
</script>

<template>
  <div>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <div>
        <v-text-field
            label="Email"
            placeholder="Example: jon@snow.targarian"
            variant="solo"
            hint="This will be your alias, so that other Sitizens can easily cite you. It can be your nickname, a
combination of letters and numbers, or anything you like, Just make it unique to you."
            prepend-inner-icon="mdi-email-outline"
        />
        </div>
      </div>

      <div>
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
      </div>

      <div class="flex items-center justify-end">
        <div class="text-sm leading-6">
          <a href="#" class="font-semibold text-sec">
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button @click.prevent="$router.push('/')" class="btn-gradient">LOGIN</button>
      </div>
    </form>
    <div class="mt-5 text-center text-sec">
      <nuxt-link to="/auth/register">
        <span>New to ScoutSity?</span>
        <span class="font-semibold">Create new Look</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>