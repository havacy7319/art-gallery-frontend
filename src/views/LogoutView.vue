<script setup>
import { useUserStore } from '@/stores/user.store'
import { onMounted } from '@vue/runtime-core'
import { router } from '@/router'
const userStore = useUserStore()

onMounted(() => {
    setTimeout(() => {
        userStore.doLogout()
        router.push('/login')
    }, 2000)
})


</script>
<template>
    <h1>Espere mientras cerramos su sesión</h1>
</template>