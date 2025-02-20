<template>
  <div class="project-card">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <div class="actions">
      <a :href="project.repoUrl" target="_blank">Ver Repositorio</a>
      <button @click="openDemo">Ver Demo</button>
    </div>
    <!-- Modal o iframe para demo -->
    <div v-if="showDemo" class="demo-modal">
      <button class="close" @click="closeDemo">Cerrar</button>
      <iframe :src="project.demoUrl" frameborder="0" class="demo-iframe"></iframe>
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
  data() {
    return {
      showDemo: false
    };
  },
  methods: {
    openDemo() {
      this.showDemo = true;
    },
    closeDemo() {
      this.showDemo = false;
    }
  }
};
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
}

.actions {
  margin-top: 1rem;
}

.demo-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-iframe {
  width: 80%;
  height: 80%;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
