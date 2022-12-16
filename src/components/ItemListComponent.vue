<script setup>
import ItemComponent from './ItemComponent.vue';
const props = defineProps(['items'])

</script>

<template>
  <div>
    <v-row>
      <v-col align="center">
        <h2>{{ items.length }} Obras</h2>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col v-for="(item) in items" :key="item.title" class="d-flex child-flex" cols="4">
      <ItemComponent :item="item"/>
      </v-col>
    </v-row>
  </div>
 
</template>