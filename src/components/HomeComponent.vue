<script setup>
import ItemsView from '../views/ItemsView.vue';
import { getAllItems } from '@/services/items.service'
import ItemListComponent from '../components/ItemListComponent.vue';
import { reactive } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';

const state = reactive({
  allItems: []
})

onBeforeMount(async () => {
  const items = await getAllItems()
  state.allItems = items
})

</script>



<template>


  <div>
    <v-carousel :show-arrows="true">
      <v-carousel-item v-for="(item, i) in state.allItems" :key="i"
        :src="item.img ? item.img : 'https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg'"
        cover></v-carousel-item>
    </v-carousel>
  </div>

  <div class="bg-orange d-flex w-100 align-center px-4">
    <v-btn color="#FFC400" outline block :to="{ name: 'authors' }">Ver todos los Artistas
      <v-icon icon='mdi-ArrowDecisionAutoOutline'></v-icon>
    </v-btn>
  </div>



  <ItemListComponent v-if="state.allItems.length" :items="state.allItems" />
  <div class="bg-orange d-flex w-100 align-center px-4">
    <v-btn color="#FFC400" outline block :to="{ name: 'items' }">Explorar todas las Obras</v-btn>

  </div>

  <div>
    <v-timeline>
      <v-timeline-item dot-color="purple-lighten-2" fill-dot>
        <v-card>
          <v-card-title class="bg-purple-lighten-2">
            <v-text>20 Diciembre 2022</v-text>
            <h2 class="font-weight-light">
              Art & Wine : Paint like Picasso
            </h2>
          </v-card-title>
          <v-card-text>
            Las reglas del juego son simples. Todos tiran los dados por turnos para averiguar qué forma tendrá tu cara.
            Después de un pequeño entrenamiento sobre el papel con los preciosos consejos técnicos de nuestra experta
            Emma, ​​pasamos a la acción sobre el lienzo.Te vas con tu trabajo y con una experiencia que quedará grabada
            en tu memoria

          </v-card-text>
          <v-btn
            href=" https://www.eventbrite.es/e/entradas-art-wine-paint-like-picasso-483784551617?aff=ebdssbcategorybrowse"
            target="_blank" color="orange-lighten-2" variant="text">
            <strong>Ir </strong>
          </v-btn>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
        <v-card>
          <v-card-title class="bg-amber-lighten-1 justify-end">
            <v-text>21 Diciembre 2023</v-text>
            <h2 class="mr-4 font-weight-light">
              TRANSITIONS
            </h2>
          </v-card-title>
          <v-card-text>
            2B Art Gallery cierra el año con otra gran exposición de Arte Urbano. La exposición colectiva "TRANSICIONES"
            reúne las obras de 17 artistas nacionales e internacionales en un mismo escenario, un espacio único que une
            la
            distancia entre el muro y el muro interior.

          </v-card-text>
          <v-btn
            href=" https://www.eventbrite.es/e/transitions-tickets-484389160017?aff=ebdssbcategorybrowse&keep_tld=1"
            target="_blank" color="orange-lighten-2" variant="text">
            <strong>Ir </strong>
          </v-btn>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="cyan-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="bg-cyan-lighten-1">
            <v-text>30 Diciembre 2022</v-text>
            <h2 class="font-weight-light">
              VERMUTART: PINTURA Y VERMUT
            </h2>
          </v-card-title>
          <v-card-text>
            Arte y vermut se encuentran en un maridaje prefecto: pinta tu proprio cuadro
            mientras disfrutas de los deliciosos vermuts de Las Vermudas acompañados con pica pica.
            Libera tu creatividad, conoce nuevos amigos, brinda con el mejor vermut: vive una experiencia extraordinaria
            y ¡Llévate a casa tu propio cuadro!

          </v-card-text>
          <v-btn
            href="https://www.eventbrite.es/e/entradas-vermutart-pintura-y-vermut-475143375627?aff=ebdssbcategorybrowse"
            target="_blank" color="orange-lighten-2" variant="text">
            <strong>Ir </strong>
          </v-btn>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="red-lighten-1" fill-dot size="x-small">
        <v-card>
          <v-card-title class="bg-red-lighten-1 justify-end">
            <v-text>20 Enero 2023</v-text>
            <h2 class="mr-4 font-weight-light">
              Inauguración de la artista Nathalie Liger
            </h2>
          </v-card-title>
          <v-card-text>
            El hotel Eurostars Monumental 4* de Barcelona acoge la exposición de la artista
            francesa Nathalie Liger. Eurostars Hotel Company invita a todos aquellos que, alojados o
            no en el hotel, quieran descubrir a la artista y su obra en la inauguración que tendrá lugar
            el próximo 20 de enero a las 19h.
          </v-card-text>
          <v-btn
            href="https://www.eventbrite.es/e/entradas-inauguracion-de-la-artista-nathalie-liger-en-el-eurostars-monumental-4-489365584637?aff=ebdssbcategorybrowse"
            target="_blank" color="orange-lighten-2" variant="text">
            <strong>Ir</strong>
          </v-btn>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="green-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="bg-green-lighten-1">
            <v-text>Del 18 de Enero al 15 de Marzo 2023 </v-text>
            <h2 class="font-weight-light">
              Pedro Pablo Rubens
            </h2>
          </v-card-title>
          <v-card-text>
            9 conferencias organizadas en colaboración con la Fundación Amigos del Museo del Prado.
          </v-card-text>
          <v-btn href="https://bilbaomuseoa.eus/ciclo-de-conferencias-francisco-calvo-serraller/" target="_blank"
            color="orange-lighten-2" variant="text">
            <strong>Ir</strong>
          </v-btn>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>


</template>




<style scoped>
v-btn {
  align-content: center;
}
</style>