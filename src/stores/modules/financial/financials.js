import { defineStore } from 'pinia'
import axios from 'axios'

/**
 * financials
 */

export const useFinancialStore = defineStore({
  id: 'financials',
  state: () => ({
    usd: null,
    country: 'Chile'
  }),
  actions: {
    async fetchDolar() {
      try {
        const url = 'https://mindicador.cl/api'
        const { data } = await axios.get(url)

        this.usd = data.dolar.valor
      } catch (error) {
        console.error(error)
        alert('No encontramos el dolar')
      }
    }
  }
})
