<template>
    <li class="flex items-center justify-between bg-white rounded shadow px-4 py-2">
        <div class="flex items-center gap-2">
            <input type="checkbox" :checked="todo.done" @change="$emit('toggle-done')" />
            <span :class="{ 'line-through text-gray-400': todo.done }">
                {{ todo.text }}
            </span>
        </div>
        <button @click="$emit('delete-task')" class="text-red-500 hover:text-red-700">
            ✖
        </button>
    </li>
</template>

<script setup lang="ts">
defineProps<{ todo: { id: number; text: string; done: boolean } }>()
</script>