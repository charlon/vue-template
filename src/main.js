import { createApp } from 'vue'
import App from './app.vue'
import router from './router'

const app = createApp(App);
app.config.productionTip = false;

// vue-router
app.use(router);

app.mount("#app");
