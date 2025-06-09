
import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'

import ElementPlus from 'element-plus'
import './styles/element/index.scss'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
