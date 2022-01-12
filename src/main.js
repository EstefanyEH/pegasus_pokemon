import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Primevue from 'primevue/config';
const app = createApp(App);

app.use(Primevue)

createApp(App).use(store).use(router).mount('#app')
