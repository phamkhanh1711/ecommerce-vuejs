<template>
  <div>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>

import MainHeader from "@/components/Header/MainHeader.vue";
import MainFooter from "@/components/Footer/MainFooter.vue";

const defaultLayout = {
  name: 'DefaultLayout',
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter
  }
}
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$router.currentRoute.value.meta.layout || defaultLayout
    }
  },
}
</script>

<style>

</style>
