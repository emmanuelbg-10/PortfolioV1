<!-- filepath: /C:/laragon/www/PortfolioV1/src/views/Home.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Definir la interfaz para el tipo de datos del proyecto
interface Project {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
}

const projects = ref<Project[]>([])

onMounted(async () => {
  const response = await fetch('https://api.github.com/users/emmanuelbg-10/repos')
  projects.value = await response.json()
})
</script>

<template>
  <div>
    <h1>Mis Proyectos</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/project/${project.full_name}`">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Estilos para tu componente */
</style>