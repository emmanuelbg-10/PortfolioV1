<!-- filepath: /C:/laragon/www/PortfolioV1/src/views/Project.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Definir la interfaz para el tipo de datos del proyecto
interface Project {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
}

// Tipar la variable project con la interfaz Project
const route = useRoute()
const project = ref<Project | null>(null)

onMounted(async () => {
  const response = await fetch(`https://api.github.com/repos/${route.params.id}`)
  project.value = await response.json()
})
</script>

<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <a :href="project.html_url" target="_blank">Ver en GitHub</a>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<style scoped>
/* Estilos para tu componente */
</style>