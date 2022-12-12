<script setup>
import { reactive } from "@vue/reactivity";
import {signUp} from '@/services/user.service'

const state = reactive({
  name: '',
  email:'',
  password:'',
})
async function doSignup(){
  await signUp({name: state.name, email: state.email, password: state.password})
}
</script>

<template>
  <v-card class="elevation-12">
     <v-toolbar color="secondary">
        <v-toolbar-title>Signup</v-toolbar-title>
     </v-toolbar>
     <v-card-text>
        <v-form>
           <v-text-field v-model="state.name"
              prepend-icon="person"
              name="login"
              label="Name"
              type="text"
           ></v-text-field>
           <v-text-field v-model="state.email"
              prepend-icon="person"
              name="email"
              label="Email"
              type="text"
           ></v-text-field>

           <v-text-field v-model="state.password"
              id="password"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
           ></v-text-field>
        </v-form>
     </v-card-text>
     <v-card-actions>
      <span>¿Ya tienes una cuenta? <router-link :to="{name: 'login'}">Accede</router-link> </span>


        <v-spacer></v-spacer>
        <v-btn variant="flat"  color="secondary" @click="doSignup" >Signup</v-btn>
     </v-card-actions>
  </v-card>
</template>

