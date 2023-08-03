<script setup>
import {ref} from "vue";

const navItems = [
  {
    title: 'Store',
    value: '/store',
  },
  {
    title: 'Products',
    value: 'products',
  },
  {
    title: 'AIoT Solutions',
    value: 'aiot-solutions',
  },
  {
    title: 'What\'s New',
    value: 'whats-new',
  },
  {
    title: 'Community',
    value: 'community',
  },
  {
    title: 'MSI for Business',
    value: 'msi-for-business',
  },
  {
    title: 'Service',
    value: 'service',
  }
]


</script>

<template>
  <v-layout>
    <div class="LayoutDefault w-screen">
      <MainHeader @drawerClick="drawerClickSet"/>
      <main>
        <slot/>
      </main>
      <MainFooter/>
    </div>
    <div class="block lg:hidden">
      <v-navigation-drawer
          v-model="drawer"
          location="left"
      >
        <div class="p-4">
          <div class="flex items-center justify-space-between h-[80px]">
            <v-img src="https://storage-asset.msi.com/frontend/imgs/logo.png"/>
          </div>
          <v-list
              :items="navItems"
          ></v-list>
        </div>
      </v-navigation-drawer>
    </div>
  </v-layout>
</template>

<script>
import MainHeader from "@/components/Header/MainHeader.vue";
import MainFooter from "@/components/Footer/MainFooter.vue";
import {ref} from "vue";

const drawer = ref(false)

export default {
  name: "LayoutDefault",
  components: {
    MainHeader,
    MainFooter,
  },
  methods: {
    drawerClickSet() {
      drawer.value = !drawer.value
    },
  },
};
</script>
