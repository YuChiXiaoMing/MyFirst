<template>
    <div style="position: absolute;">
        <img src="@/assert/images/eight.png" class="background-image">
    </div>

    <div class="box">
        <h1>Welcome</h1>
        <br>
        <label>用户名：</label>
        <input id="email" type="text" placeholder="请输入邮箱地址" v-model="username">
        <p id="error-message" class="error-message" v-show="emailError == true">请输入有效的邮箱地址。</p>
        <p id="kong" v-if="emailError == false"> </p>
        <label>密 &nbsp 码：</label>
        <input id="code" type="password" placeholder="请输入密码" v-model="password">
        <p id="error-password" class="error-password" v-show="passwordEmpty == true">密码不能为空</p>
        <div class="forgot-password">
            <a @click="router.push('/register')" style="margin-right: 20px;">注册 </a>
            <a @click="router.push('/forgot')">忘记密码？</a>
        </div>
        <br>
        <button class="submit" @click="login">登录</button>
        <br>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const username = ref('')
const password = ref('')
let emailError = ref(false);
let passwordEmpty = ref(false);

const login = async () => {
    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })

        const data = await res.json()

        if (data.success) {
            router.push('/welcome')
        } else {
            alert('登录失败：' + data.message)
        }
    } catch (err) {
        alert('请求失败，请检查服务器')
    }
}

</script>

<style scoped>
.background-image {
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0.6;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border: 1px solid rgb(215, 215, 215);
    display: inline-block;
    border-radius: 20px;
    text-align: center;
    opacity: 0.8;
    backdrop-filter: blur(50px);
}

.submit {
    width: 50%;
    padding: 10px;
    background-color: #f77ab6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.forgot-password {
    margin-top: 8px;
    font-size: small;
    margin-left: 170px;
}

.error-message {
    color: red;
    font-size: 14px;
    margin: 0 0 0 50px;
}

.error-password {
    color: red;
    font-size: 14px;
    margin: 0 20px 0 0;
}

a:hover {
    color: #2c38c2;
    font-weight: bolder;
}
</style>