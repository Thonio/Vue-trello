<script setup lang="ts">
import Column from './components/Column.vue'
</script>

<template>
  <div class="container">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="title">
    <h1>Vue Trello</h1>
  </div>
  <div class="boards">
    <Column :filterState="'En cours'" />
    <Column :filterState="'Terminer'" />
    <Column :filterState="'Suspendu'" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.title {
  text-align: center;
}

.boards {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
