import express, { json } from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lcc321.5',
  database: 'test',
})

db.connect((err) => {
  if (err) {
    console.error('数据库连接失败:', err)
  } else {
    console.log('数据库连接成功')
  }
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?'
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: '数据库错误' })
    }
    if (results.length > 0) {
      res.json({ success: true, message: '登录成功' })
    } else {
      res.status(401).json({ success: false, message: '用户名或密码错误' })
    }
  })
})

app.post('/register', (req, res) => {
  const { username, password } = req.body

  const checkSql = 'SELECT * FROM users WHERE username = ?'
  db.query(checkSql, [username], (err, results) => {
    if (err) return res.status(500).json({ message: '数据库错误' })
    if (results.length > 0) {
      return res.status(409).json({ message: '用户名已存在' })
    }

    const insertSql = 'INSERT INTO users (username, password) VALUES (?, ?)'
    db.query(insertSql, [username, password], (err2, results2) => {
      if (err2) return res.status(500).json({ message: '注册失败' })
      res.json({ success: true, message: '注册成功' })
    })
  })
})

app.listen(3000, () => {
  console.log('服务器已启动：http://localhost:3000')
})
