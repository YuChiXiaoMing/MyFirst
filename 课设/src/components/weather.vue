<template>
    <div class="weather-app">
        <h1 style="margin: 0 0 50px 0;">查询今天天气</h1>

        <div class="inputs">
            <input v-model="province" type="text" placeholder="请输入省份" />
            <input v-model="city" type="text" placeholder="请输入城市" />
            <button @click="getWeather">查询</button>
        </div>

        <div v-if="weather" class="weather-info">
            <!-- <h2>{{ weather.place }}</h2> -->
            <p>🌡️ 温度：{{ weather.temperature }}°C</p>
            <p>💧 湿度：{{ weather.humidity }}%</p>
            <p>🌧️ 降水量：{{ weather.precipitation }}mm</p>
            <p>🧭 风向：{{ weather.windDirection }}</p>
            <p>💨 风速：{{ weather.windSpeed }} m/s</p>
            <p>🌀 风力等级：{{ weather.windScale }}</p>
            <p>📈 气压：{{ weather.pressure }} hPa</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const province = ref('');
const city = ref('');
const weather = ref<any>(null);

const id = '88888888';
const key = '88888888';

async function getWeather() {
    if (!province.value || !city.value) {
        alert('请输入省份和城市');
        return;
    }

    try {
        const url = `https://cn.apihz.cn/api/tianqi/tqyb.php?id=${id}&key=${key}&sheng=${encodeURIComponent(province.value)}&place=${encodeURIComponent(city.value)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.code === 200) {
            weather.value = data;
        } else {
            alert('查询失败：' + (data.message || '请检查输入是否有误'));
        }
    } catch (err) {
        console.error(err);
        alert('请求失败，请稍后重试');
    }
}
</script>

<style scoped>
.weather-app {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    min-height: 600px;
}

.inputs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
}

input {
    padding: 8px;
    flex: 1;
}

button {
    padding: 8px 12px;
}

.weather-info {
    color: black;
    font-size: 20px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 2rem;
}
</style>