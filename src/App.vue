<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
#app {
  overflow-x: hidden !important;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      background-color: #42b983;
    }
  }
}
</style>
