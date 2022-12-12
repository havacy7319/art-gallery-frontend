<script setup>
import { reactive } from "@vue/reactivity";
import { useUserStore } from '@/stores/user.store'


const userStore = useUserStore()
const state = reactive({
  name: userStore.userLogged.name,
  img: userStore.userLogged.img,
  descriptionShort: userStore.userLogged.descriptionShort,
  description: userStore.userLogged.description,
  email: userStore.userLogged.email
})
async function doSave(){
  await userStore.doUpdate({
    name: state.name,
    img: state.img,
    descriptionShort:state.descriptionShort,
    description:state.description,
    email:state.email
  })
}
</script>

<template>
  <v-card class="mx-auto" max-width="434" rounded="0">
    <v-img height="100%" cover src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
      <v-avatar color="grey" size="150" rounded="0">
        <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
      </v-avatar>
      <v-list-item class="text-white" :title="state.name" :subtitle="state.descriptionShort"></v-list-item>
    </v-img>
  </v-card>

  <v-container fluid>

    <v-row>
      <v-col>
        <v-text-field label="Nombre" v-model="state.name"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-file-input label="Tu foto" variant="filled" prepend-icon="mdi-camera"></v-file-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Descripción corta" v-model="state.descriptionShort"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea label="Descripción" v-model="state.description"></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field readonly label="Email" v-model="state.email" suffix="@gmail.com"></v-text-field>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col >
        <v-btn color="secondary" @click="doSave"  >
          Guardar
        </v-btn>
      </v-col>
    </v-row>


  </v-container>

</template>