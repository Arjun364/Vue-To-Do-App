<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full h-[100vh]">
    <RouterView name="TopSideBar"></RouterView>
    <RouterView class="h-[90vh] py-[1rem] px-[2rem]"></RouterView>
  </div>
</template>

<style scoped>

</style>
