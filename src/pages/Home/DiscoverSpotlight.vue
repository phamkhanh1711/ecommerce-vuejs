<template>
  <div class="text-center py-10">
    <p class="text-4xl font-bold">Discover the Latest MSI Innovations</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      <SpotlightCard v-for="(item,i) in spotlightCards" :key="i" :src="item.src" :title="item.title"
                     :description="item.description"/>
    </div>
  </div>
</template>
<script setup>
import SpotlightCard from "@/components/SportlightCart/SpotlightCard.vue";

const spotlightCards = [
  {
    src: 'https://storage-asset.msi.com/global/picture/banner/banner_168126246157f5c054a0ec238caa0c26a84a494cc9.jpeg',
    title: 'Raider GE78 HX 13V',
    description: 'The First Choice for Professionals'
  },
  {
    src: 'https://storage-asset.msi.com/global/picture/banner/banner_16813694699c8eb8cd6214f328802f4a72b1a6b86d.jpeg',
    title: 'MEG Ai1300P PCIE5',
    description: 'MEG Ai1300P PCIE5'
  },
  {
    src: 'https://storage-asset.msi.com/global/picture/banner/banner_1684233322abc5bdd0ba4ed564bdaba6845444b01b.jpeg',
    title: 'GeForce RTX™ 40 GAMING Series',
    description: 'Play Hard Stay Silent'
  },
  {
    src: 'https://storage-asset.msi.com/us/picture/banner/banner_1688761739f7fa0b4717bea3ad2cd1a59c943760ee.jpeg',
    title: 'Aegis RS 13th',
    description: 'Game Beyond Your Limits'
  },
  {
    src: 'https://storage-asset.msi.com/global/picture/banner/banner_16856861361d272a9be0941a1df1b3e0fe816feebf.jpeg',
    title: 'MEG 342C QD-OLED',
    description: 'Brilliance Made Possible'
  },
  {
    src: 'https://storage-asset.msi.com/global/picture/banner/banner_16812626386abcae9844b578dd5f873cdba91cdf8e.jpeg',
    title: 'MEG Z790 ACE',
    description: 'Lustrous Aesthetics, Pure Performance'
  },
]
</script>
