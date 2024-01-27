
//引入依赖及组件
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';
// Vue.use(VueRouter);
//设置组件映射规则
const routes = [
    {
        path: '/',
        component: () => import('../components/login.vue'),
    },
    {
        path: '/register',
        component: () => import('../components/register.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
//导出
export default router;
