import './assets/main.css'
import "vue-router"
import { createApp } from 'vue'
import access from './component/accessorize.vue'


const app = createApp(access)
app.mount('#app')
