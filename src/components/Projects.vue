<template>
  <section class="projects" id="projects">
    <h1>Proyectos Destacados</h1>
    <div class="projects-container">
      <div class="project-card" v-for="proj in projects" :key="proj.id">
        <h2 class="project-title">{{ proj.title }}</h2>
        <div class="image-container">
          <a :href="proj.liveUrl">
            <img :src="proj.imageUrl" alt="Captura del proyecto" class="project-image">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import featuredProjects from '@/data/projects.js';

export default {
  name: "ProjectCard",
  data() {
    return {
      projects: featuredProjects
    };
  },
  methods: {
    openDemo(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 2rem 5rem;
  justify-items: center;
  padding: 1rem;
  margin: 0 2rem;
}

.project-card {
  background: var(--card-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  width: 100%;
  max-width: 960px;
  box-shadow: 0 4px 12px var(--shadow);
  transition: background-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  /* Reducir la separación entre los divs */
}

.project-card:hover {
  background-color: var(--card-background-hover);
  box-shadow: 0 8px 20px var(--shadow-hover);
}

[data-theme="dark"] .project-card:hover {
  background-color: #1a1a2e;
  /* Color azul oscuro */
}

[data-theme="light"] .project-card:hover {
  background-color: #e0e0e0;
  /* Color gris claro */
}

.project-title {
  text-align: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 0.5rem 0;
}

.image-container {
  position: relative;
  cursor: pointer;
  overflow: hidden;

  /* Añadir margen a los lados y abajo */
  height: 0;
  padding-bottom: calc(56.25%);
  /* Relación de aspecto 16:9 con margen adicional */
}

.project-image {
  position: absolute;
  top: 10px;
  /* Añadir margen superior */
  left: 10px;
  /* Añadir margen izquierdo */
  width: calc(100% - 20px);
  /* Ajustar ancho para margen */
  height: calc(100% - 20px);
  /* Ajustar altura para margen */
  object-fit: cover;
  transition: none;
  /* Eliminar la animación de aumento */
}

.project-card:hover .project-image {
  transform: none;
  /* Eliminar la animación de aumento */
}
</style>