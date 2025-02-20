<template>
  <section class="projects" id="projects">
    <h2>Mis Proyectos</h2>
    <hr>
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

<script setup>
import './assets/Projects.css';
import featuredProjects from '@/data/projects.js';
import { ref } from 'vue';

const projects = ref(featuredProjects);

</script>
