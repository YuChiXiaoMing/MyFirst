<template>
    <div>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <br>
            <el-main>
                <div class="main">
                    <RouterView></RouterView>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/frame.vue'
import { RouterView } from 'vue-router';
</script>

<style scoped>
.app {
    background-color: pink;
}

.main {
    box-shadow: 0 0 10px;
    border-radius: 5px;
}
</style>