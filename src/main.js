import './assets/main.css'
import "vue-router"
import { createApp } from 'vue'
import access from './component/accessorize.vue'
import styleL from './component/styleL.vue'

const app = createApp(access)
app.component('styleL', styleL)
app.mount('#app')
