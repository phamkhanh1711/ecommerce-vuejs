<script setup>
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.vue";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon.vue";


</script>
<template>
  <v-carousel hide-delimiters min-height="300px" continuous="false" cycle="true" interval="3500" >
    <template v-slot:prev="{ props }">
      <v-btn
          variant="elevated"
          @click="props.onClick"
      >
        <ArrowLeftIcon/>
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
          variant="elevated"
          @click="props.onClick"
      >
        <ArrowRightIcon/>
      </v-btn>
    </template>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarouselBanner",
  props: {
    items: {
      type: Array,
    }
  }
};
</script>
