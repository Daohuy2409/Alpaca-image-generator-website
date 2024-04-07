import './assets/main.css'
import "vue-router"
import { createRouter, createWebHistory } from 'vue-router'
import hehe from './components/hehe.vue'
import { createApp } from 'vue'
import App from './App.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: hehe },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
