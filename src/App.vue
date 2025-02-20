<template>

  <NavBar />

  <main class="content">
    <ProjectCard />
    <!-- <router-view /> -->
  </main>
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
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--navbar-background);
  box-shadow: 0 4px 12px var(--shadow);
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0;
}

.navbar li {
  margin: 0 1rem;
}

.navbar a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: var(--primary-color-hover);
}
</style>