<script setup>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import store from "@/store/store";
import {useToast} from "vue-toastification";

const remember = ref(false);

const data = reactive({
  email: '',
  password: '',
})

const router = useRouter()
const toast = useToast()
const handleLogin = () => {
  store.dispatch('auth/login', data)
      .then(() => {
        if (remember.value) {
          localStorage.setItem('remember', true)
        }
        toast.success('Login successful')
        router.push('/')
      })
      .catch((err) => {
        toast.error(typeof err.response.data.data !== "object" ? err.response.data.data : err.response.data.data[0]['msg'])
      })
}

</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="p-10 rounded-xl shadow-xl border w-[80%] md:w-[45%] lg:w-[27%]">
      <h1 class="text-2xl font-bold mb-4">MSI</h1>
      <p class="mb-4">Login to your account</p>
      <form class="flex flex-col gap-4">
        <label class="flex flex-col gap-1">
          <v-text-field v-model="data.email"
                        label="Email" type="email" variant="outlined">
          </v-text-field>
        </label>
        <label class="flex flex-col gap-1">
          <v-text-field v-model="data.password"
                        label="Password" type="password" variant="outlined">
          </v-text-field>
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" class="border rounded accent-black" v-model="remember">
          <span>Remember me</span>
        </label>
        <v-btn class="bg-black" @click="handleLogin">Login</v-btn>
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
}
</script>
