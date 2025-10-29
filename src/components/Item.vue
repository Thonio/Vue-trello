<script setup>
import { ref, nextTick } from 'vue'

const text = ref('Click to edit')
const editableText = ref(text.value)
const isEditing = ref(false)
const inputRef = ref(null)

function startEditing() {
  isEditing.value = true
  editableText.value = text.value
  nextTick(() => inputRef.value.focus())
}

function saveEdit() {
  text.value = editableText.value.trim() || text.value
  isEditing.value = false
}
</script>

<template>
  <div class="content">
    <div>
      <span v-if="!isEditing" @click="startEditing">{{ text }}</span>
      <input v-else v-model="editableText" @blur="saveEdit" @keyup.enter="saveEdit" ref="inputRef" />
    </div>
    <select>
      <option>En cours</option>
      <option>Terminer</option>
      <option>Suspendu</option>
    </select>
  </div>
</template>

<style scoped>
span {
  cursor: pointer;
  display: inline-block;
  padding: 4px;
}

input {
  padding: 4px;
  font-size: inherit;
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
