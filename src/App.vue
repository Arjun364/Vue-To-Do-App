<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full h-[100vh]">
    <RouterView name="TopSideBar" class="view w-full order-2"></RouterView>
    <RouterView class="view main-content w-full order-2"></RouterView>
  </div>
</template>

<style scoped>

</style>
