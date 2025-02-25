import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount("#app");
