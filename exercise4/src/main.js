import { createApp } from "vue";
import store from "./store/store";
import App from "./App.vue";

const app = createApp(App).use(store);

app.config.warnHandler = function(msg, vm, trace) {
  return null;
};
app.mount("#app");
