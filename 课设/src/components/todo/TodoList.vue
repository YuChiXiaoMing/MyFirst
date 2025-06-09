<template>
    <ul class="w-full max-w-md space-y-2">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-done="$emit('toggle-done', todo.id)"
            @delete-task="$emit('delete-task', todo.id)" />
    </ul>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'
defineProps<{ todos: { id: number; text: string; done: boolean }[] }>()
</script>