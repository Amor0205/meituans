import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',

        redirect: '/Home'
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/City',
        name: 'City',
        component: () =>
            import ('../views/City.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/Details',
        name: 'Details',
        component: () =>
            import ('../views/Details.vue')
    },
    {
        path: '/Search',
        name: 'Search',
        component: () =>
            import ('../views/Search.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router