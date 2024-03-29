import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import router from './router'
import axios from 'axios'
import store from './store'
axios.defaults.baseURL = 'http://localhost:3000';

// App
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
