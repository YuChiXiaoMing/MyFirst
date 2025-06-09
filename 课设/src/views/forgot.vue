<template>
    <div class="instructions">
        <p>连网页都进不去真是狼狈呢</p>
        <p>那我就大发慈悲地告诉你吧</p>
        <h1>Tip 1:</h1>
        <li>
            建议直接改网址，把forgot(login)改成welcome就行
        </li>
        <h1>Tip 2:</h1>
        <h2>链接数据库步骤：</h2>
        <ul>
            <li>1. 在 MySQL 建立一个 test 数据库</li>
            <li>2. 在 test 中建立一个 users 表，其中有 id, username, password</li>
            <li>3. 在 users 表中自己设置一些数据</li>
            <li>4. 找到 src/server.js 文件</li>
            <li>5. 把里面的：
                <pre><code>const db = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '你的密码',
                database: 'test',
            })</code></pre>
                中 password 改为自己数据库的密码
            </li>
            <li>6. 在命令行中执行：
                <pre><code>cd src
node server.js</code></pre>
            </li>
            <li>7. 返回登录界面</li>
            <li>8. 用写在 users 表中的用户名和密码登录</li>
        </ul>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.instructions {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: sans-serif;
}

.instructions ul {
    list-style: none;
    padding-left: 0;
}

.instructions li {
    margin-bottom: 12px;
    line-height: 1.5;
}

pre {
    background-color: #f0f0f0;
    padding: 10px;
    overflow-x: auto;
    border-radius: 6px;
}
</style>