<script setup>
import { ref } from "@vue/reactivity"
import { useCartStore } from '@/stores/cart.store'

const cartStore = useCartStore()

const props = defineProps(['item'])
let show = ref(false)

function doPurchase(item) {
  cartStore.purchaseItem(item)
}

</script>

<template>
  <v-card class="mx-auto">
    <v-img :style="{ width: '440px', height: '280px' }" :src="item.img" aspect-ratio="1" cover class="bg-grey-lighten-2">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title>
      {{ item.title }}
    </v-card-title>

    <v-card-subtitle>
      <router-link :to="{ name: 'author', params: { id: item.author._id } }">{{ item.author.name }}</router-link>
    </v-card-subtitle>

    <v-card-actions>
      <!-- <v-btn href="https://buy.stripe.com/test_bIY9DP7Dv7gl2xW288" target="_blank"  color="orange-lighten-2" variant="text"> -->
      <v-btn @click="doPurchase(item)" color="orange-lighten-2" variant="text">
        <v-icon>mdi-cart</v-icon>
        {{ item.price }} €
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div>
        <v-divider></v-divider>

        <v-card-text v-show="show">
          {{ item.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

</template>