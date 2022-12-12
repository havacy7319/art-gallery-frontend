<script setup>
import ItemsView from '../views/ItemsView.vue';
</script>

<template>

  <div>
    <v-carousel  :show-arrows="false">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
  </div>
  <div class="bg-teal d-flex w-100 align-center px-4">
    <v-btn color="secondary">Explorar Obras a la Venta</v-btn>
  </div>

  <div>
      <ItemsView />
  </div>

  <div>
    <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
  </div>

  <div  class="bg-teal d-flex w-100 align-center px-4">
    <v-btn color="secondary">Ver todos los Artistas</v-btn>
    <v-btn color="secondary">Ver todas las Obras</v-btn>
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