<template>
    <div class="register-container">
        <div class="register-box">
            <h2>欢迎注册</h2>
            <input v-model="username" type="text" placeholder="用户名" />
            <input v-model="password" type="password" placeholder="密码" />
            <input v-model="confirmPassword" type="password" placeholder="确认密码" />
            <button @click="register">注册</button>
            <p class="link">已有账号？<router-link to="/login">去登录</router-link></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

async function register() {
    if (!username.value || !password.value || !confirmPassword.value) {
        alert('请填写完整信息');
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('两次密码不一致');
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username.value, password: password.value })
        });

        const data = await res.json();
        if (data.success) {
            alert('注册成功！请登录');
            router.push('/login');
        } else {
            alert('注册失败：' + data.message);
        }
    } catch (err) {
        alert('请求失败，请检查服务器');
    }
}
</script>

<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
    font-family: "Segoe UI", sans-serif;
}

.register-box {
    background-color: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    width: 320px;
    text-align: center;
}

.register-box h2 {
    margin-bottom: 24px;
    color: #333;
}

.register-box input {
    display: block;
    width: 100%;
    margin-bottom: 16px;
    padding: 10px 14px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border 0.2s;
}

.register-box input:focus {
    border-color: #a18cd1;
    outline: none;
}

.register-box button {
    width: 100%;
    padding: 10px;
    background-color: #6c5ce7;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

.register-box button:hover {
    background-color: #5e4bcf;
}

.link {
    margin-top: 12px;
    font-size: 14px;
    color: #555;
}

.link a {
    color: #6c5ce7;
    text-decoration: none;
}

.link a:hover {
    text-decoration: underline;
}
</style>