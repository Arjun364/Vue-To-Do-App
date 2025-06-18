<script setup>

const props = defineProps({
    field:{
        type:Object
    } 
})


</script>

<template>
    <!-- text field -->
    <div v-if="field.type=='text'">      
        <input
        :id="field.name"
        :name="field.name"
        type="text"
        :placeholder="field.placeholder || ''"
        :required="field.required || false"
        class="w-full h-[2.5rem] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <!-- dropdown field -->
    <div v-if="field.type=='dropdown'">      
         <select
          :id="field.name"
          :name="field.name"
          :required="field.required || false"
          class="w-full h-[2.5rem] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            {{ field.placeholder || 'Select an option' }}
          </option>
          <option 
            v-for="option in field.options" 
            :key="option.value" 
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
    </div>
    </template>

<style lang="scss" scoped>

</style>