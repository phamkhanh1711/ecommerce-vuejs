<script setup>
import ProductItem from "@/components/ProductItem/ProductItem.vue";

const categories = [
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/NBPHC.png',
    title: 'Laptops'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/DTPHC.png',
    title: 'Desktops'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/Monitor.png',
    title: 'Monitors'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/VGAPHC.png',
    title: 'Graphics Cards'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/MBPHC.png',
    title: 'Motherboards'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/Game-Gear.png',
    title: 'Gaming Gears'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/PCC4.png',
    title: 'PC Components'
  },
  {
    src: 'https://asset-us-store.msi.com/image/catalog/hpc/casephc.png',
    title: 'Chassis'
  },
]
const storeBanners = [
  {
    src: 'https://asset-us-store.msi.com/image/cache/catalog/promotion/2023/BTS2023/Back-to-School-3600x1260-3600x1260.jpg'
  },
  {
    src: "https://asset-us-store.msi.com/image/cache/catalog/promotion/2023/BNP/BnP-DualScreenDiscount_3600x1260-3600x1260.jpg"
  },
  {
    src: "https://asset-us-store.msi.com/image/cache/catalog/promotion/2023/SUMMERDEALS/SUMMER3600x1260-3600x1260.jpg"
  },
  {
    src: "https://asset-us-store.msi.com/image/cache/catalog/banner/Home%20Page%20Rotate/2023/79e1d942_GeForce_RTX_4060_3600x1260-3600x1260.jpg"
  },
  {
    src: "https://asset-us-store.msi.com/image/cache/catalog/promotion/2023/MBCOOLER/Chill-and-Conquer_3600x1260-3600x1260.jpg"
  },
  {
    src: "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/Monitor/2023/MD271UL/us-store_MD271UL_Edits_3600x1260-3600x1260.jpg"
  }
]
</script>

<template>
  <div>
    <CarouselBanner :items="storeBanners"/>
    <div class="container mx-auto py-10">
      <h2 class="text-2xl font-bold mb-10 flex items-center uppercase justify-center gap-2">
        <span>explore</span>
        <span class="text-gray-500">products</span>
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-20 px-10">
        <CategoryItem v-for="item in categories" :src="item.src" :title="item.title"/>
      </div>
    </div>
    <div class="banner">
      <v-img src="https://asset-us-store.msi.com/image/cache/catalog/banner/CategoryBanner/GGD/gh40audio-1920x300.png"
             width="100%" cover/>
    </div>
    <div
        class="product-list container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 py-20 px-10">
      <ProductItem v-for="item in [1,2,3,4,5,6,7,8]"/>
    </div>
    <div class="banner">
      <v-img src="https://asset-us-store.msi.com/image/catalog/banner/CategoryBanner/NETWORK/routerbanner1920x300.png"
             width="100%" cover/>
    </div>
  </div>
</template>

<script>
import CarouselBanner from "@/pages/Home/CarouselBanner.vue";
import CategoryItem from "@/components/CategoryItem/CategoryItem.vue";

export default {
  name: "Store",
  components: {CategoryItem, CarouselBanner},
};
</script>
