<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'
import Item from './Item.vue'
import { useTasksStore } from '../stores/tasks'

const props = defineProps<{ filterState?: string }>()

const tasksStore = useTasksStore()
const tasks = computed(() => tasksStore.tasks)
const filteredTasks = computed(() => {
  if (!props.filterState) return tasks.value
  return tasks.value.filter(t => t.state === props.filterState)
})

function addTask() {
  const nextId = tasks.value.length
    ? Math.max(...tasks.value.map(t => t.id)) + 1
    : 1
  tasksStore.tasks.push({ id: nextId, name: 'Nouvelle tâche', state: props.filterState || 'En cours' })
}
</script>

<template>
  <div class="column">
    <div class="title">
      <div>
        {{ props.filterState || 'Toutes' }}
      </div>
      <Button text="Ajouter une tache" @click="addTask">+</Button>
    </div>
    <div>
      <Item
        v-for="task in filteredTasks"
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :state="task.state"
      />
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
