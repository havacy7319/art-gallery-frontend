<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <v-app>
    <HeaderComponent/>
    <H1>OscarArtGallery</H1>
    <RouterView />
    <FooterComponent />
  </v-app>
</template>


