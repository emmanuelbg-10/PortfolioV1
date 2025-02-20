// filepath: /C:/laragon/www/PortfolioV1/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router