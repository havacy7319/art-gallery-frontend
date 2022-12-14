<script setup>
   const props = defineProps (['author'])
</script>

<template>
    <v-card class="mx-auto" max-width="434" rounded="0">
      <v-img height="100%" cover src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        <v-avatar color="grey" size="150" rounded="0">
          <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        <v-list-item class="text-white" :title="author.name" :subtitle="author.descriptionShort"></v-list-item>
      </v-img>
    </v-card>
  
    <v-container fluid style="width: 85%;">
  
      <v-row>
        <v-col>
          <v-text-field label="Nombre" v-model="author.name"></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col>
          <v-file-input label="Tu foto" variant="filled" prepend-icon="mdi-camera"></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Descripción corta" v-model="author.descriptionShort"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea label="Descripción" v-model="author.description"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field readonly label="Email" v-model="author.email"></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col >
         
        </v-col>
      </v-row>
  
  
    </v-container>
  
  </template>