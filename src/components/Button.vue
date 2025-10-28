<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button :title="text" class="btn">
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.btn {
  padding: 5px 10px;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  font-size: 12px;
  background-color: #0f0f3a;
}
</style>
