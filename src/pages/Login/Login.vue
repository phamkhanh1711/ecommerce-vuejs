<script setup>
import {ref} from "vue";

const remember = ref(false);
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="p-10 rounded-xl shadow-xl border w-[80%] md:w-[45%] lg:w-[27%]">
      <h1 class="text-2xl font-bold mb-4">MSI</h1>
      <p class="mb-4">Login to your account</p>
      <form class="flex flex-col gap-4">
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
        <label class="flex items-center gap-2">
          <input type="checkbox" class="border rounded accent-black" v-model="remember">
          <span>Remember me</span>
        </label>
        <v-btn class="bg-black">Login</v-btn>
      </form>
      <div class="mt-10">
        <p class="text-center">Don't have an account?
          <router-link to="/register" class="text-blue-500">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    remember: false,
  }),
};
</script>
