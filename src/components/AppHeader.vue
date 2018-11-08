<template>
   <div>
    <div class="ui secondary menu" style="padding:10px">
      <h3 style="padding-left:20px; margin-top:10px;">V-Photos</h3>
        <div v-if="isLoggin" class="right menu">
          <router-link exact-active-class="active" to="/" class="item"> Galary </router-link>
          <router-link exact-active-class="active" to="/upload" class="item"> Upload </router-link>
          <a class="ui item" href="#" @click="logout"> Logout </a>
        </div>
         <div v-else class="right menu">
          <a class="ui item" href="#" @click="login"> Login wih Imgur </a>          
        </div>
    </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggin"])
  }
};
</script>
