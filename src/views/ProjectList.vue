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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  justify-items: center;
}
</style>
