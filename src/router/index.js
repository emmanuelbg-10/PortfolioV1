import { createRouter, createWebHistory } from 'vue-router';
import Projects from '@/views/Projects.vue';

const routes = [
  { path: '/', name: 'Projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
