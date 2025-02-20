<template>
  <div id="app">
    <p>Soy Emmanuel Barral Giraldo</p>
    <h2>PRUEBAAAA</h2>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
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
</style>
