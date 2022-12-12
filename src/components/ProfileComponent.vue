<template>
    <v-card
      class="mx-auto"
      max-width="434"
      rounded="0"
    >
      <v-img
        height="100%"
        cover
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-avatar
          color="grey"
          size="150"
          rounded="0"
        >
          <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
        <v-list-item
          class="text-white"
          title="Anton Obrien"
          subtitle="Pintor Digital"
        ></v-list-item>
      </v-img>
    </v-card>
    
    <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-list-subheader>Precio</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Valor"
          model-value=""
          prefix="€"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Dimensiones</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Tamaño"
          model-value=""
          suffix="cm"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Email</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Email"
          model-value=""
          suffix="@gmail.com"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Imagen</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="BMP, GIF, JPG, TIF y PNG "
          model-value=""
          type=""
          suffix=""
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>

  </template>