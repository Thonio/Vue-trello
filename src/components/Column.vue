<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="column">
    <div class="title">
      <div>
        Column title
      </div>
      <Button text="Ajouter une tache">+</Button>
    </div>
    <div>
      <div class="content">
        <input type="text" />
        <Button text="valider">Ajouter</Button>
      </div>
      <div class="content">
        <div>Tache</div>
        <select>
          <option>En cours</option>
          <option>Terminer</option>
          <option>Suspendu</option>
        </select>
      </div>
      <div class="content">
        <div>Une tache assez longue pour la colonne</div>
        <select>
          <option>En cours</option>
          <option>Terminer</option>
          <option>Suspendu</option>
        </select>
      </div>
      <div class="content">
        <div>Tache</div>
        <select>
          <option>En cours</option>
          <option>Terminer</option>
          <option>Suspendu</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  width: 360px;
}

.title {
  padding: 10px;
  background-color: #4a47f7;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.content {
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
