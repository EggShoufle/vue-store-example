<template>
  <div class="header">
    <div class="header__button">
      <a @click="routerRedirect('/')"
        ><button class="header__button-inventory">Inventory</button></a
      >
      <a @click="routerRedirect('/cart')"
        ><button class="header__button-total">
          Total cart items: {{ totalCart }}
        </button></a
      >
      <!-- <button class="header__button-inventory">Inventory</button> -->
      <!-- <button class="header__button-total">Total cart items: 0</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    totalCart: function () {
      return this.$store.state.totalItem;
    },
  },
  mounted: function () {},
  methods: {
    routerRedirect: function (route) {
      this.$router.push(route);
    },
  },
};
</script>
