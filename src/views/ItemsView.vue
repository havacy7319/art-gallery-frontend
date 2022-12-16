<script setup>
import { onBeforeMount, reactive } from 'vue';
import { getAllItems } from '@/services/items.service'
import ItemListComponent from '../components/ItemListComponent.vue';

const state = reactive({
    allItems: []
})

onBeforeMount(async() => {
    const items = await getAllItems()
    state.allItems = items
})

</script>

<template>
    <v-container>
        <ItemListComponent v-if="state.allItems.length> 0" :items="state.allItems" />
    </v-container>
 
</template>



