<template>
  <div class="theme-toggle">
    <i class="icon fas fa-sun"></i>

    <div class="toggle-switch" @click="toggleTheme">
      <div class="toggle-knob" :class="{ 'dark-mode': isDarkMode }"></div>
    </div>
    <i class="icon fas fa-moon"></i>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // Verificar si el usuario tiene una preferencia de tema guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    },
  },
};
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;

}

.icon {
  font-size: 1.5rem;
  margin: 0 0.5rem;
}

.toggle-switch {
  cursor: pointer;
  user-select: none;
  width: 50px;
  height: 25px;
  background-color: var(--primary-color);
  border-radius: 25px;
  position: relative;
  transition: background-color var(--transition-speed);
}

.toggle-knob {
  width: 23px;
  height: 23px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: transform var(--transition-speed);
}

.toggle-knob.dark-mode {
  transform: translateX(25px);
}
</style>