<template>
  <section class="projects">
    <h1>Proyectos Destacados</h1>
    <div class="project-list">
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
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
