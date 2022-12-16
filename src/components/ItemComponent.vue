<script setup>
import { ref } from "@vue/reactivity"

     const props = defineProps(['item'])
     let show = ref(false)
</script>

<template>
      <v-card class="mx-auto">
          <v-img :style="{width: '240px', height:'180px'}" :src="`https://picsum.photos/500/300?image=5`"
            :lazy-src="`https://picsum.photos/10/6?image=5`" aspect-ratio="1" cover
            class="bg-grey-lighten-2">
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
            {{item.author.name}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
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