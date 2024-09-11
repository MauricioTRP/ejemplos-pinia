import { defineStore } from 'pinia'
import axios from 'axios'

export const useTareasStore = defineStore({
  id: 'tareas',
  state: () => ({
    tareas: []
  }),
  actions: {
    async fetchTareas() {
      try {
        const url = '/api/tareas.json'
        const { data } = await axios.get(url)

        this.tareas = data.tareas
      } catch (error) {
        console.error(error)
        alert(error)
      }
    }
  }
})
