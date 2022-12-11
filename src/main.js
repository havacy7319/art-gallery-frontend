import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios"
import VueAxios from "vue-axios"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

import App from './App.vue'
import { router } from './router'

import './assets/main.css'

const app = createApp(App)
// axios.defaults.baseURL = 'http://localhost:3000/api'
// app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
