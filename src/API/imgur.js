import axios from "axios";
const CLIENT_ID = "83c13788bb66241";
export default {
  login: () => {
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  },
  fetchImages: token => {
    return axios.get("https://api.imgur.com/3/account/me/images", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages: (images, token) => {
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      formData.append("image", image);
      axios.post("https://api.imgur.com/3/image", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    return Promise.all(promises);
  }
};
