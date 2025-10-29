<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useTasksStore } from '../stores/tasks'

const props = defineProps<{
  id: number
  name: string
  state: string
}>()

const tasksStore = useTasksStore()

const editableText = ref(props.name)
const isEditing = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const currentState = ref(props.state)

watch(() => props.name, (val) => { editableText.value = val })
watch(() => props.state, (val) => { currentState.value = val })

function startEditing() {
  isEditing.value = true
  nextTick(() => inputRef.value?.focus())
}

function saveEdit() {
  const trimmed = editableText.value.trim()
  if (trimmed && trimmed !== props.name) {
    tasksStore.updateTaskName(props.id, trimmed)
  }
  isEditing.value = false
}

function changeState(e: Event) {
  const value = (e.target as HTMLSelectElement).value
  if (value !== props.state) {
    tasksStore.updateTaskState(props.id, value)
  }
}
</script>

<template>
  <div class="content">
    <div>
      <span v-if="!isEditing" @click="startEditing">{{ editableText }}</span>
      <input v-else v-model="editableText" @blur="saveEdit" @keyup.enter="saveEdit" ref="inputRef" />
    </div>
    <select :value="currentState" @change="changeState">
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
