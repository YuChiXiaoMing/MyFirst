<template>
    <div class="w-full max-w-md mb-4">
        <form @submit.prevent="handleAdd" class="flex gap-2">
            <input v-model="text" placeholder="输入新的任务..." class="flex-1 border border-gray-300 rounded px-3 py-2" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                添加
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const emit = defineEmits(['add-task'])

const handleAdd = () => {
    if (text.value.trim() !== '') {
        emit('add-task', text.value)
        text.value = ''
    }
}
</script>