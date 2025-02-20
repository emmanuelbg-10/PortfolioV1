<template>
  <nav class="navbar">
    <input type="checkbox" id="menu-toggle" class="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul class="menu">
      <li><a href="#conocimientos">Conocimientos</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#contact">Contacto</a></li>

    </ul>

    <ThemeToggle />

  </nav>
</template>

<script setup>
import './assets/NavBar.css';
import ThemeToggle from './ThemeToggle.vue';
</script>