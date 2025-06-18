<script setup>
import { computed, ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';

const props = defineProps({
    headers:{
        type: Array,
        default: []
    },
    data:{
        type: Array,
        default: []
    },
    Name:{
        type: String,
        default: 'Record'
    }
})

const route = useRoute()
const router = useRouter()
const currentRoute = computed(() =>{
    return route.path
})

const TableHeaders = computed(()=>{
    return props.headers.map((header, index) =>{
        return header.title
    })
})

const TableData = computed(()=>{
    return props.data
})


const getColumnData = (row,col)=>{
    if (!row && !col) {
        return ""
    }

    // let check if the col.name has in the row in key 
    let key = col.name
    if (row[key] !== undefined) {
        return row[key]
    }

    return ""
}

const getRowClass = (row, column) => {
    return {
        'text-center': column.type === "status",
        'text-yellow-500':column.type === "status" && row[column.name] === "pending",
        'text-green-500':column.type === "status" && row[column.name] === "completed",
    }
}


const HandleAdd =()=>{
    router.push({
        path:`${currentRoute.value}/add`
    })
}

const handleEdit =(row)=>{
    router.push({
        path:`${currentRoute.value}/edit/${row}`
    })
}
</script>

<template>
    <div class="flex flex-col gap-2 items-end">
        <button @click="HandleAdd()" class="px-3 py-2 rounded-md bg-blue-400 text-white cursor-pointer">Add {{ Name }}</button>
        <table class="w-full bg-slate-200  rounded" v-if="TableHeaders.length > 0">
            <thead >
                <tr v-if="TableHeaders.length > 0" class="">
                    <th v-for="header in TableHeaders" class="p-2 border border-slate-400"> {{ header }} </th>
                    <th class="p-2 border border-slate-400"> Action </th>
                </tr>
            </thead>
            <tbody>
                <!-- rows -->
                <tr v-for="(row,rowIndex) in TableData">
                    <!-- columns -->
                    <td v-for="(column,colIndex) in props.headers" class="border border-slate-400 bg-white p-2"
                    :class="getRowClass(row,column)">
                       {{ getColumnData(row,column)}}
                    </td>
                    <td class="p-2 border border-slate-400 text-center">
                        <span class="text-blue-900" @click="handleEdit(row.id)">Edit</span>
                        <span class="text-red-500">Delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>

</style>