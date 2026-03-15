import { createRouter, createWebHistory } from "vue-router"
import UsersView from "../views/UsersView.vue"
import DashboardView from "../views/DashboardView.vue"

const routes = [
    {
        path: "/",
        component: DashboardView
    },
    {
        path: "/users",
        component: UsersView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router