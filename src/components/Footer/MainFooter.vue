<script setup>
const communityLink = [
  {
    title: 'MSI Reward Program',
    url: '/'
  },
  {
    title: 'MSI Student Program',
    url: '/'
  },
  {
    title: 'Member Center',
    url: '/'
  },

  {
    title: 'MSI Insider',
    url: '/'
  },
  {
    title: 'Social Media',
    url: '/'
  },
  {
    title: 'Forums',
    url: '/'
  },
  {
    title: 'ESport Teams',
    url: '/'
  },
]
const supportLink = [
  {
    title: 'Downloads',
    url: '/'
  },
  {
    title: 'Product Registration',
    url: '/'
  },
  {
    title: 'Warranty Information',
    url: '/'
  },
  {
    title: 'Online Customer Service',
    url: '/'
  },
  {
    title: 'Service Locations',
    url: '/'
  },
  {
    title: 'Where To Buy',
    url: '/'
  },
  {
    title: 'Remote Service',
    url: '/'
  },
]
const resourceLink = [
  {
    title: 'Press Room',
    url: '/'
  },
  {
    title: 'Awards',
    url: '/'
  },
  {
    title: 'Videos',
    url: '/'
  },
  {
    title: 'RSS',
    url: '/'
  },
  {
    title: 'Customer Stories',
    url: '/'
  },
  {
    title: 'Blogs',
    url: '/'
  },
]
const companyLink = [
  {
    title: 'About MSI',
    url: '/'
  },
  {
    title: 'Brand Story',
    url: '/'
  },
  {
    title: 'Innovation DNA',
    url: '/'
  },
  {
    title: 'CSR',
    url: '/'
  },
  {
    title: 'Investor Information',
    url: '/'
  },
  {
    title: 'Contact Information',
    url: '/'
  },
]
const moreLink = [
  {
    title: 'Brochure',
    url: '/'
  },
  {
    title: 'Wallpaper',
    url: '/'
  },
  {
    title: 'MSI Apps',
    url: '/'
  },
]
const footerLink = [
  {
    title: 'Cookie Policy',
    url: '/'
  },
  {
    title: 'Privacy Policy',
    url: '/'
  },
  {
    title: 'Terms of Use',
    url: '/'
  },
  {
    title: 'Contact Us',
    url: '/'
  },
]
</script>

<template>
  <div class="w-full border-t bg-white">
    <div
        class="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-start justify-center text-gray-600 gap-10 p-10">
      <ul>
        <li class="uppercase mb-4 font-semibold">
          COMMUNITY
        </li>
        <li v-for="(item,i) in communityLink" :key="i">
          <router-link :to="item.url" class="text-gray-700 hover:underline">{{ item.title }}</router-link>
        </li>
      </ul>
      <ul>
        <li class="uppercase mb-4 font-semibold">
          SUPPORT
        </li>
        <li v-for="(item,i) in supportLink" :key="i">
          <router-link :to="item.url" class="text-gray-700 hover:underline">{{ item.title }}</router-link>
        </li>
      </ul>
      <ul>
        <li class="uppercase mb-4 font-semibold">
          RESOURCE
        </li>
        <li v-for="(item,i) in resourceLink" :key="i">
          <router-link :to="item.url" class="text-gray-700 hover:underline">{{ item.title }}</router-link>
        </li>
      </ul>
      <ul>
        <li class="uppercase mb-4 font-semibold">
          Company Information
        </li>
        <li v-for="(item,i) in companyLink" :key="i">
          <router-link :to="item.url" class="text-gray-700 hover:underline">{{ item.title }}</router-link>
        </li>
      </ul>
      <ul>
        <li class="uppercase mb-4 font-semibold">
          MORE
        </li>
        <li v-for="(item,i) in moreLink" :key="i">
          <router-link :to="item.url" class="text-gray-700 hover:underline">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="container mx-auto border-t py-4 mt-10 flex flex-col md:flex-row items-center justify-space-between">
      <div class="flex items-center gap-2">
        <v-img src="https://storage-asset.msi.com/frontend/imgs/logo-footer.png" width="50px"></v-img>
        <p class="text-gray-600 text-sm mt-2">© 2023 Micro-Star Int'l Co.,Ltd. All rights reserved.</p>
      </div>
      <div>
        <ul class="flex items-center gap-4">
          <li v-for="item in footerLink">
            <router-link to="/" class="text-gray-600 text-sm hover:underline">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>
