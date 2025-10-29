<script setup lang="ts">
import Button from './Button.vue'
import Item from './Item.vue'
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
      <Item />
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
</style>
