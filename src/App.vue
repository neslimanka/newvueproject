<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view />
  </div>
</template>
 <script>
import appNavbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    appNavbar,
  },
};
</script>
<style>
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
