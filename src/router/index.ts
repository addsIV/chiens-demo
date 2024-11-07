import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/LoginComponent.vue';
import QueryComponent from '@/components/QueryComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginComponent,
    },
    {
        path: '/main-query',
        name: 'MainQuery',
        component: QueryComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
