
<script setup>
import AuthorListComponent from '@/components/AuthorListComponent.vue';

import { onBeforeMount, reactive } from 'vue';
import { getAllAuthors } from '@/services/user.service'

const state = reactive({
    allAuthors: []
})

onBeforeMount(async () => {
    const authors = await getAllAuthors()
    state.allAuthors = authors
})


</script>

<template>
   <v-container>
    <AuthorListComponent v-if="state.allAuthors.length > 0" :authors="state.allAuthors" />
   </v-container>
   
</template>