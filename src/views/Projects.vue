<template>
  <section class="projects">
    <h1>Proyectos Destacados</h1>
    <div class="projects-container">
      <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj" />
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import featuredProjects from '@/data/featuredProjects.js';

export default {
  name: "Projects",
  components: { ProjectCard },
  data() {
    return {
      projects: featuredProjects
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
}
</style>