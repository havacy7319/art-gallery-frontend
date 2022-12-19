<script setup>
import { reactive } from "@vue/reactivity";
import { publish } from "@/services/items.service"
import { useUserStore } from '@/stores/user.store'


const userStore = useUserStore()

const state = reactive({
  price: 0,
  title: "",
  description: "",
  img: "",
  author: userStore.userLogged._id,
  file:"",

})

function readImg(){
  if(state.file){
    const reader = new FileReader()
    reader.readAsDataURL(state.file[0])
    reader.onload = async ()=>{
      if(reader.result){
        state.img = reader.result
        await publish({ price: state.price, title: state.title, description: state.description, author: state.author, img: state.img })
      }
    }
  }
}

async function doPublish() {
  readImg()
  //
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
        <v-text-field label="Precio" v-model.number="state.price" prefix="€"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea label="Descripción" v-model="state.description"></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-file-input v-model="state.file" label="Archivo" variant="filled" prepend-icon="mdi-camera"></v-file-input>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col>
        <v-btn color="black" @click="doPublish">Publicar</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>