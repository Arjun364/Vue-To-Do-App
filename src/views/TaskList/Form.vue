<script setup>
import Form from '@/components/Form/Form.vue';


const formFields = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'Name',
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'dropdown',
        options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'alien', label: 'Alien' },
        ]
    }
]

</script>

<template>
    <Form :fields="formFields" />
</template>

<style lang="scss" scoped>

</style>