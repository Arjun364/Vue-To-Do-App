import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index";


const app = createApp(App)

app.use(router)

app.mount('#app')

//  document for the router layout 
// https://vueschool.io/articles/vuejs-tutorials/composing-layouts-with-vue-router/