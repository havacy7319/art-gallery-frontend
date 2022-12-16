<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

</script>

<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
  <div>
    <v-app>
    <HeaderComponent />
    
    <h1> OscarArtGallery</h1>
    <RouterView />
    <FooterComponent />
  </v-app>
  </div>
 
</v-parallax>

</template>

<style scoped>
h1 {
  width: 90vw;
  padding: 15px;
  margin: 20px auto;
  border: solid #f0eded 1px;
  border-radius: 5px/5px;
  background-color: hsl(180, 3%, 6%);
  color: #f0eded;
  text-align: center;
}
</style>>




