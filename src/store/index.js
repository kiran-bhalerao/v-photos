import Vue from "vue";
import Vuex, { Store } from "vuex";
import auth from "./modules/auth";
import images from "./modules/images";

Vue.use(Vuex);

export default new Store({
  modules: {
    auth,
    images
  }
});
