<script>
import { useTodoStore } from '@/stores/todo'
import { mapStores } from 'pinia'

/**
 * spread -> "desparramar" -> Expandir
 */
export default {
  computed: {
    ...mapStores(useTodoStore)
  },
  data() {
    return {
      tarea: ''
    }
  },
  methods: {
    agregarTarea() {
      this.todoStore.addTodo(this.tarea)

      this.tarea = ''
    },
    actualizarTarea(idx) {
      this.todoStore.finishTask(idx)
    }
  }
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form @submit.prevent="agregarTarea">
      <label for="task">Agregar Tarea</label>
      <input type="text" id="task" v-model="tarea" />
    </form>

    <div class="todo-list">
      <ul>
        <li v-for="(tarea, idx) in todoStore.todoList" :key="idx">
          {{ tarea.task }} - {{ tarea.state }}
          <button @click="actualizarTarea(idx)">Actualizar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
