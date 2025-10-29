import { defineStore } from 'pinia'

export interface TaskItem {
  id: number
  name: string
  state: string
}

interface TasksState {
  tasks: TaskItem[]
}

export const useTasksStore = defineStore('tasks', {
  state: (): TasksState => ({
    tasks: []
  }),
  actions: {
    setTasks(tasks: TaskItem[]): void {
      this.tasks = tasks.slice()
    },
    updateTaskName(id: number, name: string): void {
      const task = this.tasks.find(t => t.id === id)
      if (!task) return
      task.name = name
    },
    updateTaskState(id: number, state: string): void {
      const task = this.tasks.find(t => t.id === id)
      if (!task) return
      task.state = state
    },
    deleteTask(id: number): void {
      const index = this.tasks.findIndex(t => t.id === id)
      if (index === -1) return
      this.tasks.splice(index, 1)
    }
  }
})


