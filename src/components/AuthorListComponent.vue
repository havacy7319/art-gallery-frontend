<script setup>
    const props = defineProps(['authors'])
</script>

<template>
    <v-container fluid style="width: 85%;"  class="m-2">
        <v-hover v-slot="{ isHovering, props }">
        <v-card v-for="(author, idx ) in authors" :key="idx" 
        class="d-flex align-center flex-column mx-auto pa-6 transition-swing "
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        
        >
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
        </v-hover>
    </v-container>
</template>

