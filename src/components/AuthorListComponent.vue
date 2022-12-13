<script setup>
    const props = defineProps(['authors'])
</script>

<template>
    <v-container fluid>
        <v-card v-for="(author, idx ) in authors" :key="idx">
            <v-card-title>
                    {{author.name}}
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

