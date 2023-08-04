import {createRouter, createWebHistory} from "vue-router";

const routes = [{
    path: '/login', meta: {
        title: 'Login', layout: 'non-layout', loggedRoute: true
    }, component: () => import('../pages/Login/Login.vue'),
}, {
    path: '/register', meta: {
        title: 'Register', layout: 'non-layout', loggedRoute: true
    }, component: () => import('../pages/Register/Register.vue'),
}, {
    path: '/', meta: {
        title: 'Home', layout: 'default-layout'
    }, component: () => import('../pages/Home/Home.vue'),
}, {
    path: '/store', meta: {
        title: 'Store', layout: 'default-layout'
    }, component: () => import('../pages/StorePage/StorePage.vue'),
}, {
    path: '/product/:id', meta: {
        title: 'Product', layout: 'default-layout'
    }, component: () => import('../pages/ProductPage/ProductPage.vue'),
}]

const router = createRouter({
    history: createWebHistory(), routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.authenticated) {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (token === '') {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

//logged route
router.beforeEach((to, from, next) => {
    if (to.meta.loggedRoute) {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (token !== '') {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})


export default router
