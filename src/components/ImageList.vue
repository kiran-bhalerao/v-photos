<template>
 <div>
   <div class="image-contaier" v-if="isLoggin">
     <div class="image" v-for="imageItem in getAllImages" :key="imageItem.id">
      <img :src="imageItem.link" >
     </div>
  </div>
  <div v-else class="text-center">
    <h2>Login to get started</h2>
  </div>
 </div>    
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  methods: {
    ...mapActions(["fetchImages"])
  },
  computed: {
    ...mapGetters(["getAllImages","isLoggin"])
  },
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-contaier {
  column-count: 4;
  column-gap: 20px;
}
img {
  width: 100%;
}
.image {
  margin-top: 20px;
  padding: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.image:hover {
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.3);
}
</style>
