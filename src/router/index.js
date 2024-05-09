import {createRouter, createWebHistory} from 'vue-router'
import TablesView from '@/views/Dashboard/DashboardView.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: TablesView,
        meta: {
            title: 'Dashboard'
        }
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {left: 0, top: 0}
    }
})

router.beforeEach((to, from, next) => {
    document.title = `Apex ${to.meta.title} | A Dashboard Application`
    next()
})

export default router
