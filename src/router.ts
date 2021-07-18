import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[]
})

export default router
