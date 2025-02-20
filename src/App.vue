<template>
  <div id="app">
    <NavBar />
    <main class="content">
      <ProjectCard />
      <!-- <router-view /> -->
    </main>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import ProjectCard from "./components/Projects.vue";
</script>

<style>
/* Definición de variables y estilos globales */
:root {
  --primary-color: #007bff;
  --secondary-color: #0056b3;
  --background-color: #f5f5f5;
  --card-background: #ffffff;
  --text-color: #333;
  --shadow: rgba(0, 0, 0, 0.1);
  --shadow-hover: rgba(0, 0, 0, 0.2);
  --border-radius: 12px;
  --transition-speed: 0.3s;
  --navbar-height: 60px;
  /* Ajustar según la altura de la barra de navegación */
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

#app {
  padding: 0;
  /* Eliminar padding del contenedor #app */
}

.content {
  margin-top: var(--navbar-height);
  /* Añadir margen superior para el contenido */
  padding: 1rem;
}

@media (max-width: 768px) {
  .content {
    padding: 0.5rem;
  }
}
</style>