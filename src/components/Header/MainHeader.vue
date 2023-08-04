<script setup>
import NavbarData from "@/constants/nav-bar";
import UserIcon from "@/components/icons/UserIcon.vue";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import BarIcon from "@/components/icons/BarIcon.vue";
import store from "@/store/store";

const Navbar = NavbarData;
</script>

<template>
  <header class="bg-white w-full shadow p-4 lg:p-0 border-b">
    <div class="container mx-auto flex items-center justify-space-between gap-10">
      <div class="block lg:hidden">
        <v-btn variant="text" @click="drawerClick">
          <BarIcon/>
        </v-btn>
      </div>
      <router-link to="/" class="logo">
        <img src="https://storage-asset.msi.com/frontend/imgs/logo.png" alt="" class="w-[100px]">
      </router-link>
      <div class="nav-bar">
        <div v-for="item in Navbar">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </div>
      </div>
      <div class="flex">
        <v-menu open-on-hove>
          <template v-slot:activator="{ props }">
            <button
                v-bind="props"
                class="rounded-full p-2 mx-2"
            >
              <UserIcon/>
            </button>
          </template>
          <v-list v-if="JSON.stringify(store.state.auth.user) !== '{}'">
            <v-list-item>
              <v-list-item-title>
                <router-link to="/profile">{{ store.state.auth.user.email }}</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <button @click="logout">Logout</button>
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-list v-else>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/login">Login</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/register">Register</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <button class="rounded-full p-2 mx-2 hidden md:block">
          <LocationIcon/>
        </button>
        <button class="rounded-full p-2 mx-2"
        >
          <SearchIcon/>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import {useToast} from "vue-toastification";

const toast = useToast();
export default {
  name: "MainHeader",
  methods: {
    drawerClick() {
      this.$emit("drawerClick", true);
    },
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        toast.success("Logout successfully")
      });
    },
  },
  beforeCreate() {
    this.$store.dispatch("auth/checkAuth");
  }
};
</script>

<style scoped>
@import "MainHeader.scss";
</style>

