<script setup>
    import ItemListComponent from './ItemListComponent.vue';
    import { useCartStore } from '@/stores/cart.store'
    import { computed } from 'vue';
const cartStore = useCartStore()
const totalPrice = computed(() => {
  let sum = 0
  for(const item of cartStore.purchasedItems){
    sum = sum + item.price
  }
  return sum
})

</script>
<template>
    <!-- <v-list>
        <v-list-item :prepend-avatar="item.img?item.img:'https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg'" v-for="item in cartStore.purchasedItems" :key="item._id" :title="item.title" :subtitle="item.price">

        </v-list-item>
    </v-list> -->
    <h1>Total: {{totalPrice}} €</h1>
    <v-btn @click="cartStore.pay()" color="warning">Pago</v-btn>

    <ItemListComponent :items="cartStore.purchasedItems"></ItemListComponent>
</template>