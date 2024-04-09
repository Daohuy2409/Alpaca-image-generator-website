import './assets/main.css'
import "vue-router"
import { createApp } from 'vue'
import accessorize from './component/accessorize.vue'
import styleL from './component/styleL.vue'
import App from './App.vue'

const app = createApp(App)
app.component('accessorize', accessorize)
app.component('styleL', styleL)
app.mount('#app')
