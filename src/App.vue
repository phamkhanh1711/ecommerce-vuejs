<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
<script>

import MainHeader from "@/components/Header/MainHeader.vue";

const defaultLayout = {
  name: 'DefaultLayout',
  components: {
    MainHeader
  }
}
export default {
  name: 'App',
  components: {
    MainHeader
  },
  computed: {
    layout() {
      return this.$router.currentRoute.value.meta.layout || defaultLayout
    }
  },
}
</script>

<style>

</style>
