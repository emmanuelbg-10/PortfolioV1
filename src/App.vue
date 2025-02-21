<template>
  <header>
    <NavBar />
    <h1 class="header-title">Hola</h1>
    <p></p>

  </header>
  <main class="content">
    <ProjectCard />
    <!-- <router-view /> -->
  </main>

</template>

<script setup>
import './components/assets/App.css';
import NavBar from "@/components/NavBar.vue";
import ProjectCard from "./components/Projects.vue";
</script>

<style scoped>
.header-title {
  font-size: 2rem;
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  /* Add padding to prevent NavBar overlap */
}
</style>