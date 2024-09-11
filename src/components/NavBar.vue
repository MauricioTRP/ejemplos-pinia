<script>
import { RouterLink } from 'vue-router'
import { useTodoStore } from '@/stores/todo'
import { mapStores } from 'pinia'

export default {
  name: 'NavBar',
  components: {
    RouterLink
  },
  computed: {
    ...mapStores(useTodoStore)
  }
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink :to="{ name: 'custom' }">Store Custom</RouterLink>
    <RouterLink :to="{ name: 'financial' }">Info Financiera</RouterLink>
    <RouterLink :to="{ name: 'tareas' }">Ver Tareas</RouterLink>
  </nav>
  <div class="tareas-pendientes">TODOS Pendientes: {{ todoStore.cantidadTareas }}</div>
</template>
