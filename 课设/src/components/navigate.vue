<template>
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Weather" name="first" style="display: flex;">
            <weather />
        </el-tab-pane>
        <el-tab-pane label="Work" name="second">
            <todo />
        </el-tab-pane>
        <el-tab-pane label="Go to" name="third">
            <goto />
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import todo from '@/components/todo.vue'
import weather from '@/components/weather.vue'
import goto from '@/components/goto.vue'

const selectedDate = ref(new Date().toISOString().split('T')[0]);
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: pink;
    font-size: 32px;
    font-weight: 600;
}

h1 {
    color: black;
}
</style>