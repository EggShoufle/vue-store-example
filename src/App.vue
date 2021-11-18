<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/style";
</style>
