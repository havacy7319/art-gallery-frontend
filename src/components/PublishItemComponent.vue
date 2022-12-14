<script setup>
import { reactive } from "@vue/reactivity";
import { publish } from "@/services/items.service"
import { useUserStore } from '@/stores/user.store'


const userStore = useUserStore()

  const state = reactive({
    price: 0,
    title: "",
    description: "",
    
    author: userStore.userLogged._id,

  })
  async function doPublish(){
    await publish({ price: state.price, title: state.title, description: state.description, author:state.author })
  }

</script>


<template>
    <v-container>
        <v-row>
          <v-col>
            <v-text-field label="Titulo" v-model="state.title"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Precio" v-model.number="state.price" suffix="€"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Descripción" v-model="state.description" ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="doPublish">Publicar</v-btn>
          </v-col>
        </v-row>
       
    </v-container>
</template>