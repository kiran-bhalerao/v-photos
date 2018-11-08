import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./routes/index"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
