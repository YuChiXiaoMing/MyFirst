<template>
    <main class="todo-page">
        <el-calendar v-model="value" class="calendar" />
        <div class="todo-card">
            <h1 class="todo-title">📝 我的待办事项</h1>

            <div class="todo-input">
                <input v-model="newTask" placeholder="添加一个新任务..." @keyup.enter="addTask" />
                <button @click="addTask">＋</button>
            </div>

            <ul class="todo-list">
                <li v-for="todo in todos" :key="todo.id" :class="['todo-item', { done: todo.done }]">
                    <div class="left" @click="toggleDone(todo.id)">
                        <input type="checkbox" :checked="todo.done" readonly />
                        <span style="font-size: smaller;">{{ todo.date + ': ' + todo.text }}</span>
                    </div>
                    <button class="delete-btn" @click="deleteTask(todo.id)">✖</button>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const value = ref(new Date());

interface Todo {
    id: number
    text: string
    done: boolean
    date: string
}

const newTask = ref('')
const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]'))

const addTask = () => {
    if (newTask.value.trim() !== '') {
        todos.value.push({
            id: Date.now(),
            text: newTask.value,
            done: false,
            date: String(value.value.getMonth() + 1) + '-' + String(value.value.getDate())
        })
        newTask.value = ''
        todos.value.sort((a, b) => a.date.localeCompare(b.date))
    }
}

const toggleDone = (id: number) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.done = !todo.done
}

const deleteTask = (id: number) => {
    todos.value = todos.value.filter(t => t.id !== id)
}

watch(todos, () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
}, { deep: true })
</script>

<style scoped>
.calendar {
    max-width: 40%;
    min-width: 400px;
    font-size: smaller;
    border-radius: 10px;
    margin: 10px;
}

.todo-page {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 2rem;
    border-radius: 0.5rem;
    font-family: 'Segoe UI', sans-serif;
}

.todo-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    width: 100%;
    max-width: 700px;
    margin: 10px;
}

.todo-title {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(to right, #fd52b5, #f586c3);
    background-clip: text;
    color: transparent;
    margin-top: 0;
    opacity: 0.8;
}

.todo-input {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
}

.todo-input input {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.7);
    transition: 0.3s;
}

.todo-input input:focus {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 0 2px #fd52b5;
}

.todo-input button {
    padding: 0 1.2rem;
    font-size: 1.5rem;
    background: #fd52b5;
    color: white;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.3s;
}

.todo-input button:hover {
    background: #fd52b5;
}

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo-item {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    transition: transform 0.2s ease background 0.3s ease;
}

.todo-item:hover {
    transform: scale(1.02);
    background: rgba(255, 255, 255, 0.95);
}

.todo-item.done span {
    text-decoration: line-through;
    color: #999;
}

.todo-item .left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
}

.delete-btn {
    background: transparent;
    border: none;
    color: #ff4d4f;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s;
}

.delete-btn:hover {
    color: #d9363e;
}
</style>