<script setup>
    const props = defineProps(['authors'])
</script>

<template>
    <v-container fluid style="width: 85%;"  class="m-2">
        <v-card v-for="(author, idx ) in authors" :key="idx" class="d-flex align-center flex-column ">
            <v-card-title>
                  <router-link :to="{name: 'author', params:{id:author._id}}">{{author.name}}</router-link>  
            </v-card-title>
            <v-card-subtitle>
                    {{author.descriptionShort}}
            </v-card-subtitle>
            <v-card-text>
                    {{author.description}}
            </v-card-text>
        </v-card>
    </v-container>
</template>

