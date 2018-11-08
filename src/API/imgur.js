const CLIENT_ID = "83c13788bb66241";
export default {
  login: () => {
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;
  }
};
