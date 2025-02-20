<template>
  <div class="project-card">
    <div class="image-container" @click="openDemo">
      <img :src="project.imageUrl" alt="Captura del proyecto" class="project-image">
      <div class="overlay">
      </div>
    </div>
    <p class="click-notice">Haz clic en la imagen para ver más detalles</p>
    <div class="project-info">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="actions">
        <a :href="project.repoUrl" target="_blank" class="action-button">Ver Código</a>
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
  },
  methods: {
    openDemo() {
      window.open(this.project.liveUrl, '_blank');
    }
  }
};
</script>

<style scoped>
.project-card {
  background: var(--card-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 4px 12px var(--shadow);
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px var(--shadow-hover);
}

.image-container {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-container:hover .project-image {
  transform: scale(1.05);
}



.image-container:hover .overlay {
  opacity: 1;
}



.click-notice {
  margin: 0.8rem 0;
  color: #777;
  font-size: 0.85rem;
  text-align: center;
}

.project-info {
  padding: 1.5rem;
  text-align: left;
}

.project-info h2 {
  margin: 0;
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.project-info p {
  margin: 0.5rem 0;
  color: var(--text-color);
}

.actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
}

.action-button {
  background: var(--primary-color);
  color: #fff;
  padding: 0.75rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: background var(--transition-speed) ease;
}

.action-button:hover {
  background: var(--secondary-color);
}
</style>
