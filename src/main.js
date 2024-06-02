import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/swiper-bundle.css';
import router from './router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



//createApp(App).use(router).mount('#app');
const app = createApp(App);
app.use(router);
app.mount('#app');