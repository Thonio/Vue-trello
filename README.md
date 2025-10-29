# Vue Trello (Vue 3 + TypeScript + Pinia + Vite)

A minimal Trello-like board built with Vue 3, TypeScript, Pinia and Vite.

## What the app does
- **Three columns by state**: "En cours", "Terminer", "Suspendu".
- **Add tasks**: Click the + button in a column to add a task in that column's state.
- **Edit task name**: Click a task name to edit inline; press Enter or blur to save.
- **Change task state**: Use the task's dropdown to move it to another state.

## Tech stack
- **Vue 3** with `<script setup>` and TypeScript
- **Pinia** for state management
- **Vite** for dev server and build

## Requirements
- Node.js 18+

## Getting started

Install dependencies (choose one):

```bash
npm install
# or
pnpm install
# or
yarn install
# or (if you use Bun)
bun install
```

Start the dev server:

```bash
npm run dev
```

Type-check and build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure (key files)
- `src/main.ts`: Creates the Vue app and installs Pinia
- `src/stores/tasks.ts`: Pinia store with `tasks` and actions to update/delete
- `src/components/Column.vue`: A column filtered by state; add-task button
- `src/components/Item.vue`: A single task item with inline edit and state select

## Pinia store shape
```ts
interface TaskItem {
  id: number
  name: string
  state: string // 'En cours' | 'Terminer' | 'Suspendu'
}
```

Actions available:
- `setTasks(tasks: TaskItem[])`
- `updateTaskName(id: number, name: string)`
- `updateTaskState(id: number, state: string)`
- `deleteTask(id: number)`

## Notes
- The app uses French labels for task states: "En cours", "Terminer", "Suspendu".
- New tasks inherit the state of the column in which they are created.
