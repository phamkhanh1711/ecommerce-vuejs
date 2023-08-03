<template>
  <router-link :to=url class="text-center flex flex-col items-center gap-4 group">
    <div class="text-gray-700">
      <slot/>
    </div>
    <p class="group-hover:underline">{{ title }}</p>
  </router-link>
</template>
<script>
export default {
  name: "SocialLink",
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  }
};
</script>
