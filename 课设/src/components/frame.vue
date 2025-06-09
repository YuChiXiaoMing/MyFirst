<template>
    <div style="position: absolute;">
        <img :src="selectedImage" class="background-image">
    </div>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect" style="background-color: rgba(0, 0, 0, 0);">
        <Music />

        <div style="width:85%;"></div>
        <el-menu-item index="1" class="myIndex">
            <RouterLink to="/welcome/" class="button">Home</RouterLink>
        </el-menu-item>
        <el-menu-item index="2" class="myIndex">
            <RouterLink to="/welcome/main">Main</RouterLink>
        </el-menu-item>
        <el-menu-item index="4" class="myIndex">
            <RouterLink to="/login">Exit</RouterLink>
        </el-menu-item>
    </el-menu>

    <button class="fixed-button" @click="showModal = true">change</button>

    <div v-if="showModal" class="modal-backdrop" @click.self="showModal = false">
        <div class="modal">
            <h3>选择背景</h3>
            <div class="image-grid">
                <img v-for="url in imageUrls" :key="url" :src="url" class="image-option" @click="selectImage(url)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Music from '@/components/music.vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const showModal = ref(false)
const selectedImage = ref('/src/assert/images/feibi.jpg')

const imageUrls = [
    '/src/assert/images/feibi.jpg',
    '/src/assert/images/jingliu.png',
    '/src/assert/images/nainai.jpg',
    '/src/assert/images/qh.jpeg',
    '/src/assert/images/fufu.png',
    '/src/assert/images/hutao.png'
]

function selectImage(url: string) {
    selectedImage.value = url
    showModal.value = false
}
</script>

<style scoped>
.background-image {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    object-fit: cover;
    opacity: 0.6;
    pointer-events: none;
}


.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

a {
    text-decoration: none;
}

.myIndex {
    font-weight: bold;
    font-size: larger;
    transition: 0.6s;
}

.myIndex:hover {
    opacity: 0.5;
}

.fixed-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 16px;
    background-color: rgb(195, 92, 109);
    color: white;
    border: none;
    border-radius: 999px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s;
}

.fixed-button:hover {
    background-color: #d7519b;
}

.fixed-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 10px 16px;
    background-color: rgb(195, 92, 109);
    color: white;
    border: none;
    border-radius: 999px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
}

.image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
}

.image-option {
    width: calc(50% - 10px);
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: border-color 0.3s;
}

.image-option:hover {
    border-color: #d7519b;
}
</style>