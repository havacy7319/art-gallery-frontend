<script setup>
import { onBeforeMount, reactive } from 'vue';
import { getAllItems } from '@/services/items.service'

const state = reactive({
    allItems: []
})

onBeforeMount(async() => {
    const items = await getAllItems()
    state.allItems = items
})

</script>

<template>
  <div v-if="state.allItems.length > 0">
    <v-card
    v-for="(item, idx) in state.allItems"
    :key="idx"
    class="mx-auto"
    max-width="344"
   >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
     {{item.title}}
    </v-card-title>

    <v-card-subtitle>
        {{item.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
      {{item.price}} €
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

