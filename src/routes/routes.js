import {createRouter, createWebHistory} from "vue-router";

const routes = [{
    path: '/login', meta: {
        title: 'Login', layout: 'non-layout'
    }, component: () => import('../pages/Login/Login.vue'),
}, {
    path: '/register', meta: {
        title: 'Register', layout: 'non-layout'
    }, component: () => import('../pages/Register/Register.vue'),
}, {
    path: '/', meta: {
        title: 'Home', layout: 'default-layout'
    }, component: () => import('../pages/Home/Home.vue'),
}, {
    path: '/store', meta: {
        title: 'Store', layout: 'default-layout'
    }, component: () => import('../pages/Store/Store.vue'),
}]

const router = createRouter({
    history: createWebHistory(), routes: routes
})

export default router
