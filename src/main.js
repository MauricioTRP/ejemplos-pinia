import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // librería de estados

import App from './App.vue'
import router from './router'

const app = createApp(App)

/**
 * con app use, usamos plugins
 */
app.use(createPinia())
app.use(router)

app.mount('#app') // se monta en el div id="app"
