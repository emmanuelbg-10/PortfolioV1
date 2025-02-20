<template>
  <div class="projects-container">
    <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projects from '../data/projects';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* Centrar las tarjetas horizontalmente */
  gap: 1rem;
  /* Espacio entre las tarjetas */
  padding: 0 2rem;
  /* Añadir padding a los lados */
}
</style>
