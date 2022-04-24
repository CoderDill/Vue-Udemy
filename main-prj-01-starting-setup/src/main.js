import { createApp } from 'vue';
import router from './router.js'
import app from './App.vue'
import { createPinia } from 'pinia'


createApp(app).use(createPinia()).use(router).mount('#app');
