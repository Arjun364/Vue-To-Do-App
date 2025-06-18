<script setup>
import { ref } from 'vue';

const props = defineProps({
    name:{
        type:String,
        default:"Bar Chart"
    },
    data:{
        type:Array,
        default:[1, 2, 3, 4, 5]
    }
})

const chartOptions = ref({
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"]
  }
})

const series = ref([
  {
    name: props.name,
    data: props.data
  }
])

</script>

<template>
    <div>
        <h1> {{  props.name }}</h1>
        <apexchart
            type="bar"
            height="350"
            width="400"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>