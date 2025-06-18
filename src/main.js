import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index";
import VueApexCharts from "vue3-apexcharts";


const app = createApp(App)

app.use(router)
// app.use(VueApexCharts); // for the charts 
app.component("apexchart", VueApexCharts);

app.mount('#app')

//  document for the router layout 
// https://vueschool.io/articles/vuejs-tutorials/composing-layouts-with-vue-router/