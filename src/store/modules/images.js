import api from "../../API/imgur";
import router from "../../routes";

const state = {
  images: []
};

const getters = {
  getAllImages: state => state.images
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

const actions = {
  fetchImages: ({ commit, rootState }) => {
    const { token } = rootState.auth;
    api
      .fetchImages(token)
      .then(images => {
        console.log(images.data.data);
        commit("setImages", images.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  uploadImages: ({ commit, rootState }, images) => {
    //get the access token
    const { token } = rootState.auth;
    //upload image from api
    //redirect to imageList
    api.uploadImages(images, token).then(() => {
      router.push("/");
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
