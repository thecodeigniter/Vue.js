import { createApp } from "vue";
import App from "./App.vue";
import personCard from "./components/PersonCard";

const app = createApp(App);
app.config.warnHandler = function(msg, vm, trace) {
  return null;
};
app.component("PersonCard", personCard);
app.mount("#app");
