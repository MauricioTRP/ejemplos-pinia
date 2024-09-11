<script>
import { useCustomStore } from '@/stores/custom'
import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useCustomStore) // crea variable computada customStore
  }
}
</script>
<template>
  <div>Vista Custom</div>

  <p>Nombre: {{ customStore.nombre }}</p>
  <p>Carrera: {{ customStore.carrera }}</p>
  <p>Contador: {{ customStore.contador }}</p>
</template>
