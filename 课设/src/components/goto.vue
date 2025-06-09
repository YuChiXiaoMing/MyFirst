<template>
    <div class="nav-container">
        <h1>导航</h1>
        <div class="nav-grid">
            <div class="nav-item" v-for="site in sites" :key="site.name" @click="goTo(site.url)">
                <img :src="site.icon" class="icon" />
                <span class="site-name">{{ site.name }}</span>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const sites = [
    { name: "Bilibili", url: "https://www.bilibili.com/", icon: "/src/assert/images/logo/bilibili.png" },
    { name: "YouTube", url: "https://tv.youtube.com/welcome/", icon: "/src/assert/images/logo/youtube.png" },
    { name: "GitHub", url: "https://github.com", icon: "/src/assert/images/logo/github.png" },
    { name: "Gitee", url: "https://gitee.com/", icon: "/src/assert/images/logo/gitee.png" },
    { name: "ChatGPT", url: "https://chatgpt.com/", icon: "/src/assert/images/logo/ChatGPT.png" },
    { name: "DeepSeek", url: "https://chat.deepseek.com/", icon: "/src/assert/images/logo/deepseek.png" },
    { name: "Facebook", url: "https://www.facebook.com/", icon: "/src/assert/images/logo/facebook.png" },
    { name: "Twitter", url: "https://x.com/", icon: "/src/assert/images/logo/twitter.png" },
    { name: "Genshin Impact", url: "https://ys.mihoyo.com/cloud/#/", icon: "/src/assert/images/logo/genshin.jpg" },
    { name: "Wuthering Waves", url: "https://mc.kurogames.com/cloud/index.html#/", icon: "/src/assert/images/logo/wuthing waves.jpg" },
]

function goTo(url: string) {
    window.open(url, '_blank')
}
</script>

<style scoped>
.nav-container {
    max-width: 60%;
    margin: 10px auto;
    padding: 20px;
    font-family: sans-serif;
    height: 65vh;
}

.nav-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.nav-item {
    display: flex;
    align-items: center;
    width: calc(50% - 30px);
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
}

.nav-item:hover {
    background: #e0e0e0;
}

.icon {
    width: 50px;
    margin-right: 10px;
}

.site-name {
    font-size: clamp(0px, 4vw, 30px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
}

@media (max-width: 150px) {
    .site-name {
        display: none;
    }
}
</style>