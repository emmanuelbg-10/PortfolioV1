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
import './components/assets/App.css';
import NavBar from "@/components/NavBar.vue";
import ProjectCard from "./components/Projects.vue";
</script>
