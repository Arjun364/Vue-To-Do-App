<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const handleNavigation =(routeName)=>{
    router.push({ name:routeName })
}

</script>
<template>
    <div class="w-full h-[4rem] bg-slate-800 flex items-center justify-between px-4 text-white">
        navigation
        <!-- menu section -->
        <ul class="flex gap-2">
            <li class="cursor-pointer" @click="handleNavigation('Home')">Home</li>
            <li class="cursor-pointer" @click="handleNavigation('Dashboard')">Dashboard</li>
            <li class="cursor-pointer" @click="handleNavigation('TaskList')">TaskList</li>
            <li class="cursor-pointer" @click="handleNavigation('About')">About</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>