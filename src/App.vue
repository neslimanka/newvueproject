<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
 <script>
import appNavbar from "./components/Navbar.vue";
import appFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    appNavbar,
    appFooter,
  },
};
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
