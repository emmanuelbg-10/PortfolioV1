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
      <li>
        <ThemeToggle />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--navbar-background);
  box-shadow: 0 4px 12px var(--shadow);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.menu {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0;
}

.menu li {
  margin: 0 1rem;
}

.menu a {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: var(--primary-color-hover);
}

.menu-toggle {
  display: none;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon span {
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  margin: 4px 0;
  transition: 0.4s;
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .menu li {
    margin: 1rem 0;
  }

  .menu-toggle:checked+.menu-icon+.menu {
    display: flex;
  }

  .menu-icon {
    display: flex;
  }
}
</style>
