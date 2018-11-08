<template>
<div>
    <AppHeader />
    <div class="container mt-4">
    <router-view />
    </div>
</div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
