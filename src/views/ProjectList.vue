<template>
  <div class="project-list">
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
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
