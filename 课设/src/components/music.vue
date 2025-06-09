<template>
    <img :src="imageURL" :style="imageStyle" @click="change" alt="image" />
    <audio ref="musicPlayer" :src="musicSrc" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import imageURL from "@/assert/images/fu.png";

// 音乐路径随机
const musicSrcs = [
    "/src/assert/music/m1.mp3",
    "/src/assert/music/m2.mp3",
    "/src/assert/music/m3.mp3",
    "/src/assert/music/m4.mp3",
    "/src/assert/music/m5.mp3",
];
const randomInt = Math.floor(Math.random() * musicSrcs.length);
const musicSrc = musicSrcs[randomInt];

// 控制状态
const isRotating = ref(true);
const currentRotation = ref(0);
const musicPlayer = ref<HTMLAudioElement | null>(null);
let rotationInterval: number | undefined;

// 控制样式
const imageStyle = computed(() => ({
    transform: `rotate(${currentRotation.value}deg)`,
    transition: "transform 0.1s linear",
}));

// 原始状态，用于从隐藏状态恢复
let userToggled = true; // 用户主动切换的旋转状态

onMounted(() => {
    const player = musicPlayer.value;
    if (player) player.play();

    startRotation();

    // 当用户切换页面或最小化
    document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
    clearInterval(rotationInterval);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
});

function startRotation() {
    rotationInterval = setInterval(() => {
        if (isRotating.value) {
            currentRotation.value += 3;
        }
    }, 50);
}

function handleVisibilityChange() {
    if (document.hidden) {
        isRotating.value = false;
    } else {
        if (userToggled) {
            isRotating.value = true;
        }
    }
}

function change() {
    isRotating.value = !isRotating.value;
    userToggled = isRotating.value;

    const player = musicPlayer.value;
    if (player) {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }
}
</script>

<style scoped>
img {
    width: 60px;
    cursor: pointer;
}
</style>