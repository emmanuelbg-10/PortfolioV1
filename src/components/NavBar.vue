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
  transition: transform 0.4s, opacity 0.4s;
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

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: var(--navbar-background);
    box-shadow: 0 4px 12px var(--shadow);
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .menu li {
    margin: 1rem 0;
  }

  .menu-toggle:checked+.menu-icon+.menu {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  .menu-icon {
    display: flex;
  }

  .menu-icon span:nth-child(1) {
    transform-origin: top left;
  }

  .menu-icon span:nth-child(3) {
    transform-origin: bottom left;
  }

  .menu-toggle:checked+.menu-icon span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle:checked+.menu-icon span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle:checked+.menu-icon span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>