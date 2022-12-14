<script setup>
import ItemsView from '../views/ItemsView.vue';
import { getAllItems } from '@/services/items.service'
import ItemListComponent from '../components/ItemListComponent.vue';
import { reactive } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';

const state = reactive({
    allItems: []
})

onBeforeMount(async() => {
    const items = await getAllItems()
    state.allItems = items
})
</script>

<template>

  <div>
    <v-carousel  :show-arrows="false">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
  </div>
  <div class="bg-teal d-flex w-100 align-center px-4">
    <v-btn color="secondary" outline block>Explorar Obras a la Venta</v-btn>
  </div>

  <ItemListComponent v-if="state.allItems.length" :items="state.allItems"/>
  <div  class="bg-teal d-flex w-100 align-center px-4">
    <v-btn color="secondary" outline block>Ver todos los Artistas</v-btn>
   
  </div>

 

</template>



<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
  v-btn {
    align-content: center;
  }
</style>