<template>
  <div class="project-card">
    <img :src="project.imageUrl" alt="Captura del proyecto" class="project-image">
    <div class="project-info">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="actions">
        <a :href="project.repoUrl" target="_blank">Ver Código</a>
        <a :href="project.liveUrl" target="_blank">Ver Demo</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.project-card {
  border: 1px solid #333;
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
  background: #222;
  color: white;
  text-align: center;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1rem;
}

.actions a {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #007bff;
  color: white;
  text-decoration: none;
}
</style>
