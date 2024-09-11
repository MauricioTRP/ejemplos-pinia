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
  </nav>
  <div class="tareas-pendientes">
    {{ todoStore.cantidadTareas }}
  </div>
</template>
