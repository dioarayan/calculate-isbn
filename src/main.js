import { createApp } from "vue";
import App from "./App.vue";
import CalculateDigit from "./components/CalculateDigit.vue";

const app = createApp(App);
app.component("calculate-digit", CalculateDigit);
app.mount("#app");
