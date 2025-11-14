import { createApp } from "vue";
import "./input.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index";
import secretPiniaPlugin from "./components/Project06/plugins/secretPiniaPlugin";
import localStoragePlugin from "./components/Project06/plugins/localStoragePlugin";

const app = createApp(App);

app.use(router);

const pinia = createPinia();
pinia.use(secretPiniaPlugin);
pinia.use(localStoragePlugin);
app.use(pinia);

app.mount("#app");
