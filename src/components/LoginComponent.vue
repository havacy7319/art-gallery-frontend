<script setup>
import { reactive } from "@vue/reactivity";
import { login } from "@/services/user.service"
const state = reactive({
   email: "",
   password: "",
})

async function doLogin() {
   await login({ email: state.email, password: state.password })
}
</script>

<template>
   <v-card class="elevation-12">
      <v-toolbar dark color="primary">
         <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
         <v-form>
            <v-text-field v-model="state.email" prepend-icon="person" name="email" label="Email"
               type="text"></v-text-field>
            <v-text-field v-model="state.password" id="password" prepend-icon="lock" name="password" label="Password"
               type="password"></v-text-field>
         </v-form>
      </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color="primary" @click="doLogin">Login</v-btn>
      </v-card-actions>
   </v-card>
</template>
 