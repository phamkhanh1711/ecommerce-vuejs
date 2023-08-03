<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="p-10 rounded-xl shadow-xl border w-[80%] md:w-[45%] lg:w-[27%]">
      <h1 class="text-2xl font-bold mb-4">MSI</h1>
      <p class="mb-4">Register a new account</p>
      <form class="flex flex-col gap-2">
        <label class="flex flex-col gap-1">
          <v-text-field
              label="Full Name" variant="outlined">
          </v-text-field>
        </label>
        <label class="flex flex-col gap-1">
          <v-text-field
              label="Email" type="email" variant="outlined">
          </v-text-field>
        </label>
        <label class="flex flex-col gap-1">
          <v-text-field
              label="Password" type="password" variant="outlined">
          </v-text-field>
        </label>
        <label class="flex flex-col gap-1 mb-2">
          <v-text-field
              label="Confirm Password" type="password" variant="outlined">
          </v-text-field>
        </label>
        <v-btn class="bg-black">Register</v-btn>
      </form>
      <div class="social-login">

      </div>
      <div class="mt-10">
        <p class="text-center">Already have an account?
          <router-link to="/login" class="text-blue-500">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
