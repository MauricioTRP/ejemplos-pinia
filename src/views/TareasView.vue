<script>
import { useTareasStore } from '@/stores/tareas'
import { mapStores } from 'pinia'

export default {
  computed: {
    /**
     * trae tareasStore
     * tareas: []
     */
    ...mapStores(useTareasStore)
  },
  created() {
    this.tareasStore.fetchTareas()
  }
}
</script>
<template>
  <h2>Tareas</h2>
  <ul>
    <li v-for="tarea in tareasStore.tareas" :key="tarea.id">
      {{ tarea.id }} - {{ tarea.descripcion }} - {{ tarea.estado }}
    </li>
  </ul>
</template>
