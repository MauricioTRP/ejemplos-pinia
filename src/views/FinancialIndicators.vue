<script>
import { useFinancialStore } from '@/stores/modules/financial/financials'
import { mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useFinancialStore)
  },
  // mounted() {
  //   this.financialsStore.fetchDolar()

  //   /** más operaciones */
  // }
  methods: {
    fetchDolar() {
      this.financialsStore.fetchDolar()
    }
  }
}
</script>
<template>
  <h2>Indicador financiero</h2>
  <button @click="fetchDolar">Obtener información</button>

  <p>{{ financialsStore.country }}</p>
  <p>{{ financialsStore.usd }}</p>
</template>
