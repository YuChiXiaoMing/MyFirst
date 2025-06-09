<template>
    <div class="home-container">
        <h1>Welcome</h1>
        <div class="instruction">
            <h2>欢迎来到我的页面</h2>
            <ul>
                <li>点击左上角可以关闭音乐</li>
                <li>点击左下角按钮可以选择背景</li>
                <li>在Main-Weather中输入省份和城市查询其天气</li>
                <li>在Main-Work选择日期为这一天添加待办事项</li>
                <li>点击Exit返回登陆界面</li>
            </ul>
        </div>
        <h2> </h2>
        <div>
            <img src="@/assert/images/logo/qq.png" class="qq" @click="showQQ">
            <img src="@/assert/images/logo/wechat.png" class="wechat" @click="showWE">
        </div>
    </div>
</template>

<script setup lang="ts">
function showQQ() {
    alert("1195057821")
}

function showWE() {
    alert("15517837695")
}
</script>

<style scoped>
.home-container {
    border-radius: 2rem;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    flex-wrap: wrap;
    flex-direction: column;
}

.home-container h1 {
    font-size: 70px;
    color: rgb(255, 154, 171);
}

.instruction {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    width: 100%;
    max-width: 300px;
    margin: 10px;
}

.qq {
    width: 50px;
    margin: 10px;
}

.wechat {
    width: 67px;
    margin: 10px;
}
</style>