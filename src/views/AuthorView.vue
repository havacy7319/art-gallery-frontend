<script setup>
import AuthorComponent from '../components/AuthorComponent.vue';
import AuthorListComponent from '../components/AuthorListComponent.vue';
import ItemListComponent from '../components/ItemListComponent.vue';

import { reactive } from "@vue/reactivity";
import { getAuthor } from '@/services/user.service'
import { getAllItems } from '@/services/items.service'
import { onBeforeMount } from '@vue/runtime-core';

const props = defineProps(['id'])
const state = reactive({
    author: "",
    items: []
})
onBeforeMount(async () => {
    state.author = await getAuthor(props.id)
    const items = await getAllItems()
    state.items = items.filter(x => x.author._id == props.id)
})



</script>

<template>
    <v-container>
        <AuthorComponent v-if="state.author" :author="state.author" />
        
        <ItemListComponent v-if="state.items.length > 0" :items="state.items" />
    </v-container>

</template>

