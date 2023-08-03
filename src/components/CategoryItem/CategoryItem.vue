<template>
  <router-link to="/" class="flex flex-col items-center justify-center gap-2">
    <v-img :src=src width="100px"/>
    <p>{{ title }}</p>
  </router-link>
</template>
<script>
export default {
  name: "CategoryItem",
  props: {
    src: {
      type: String,
      default: "https://asset-us-store.msi.com/image/catalog/hpc/NBPHC.png",
    },
    title: {
      type: String,
      default: "Laptops",
    },
  }
};
</script>
