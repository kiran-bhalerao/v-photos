import api from "../../API/imgur";
import qs from "qs";
import router from "../../routes";

const state = {
  token: localStorage.getItem("imgur_token")
};

const getters = {
  isLoggin: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    localStorage.clear();
  },
  finalizedLogin: ({ commit }, hash) => {
    let hashobj = qs.parse(hash.substring(1));
    commit("setToken", hashobj.access_token);
    localStorage.setItem("imgur_token", hashobj.access_token);
    router.push("/");
  },
  login: () => {
    api.login();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
