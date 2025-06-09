import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import Login from '@/views/login.vue'
import Welcome from "@/views/welcome.vue";
import Fogot from '@/views/forgot.vue'
import Register from "@/views/register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component:Login,
        },
        {
            path: '/forgot',
            component:Fogot,
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/welcome',
            component: Welcome,
            children: [
                {
                    path: '',
                    component:Home
                },
                {
                    path: 'main',
                    component:Main
                },
            ]
        }
    ]
})

export default router