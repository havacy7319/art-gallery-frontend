<template>
    <v-container>
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
    </v-container>
</template>