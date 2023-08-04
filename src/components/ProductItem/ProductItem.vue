<script setup>
import {useToast} from "vue-toastification";

const toast = useToast()

const addToCart = () => {
  toast.success('Add to cart success')
}
</script>

<template>
  <router-link v-bind:to="'/product/'+id">
    <div class="w-full">
      <v-img
          src="https://asset-us-store.msi.com/image/cache/catalog/Pd_page/Laptops/2022/PRESTIGE14EVO/CARBONGRAY/PRESTIGE14EVOGREY-1-160x160.png"
          width="50%" class="m-auto"/>
    </div>
    <v-divider class="border-opacity-100"/>
    <p class="p-2 font-bold">
      <router-link v-bind:to="'/product/'+id">Prestige 14Evo A12M-081 14" FHD Ultra Thin</router-link>
    </p>
    <v-divider class="border-opacity-100"/>
    <ul class="list-disc pl-6 text-sm">
      <li>Windows 11 Home
        (MSI recommends Windows 11 Pro for business.)
      </li>
      <li>Intel® Core™ i5-1240P 1.2GHz</li>
      <li>14" FHD, 60hz IPS level 100% sRGB</li>
      <li>Intel® Iris® Xe graphics</li>
    </ul>
    <div class="w-full">
      <div class="w-fit ml-auto text-right flex items-end gap-2">
        <div class="old-price">
          <span class="text-gray-500 line-through text-[12px]">$1,099.00</span>
        </div>
        <div class="new-price flex flex-col">
          <span class="text-red-500 text-[10px]">Limited Time Offer</span>
          <span class="text-red-500 text-[24px] p-0 font-bold">$999.00</span>
        </div>
      </div>
    </div>
    <v-divider class="border-opacity-100"/>
    <div class="py-4 w-full flex items-center gap-2 justify-end">
      <button class="w-fit bg-white border rounded-xl px-4 hover:opacity-80 transition">Compare</button>
      <button class="w-fit bg-red-500 border border-red-500 rounded-xl text-white px-4 hover:opacity-80 transition"
              @click="addToCart">Add
        to cart
      </button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    id: {
      type: String,
      required: true
    }
  },
};
</script>
