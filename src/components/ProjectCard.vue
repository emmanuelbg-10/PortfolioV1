<template>
  <div class="project-card">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <div class="actions">
      <a :href="project.repoUrl" target="_blank">Ver Repositorio</a>
    </div>
    <!-- Iframe para demo -->
    <div class="demo-preview" @click="openDemo">
      <iframe :src="project.demoUrl" frameborder="0" class="demo-iframe"></iframe>
      <p class="click-notice">Haz clic para ver más detalles</p>
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
  },
  methods: {
    openDemo() {
      window.open(this.project.demoUrl, '_blank');
    }
  }
};
</script>

<style scoped>
.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1.5rem;
  width: 320px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.project-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333;
}

.project-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.actions a {
  display: inline-block;
  background-color: #007acc;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.actions a:hover {
  background-color: #005fa3;
}

.demo-preview {
  margin-top: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
}

.demo-iframe {
  width: 100%;
  height: 220px;
  border: none;
  transition: opacity 0.3s ease;
}

.click-notice {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 6px 10px;
  font-size: 0.875rem;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.demo-preview:hover .click-notice {
  opacity: 1;
}
</style>