<script setup>
import NavbarData from "@/constants/nav-bar";
import UserIcon from "@/components/icons/UserIcon.vue";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import BarIcon from "@/components/icons/BarIcon.vue";

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
      <div class="flex gap-6">
        <router-link to="/login">
          <UserIcon/>
        </router-link>
        <a href="#" class="hidden md:block">
          <LocationIcon/>
        </a>
        <a href="#">
          <SearchIcon/>
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
  methods: {
    drawerClick() {
      this.$emit("drawerClick", true);
    },
  },
};
</script>

<style scoped>
@import "MainHeader.scss";
</style>

