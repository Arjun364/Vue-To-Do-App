<script setup>
import Table from '@/components/Table/Table.vue'
import { ref, computed } from 'vue'

const tasks = ref([
  { id: 1, title: 'Design Homepage Layout', assignedUser: 'John Doe', dueDate: '2025-06-25', status: 'pending' },
  { id: 2, title: 'Implement User Authentication', assignedUser: 'Sarah Wilson', dueDate: '2025-06-22', status: 'completed' },
  { id: 3, title: 'Create API Documentation', assignedUser: 'Mike Johnson', dueDate: '2025-06-28', status: 'pending' },
  { id: 4, title: 'Set up CI/CD Pipeline', assignedUser: 'John Doe', dueDate: '2025-06-20', status: 'completed' },
  { id: 5, title: 'Database Migration', assignedUser: 'Emily Chen', dueDate: '2025-06-30', status: 'pending' },
  { id: 6, title: 'Mobile App Testing', assignedUser: 'Sarah Wilson', dueDate: '2025-07-05', status: 'pending' },
  { id: 7, title: 'Performance Optimization', assignedUser: 'Mike Johnson', dueDate: '2025-07-02', status: 'completed' },
  { id: 8, title: 'Security Audit', assignedUser: 'Emily Chen', dueDate: '2025-07-10', status: 'pending' }
])

const TableHeader = ref([
    { title: 'Task ID', name:"id", type:"text"},
    { title: 'Task Name', name:"title", type:"text"},
    { title: 'User', name:"assignedUser", type:"text"},
    { title: 'Due Date', name:"dueDate", type:"Date"},
    { title: 'status', name:"status", type:"status"},
])


</script>

<template>
    <Table :data="tasks" :headers="TableHeader" Name="Tasks"/>
</template>

<style lang="scss" scoped>
</style>