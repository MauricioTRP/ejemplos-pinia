<script>
// importación del store
import { useCounterStore } from '@/stores/counter'
// importamos "convertidor" de Pinia
import { mapStores } from 'pinia'

export default {
  name: 'ShowCounter',
  computed: {
    /**
     * "Desparramamos"
     *
     * El store en una variable computada
     * y se almacena en counterStore
     */
    ...mapStores(useCounterStore)
  },
  methods: {
    increment() {
      this.counterStore.increment()
    }
  }
}
</script>
<template>
  <div>
    <p>Contador Actual: {{ counterStore.count }}</p>
    <p>Doble del contador: {{ counterStore.doubleCount }}</p>
    <div class="buttons">
      <button @click="increment">Incrementar</button>
    </div>
  </div>
</template>
