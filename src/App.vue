<template>
  <div id="app">
    <app-navbar></app-navbar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer></app-footer>
  </div>
</template>
 <script>
import appNavbar from "./components/appNavbar.vue";
import appFooter from "./components/appFooter.vue";

export default {
  name: "App",
  components: {
    appNavbar,
    appFooter,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
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
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity.3s ease-out;
  opacity: 0;
}
</style>
