<template>
  <router-link to="/">
    <v-card class="spotlight-card shadow-xl group">
      <v-img :src="src" width="100%" class="group-hover:scale-105 transition-all"></v-img>
      <div class="py-6">
        <v-card-title>
          <p>{{ title }}</p>
        </v-card-title>
        <v-card-subtitle>
          <p>{{ description }}</p>
        </v-card-subtitle>
      </div>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
  },
  name: "SpotlightCard",
};
</script>

<style scoped>
@import "SpotlightCard.scss";
</style>
