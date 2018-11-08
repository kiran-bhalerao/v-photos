<template>
<div>
   <div class="dropper" v-if="isLoggin">
    <input 
    type="file" 
    name="file" 
    id="file" 
    @change="uploadImages($event.target.files)"
    multiple
    accept="image/*"
    >
    <span><h2>Drop your image here.</h2></span>
 </div>    
   <div v-else class="text-center">
    <h2>Login to get started</h2>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UploadForm",
  methods: {
    ...mapActions(["uploadImages"])
  },
  computed:{
    ...mapGetters(["isLoggin"])
  }
};
</script>

<style>
.dropper {
  height: 30vh;
  border: 2px solid gray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.dropper:hover {
  background-color: rgba(242, 242, 242, 0.596);
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>
