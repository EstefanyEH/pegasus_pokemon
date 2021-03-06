import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Primevue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(Primevue)

createApp(App).use(store).use(router).mount('#app')
