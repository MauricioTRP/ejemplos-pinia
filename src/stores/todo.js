/**
 * importamos herramienta para definir stores
 */
import { defineStore } from 'pinia'

/**
 * exportar el store
 *
 * use - NombreStore - Store
 * useTodoStore
 * useCartStore
 * useUserStore
 *
 */

export const useTodoStore = defineStore({
  id: 'todo',
  /** Variables de estado (reactivas) */
  state: () => ({
    todoList: [
      { task: 'Comprar leche', state: false },
      { task: 'Llamar al doctor', state: true },
      { task: 'Terminar el proyecto Vue', state: false }
    ],
    users: []
  }),
  /**es para variables computadas */
  getters: {
    cantidadTareas: (state) => {
      return state.todoList.length
    }
  },
  actions: {
    addTodo(task) {
      this.todoList.push({ task, state: false })
    },
    finishTask(idx) {
      this.todoList[idx].state = true
    }
  }
})
