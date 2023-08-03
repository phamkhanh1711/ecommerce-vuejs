<script setup>
import DiscoverSpotlight from "@/pages/Home/DiscoverSpotlight.vue";
import CarouselBanner from "@/pages/Home/CarouselBanner.vue";
import FocusIcon from "@/components/icons/FocusIcon.vue";
import SocialLink from "@/components/SocialLink/SocialLink.vue";
import HeadphoneIcon from "@/components/icons/HeadphoneIcon.vue";
import FilmIcon from "@/components/icons/FilmIcon.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import SocialMarketingLink from "@/components/SocialMarketingLink/SocialMarketingLink.vue";

const homeBanners = [
  {
    src: 'https://storage-asset.msi.com/us/picture/banner/banner_1689374772cbb9cdf85f853f77220dceb03114bfe6.jpeg'
  },
  {
    src: "https://storage-asset.msi.com/global/picture/banner/banner_168896046904bb5dd313a82176bd0de58bcbc09879.jpeg"
  },
  {
    src: "https://storage-asset.msi.com/global/picture/banner/banner_1688715177b85ec7d33e6d00701cad0ad8a35a298f.jpeg"
  }
]
</script>
<template>
  <CarouselBanner :items="homeBanners"/>
  <div class="bg-gray-700 flex items-center justify-center py-10 text-white">
    <div class="flex items-center gap-4 px-10 lg:px-0">
      <p>Announcement</p>
      <v-divider vertical></v-divider>
      <p>
        MSI has got you covered 24/7 for our toll free number at 1-888-447-6564 with Product line of Notebooks,
        Desktops, & Monitors. (Closed for public holiday)
      </p>
    </div>
  </div>
  <DiscoverSpotlight/>
  <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-10">
    <SocialLink title="Product Registration" url="/">
      <FocusIcon/>
    </SocialLink>
    <SocialLink title="Support" url="/">
      <HeadphoneIcon/>
    </SocialLink>
    <SocialLink title="Video" url="/">
      <FilmIcon/>
    </SocialLink>
    <SocialLink title="MSI Forum" url="/">
      <MessageIcon/>
    </SocialLink>
  </div>
  <div class="p-10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
    <SocialMarketingLink src="https://storage-asset.msi.com/frontend/imgs/reward2.webp" title="MSI Reward Program"
                         description="Start Earning Point And Get Cool Stuff!"/>
    <SocialMarketingLink src="https://storage-asset.msi.com/frontend/imgs/insider.webp" title="MSI Insider"
                         description="Wednesdays at 8AM PST/16:00 CET"/>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
