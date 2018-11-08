import Vue from "vue";
import VueRouter from "vue-router";
import AuthHandler from "../components/AuthHandler";
import UploadForm from "../components/UploadForm";
import ImageList from "../components/ImageList";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler }
  ]
});

export default router;
