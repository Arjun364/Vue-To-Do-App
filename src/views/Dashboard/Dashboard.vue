<script setup>
import BarChart from '@/components/Charts/BarChart.vue';
import { ref } from 'vue';


const tiles = ref([
    { text: 'Total tasks', value: 10 },
    { text: 'Completed tasks', value: 20 },
    { text: 'Pending tasks', value: 30 },
    { text: 'Team members', value: 30 },
])

const barData = ref([10, 20, 35, 40, 50])
</script>

<template>
    <div class="w-full flex flex-col gap-6 text-white">
        <!-- cards section -->
         <div class="w-full flex items-center justify-evenly" v-if="tiles.length > 0">
            <div v-for="tile in tiles" class="w-[15rem] h-[7rem] flex flex-col items-center justify-center rounded bg-slate-700 shadow-2xs shadow-slate-300"> 
                <span class="text-[2rem]">{{ tile.value }}</span>  
                {{ tile.text }}
            </div>
         </div>
        <div class="w-full flex items-center mt-4">
        <!-- chart -->
           <BarChart name="Tasks per Users" :data="barData" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>