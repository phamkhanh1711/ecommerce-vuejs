<template>
  <router-link to="/" class="relative group overflow-hidden">
    <v-img :src=src width="100%"
           class="group-hover:scale-125 transition"></v-img>
    <div
        class="w-full bg-white/60 absolute bottom-0 left-0 px-4 py-3 transition-all group-hover:bg-gray-500/80 group-hover:text-white">
      <p class="font-semibold">{{ title }}</p>
      <p>{{ description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RewardCard",
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
  }
};
</script>
