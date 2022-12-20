<script setup>
import { useUserStore } from '@/stores/user.store'
import { useCartStore } from '@/stores/cart.store'
const userStore = useUserStore()
const cartStore = useCartStore()

</script>


<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item :prepend-avatar="userStore.userImg" :title="userStore.userName" :subtitle="userStore.userEmail"
        :to="{ name: 'profile' }"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="home" :to="{ name: 'home' }"></v-list-item>
      <v-list-item prepend-icon="mdi-tooltip-account" title="Todas las Obras" value="items"
        :to="{ name: 'items' }"></v-list-item>
      <v-list-item prepend-icon="mdi-account-circle" title="Artistas" value="arthors"
        :to="{ name: 'authors' }"></v-list-item>
      <v-list-item prepend-icon="mdi-publish" title="Publicar" value="publish" :to="{ name: 'publish' }"></v-list-item>
      <v-list-item v-if="!userStore.isUserLogged" prepend-icon="mdi-star" title="Acceder/Registrarse" value="login"
        :to="{ name: 'login' }"></v-list-item>
      <v-list-item v-else prepend-icon="mdi-star" title="Logout" value="logout" :to="{ name: 'logout' }"></v-list-item>
      <v-list-item  value="cart" :to="{name:'cart'}">
        <v-badge :content="cartStore.purchasedItems.length" inline color="success"><v-icon>mdi-cart</v-icon></v-badge>
      </v-list-item>
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
    group() {
      this.drawer = false
    },
  },
}
</script>