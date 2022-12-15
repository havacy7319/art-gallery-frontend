<script setup>
const props = defineProps(['items'])

</script>

<template>
  <div>
    <v-row>
      <v-col align="center">
        <h2>{{ items.length }} obras</h2>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col v-for="(item, idx) in items" :key="items.title" class="d-flex child-flex" cols="3">
        <v-card class="mx-auto">
          <v-img style="{width: '100px', height:'100px'}" :src="`https://picsum.photos/500/300?image=${idx * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${idx * 5 + 10}`" aspect-ratio="1" cover
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
            Picasso
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

              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

      </v-col>
    </v-row>
  </div>
  <!-- <div >
    <v-card
    v-for="(item, idx) in items"
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
  </div> -->
</template>