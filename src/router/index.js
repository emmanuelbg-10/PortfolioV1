import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from '@views/ProjectList.vue';

const routes = [
  { path: '/', name: 'ProjectList', component: ProjectList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
