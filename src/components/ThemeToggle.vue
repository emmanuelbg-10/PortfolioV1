<template>
  <div class="theme-toggle">
    <i class="icon fas fa-sun"></i>

    <div class="toggle-switch" @click="toggleTheme">
      <div class="toggle-knob" :class="{ 'dark-mode': isDarkMode }"></div>
    </div>
    <i class="icon fas fa-moon"></i>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import './assets/ThemeToggle.css';

const isDarkMode = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const theme = isDarkMode.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};
</script>
