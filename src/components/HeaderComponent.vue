<script setup>
import { useUserStore } from '@/stores/user.store'
const userStore = useUserStore()
</script>


<template>
   <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            :prepend-avatar="userStore.userImg"
            :title="userStore.userName"
            :subtitle="userStore.userEmail"
            :to="{name:'profile'}"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" :to="{name: 'home'}"></v-list-item>
          <v-list-item prepend-icon="mdi-tooltip-account" title="Todas las Obras" value="items" :to="{name: 'items'}"></v-list-item>
          <v-list-item prepend-icon="mdi-account-circle" title="Artistas" value="arthors" :to="{name: 'authors'}"></v-list-item>
          <v-list-item prepend-icon="mdi-publish" title="Publicar" value="publish" :to="{name: 'publish'}"></v-list-item>
          <v-list-item v-if="!userStore.isUserLogged"  prepend-icon="mdi-star" title="Login" value="login" :to="{name: 'login'}"></v-list-item>
          <v-list-item v-else prepend-icon="mdi-star" title="Logout" value="logout" :to="{name: 'logout'}"></v-list-item>
          <v-list-item prepend-icon="mdi-cart" title="Carrito de la compra" value="cart"></v-list-item>
        </v-list>
      </v-navigation-drawer>

  </template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>