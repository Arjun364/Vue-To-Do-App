<script setup>
import FormField from './FormField.vue';
const props = defineProps({
    fields: {
        type: Array,
        required: true,
        default: () => []
    },
    initialValues: {
        type: Object,
        default: () => ({})
    }                                     
})


const handleSubmit= ()=>{
    alert('submited')
}

const oncancel = ()=>{
    alert('cancel')
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-3" >
        <div class="grid grid-cols-6 gap-1">
            <!-- dynamic fields -->
            <div v-for="(field, index) in fields" :key="index" class="flex flex-col gap-1">
                <label :for="field.name" class=" font-bold text-[1.1rem] ">
                    {{ field.label }}
                </label>
                <FormField :field="field"/>
            </div>
        </div>

        <div class="flex gap-2">
            <button class="px-4 py-2 bg-blue-500 rounded-md text-white cursor-pointer">submit</button>
            <button class="px-4 py-2 bg-red-500 rounded-md text-white cursor-pointer" @click="oncancel()">cancel</button>
        </div>
    </form>
</template>

<style lang="scss" scoped>

</style>