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
            prepend-avatar="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            :title="userStore.userName"
            :subtitle="userStore.userEmail"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-tooltip-account" title="Todas las Obras" value=""></v-list-item>
          <v-list-item v-if="!userStore.isUserLogged"  prepend-icon="mdi-account-circle" title="Signup" value="signup" :to="{name: 'signup'}"></v-list-item>
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