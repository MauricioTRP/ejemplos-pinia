import { defineStore } from 'pinia'

/**
 * Store Custom
 */
export const useCustomStore = defineStore({
  id: 'custom', // customStore
  state: () => ({
    contador: 1,
    nombre: 'JuanCarlo',
    carrera: 'Front End Vue'
  }),
  actions: {
    aumentarContador() {
      this.contador++
    },
    cambiarNombre(nuevoNombre) {
      this.nombre = nuevoNombre
    }
  },

  getters: {
    cantidadPalabrasCarrera() {
      return this.carrera.split(' ').length
    }
  }
})
