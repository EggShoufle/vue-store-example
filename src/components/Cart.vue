<template>
  <div class="cart">
    <div class="cart__container">
      <div
        class="cart__container-list"
        v-for="(dt, index) in itemData"
        :key="index"
      >
        <p>{{ dt.goods }}</p>
        <p class="cart__container-list-price">
          $ {{ dt.price }} X {{ dt.quantity }}
        </p>
      </div>
    </div>
    <div class="cart__container-list cart__container-list-total">
      <p>Total Quantity: {{ totalQuantity }}</p>
    </div>
    <div class="cart__button-container">
      <button
        class="cart__button-container-checkout"
        :class="{ 'cart__button-container-checkout-disable': !totalPrice }"
        :disabled="!totalPrice"
        @click="checkoutItem"
      >
        Checkout (<span class="cart__bold">${{ decimalPrice }}</span
        >)
      </button>
      <button class="cart__button-container-delete" @click="removeItem">
        Delete All items
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      itemData: this.$store.state.cart,
      totalQuantity: 0,
      totalPrice: 0,
      priceItem: 0,
    };
  },
  mounted: function () {
    this.updateTotalQuantity();
    this.updatePrice();
  },
  computed: {
    decimalPrice: function () {
      return this.totalPrice.toFixed(2);
    },
  },
  methods: {
    updateTotalQuantity() {
      var item = this.$store.state.cart;
      for (let i = 0; i < item.length; i++) {
        this.totalQuantity += this.$store.state.cart[i].quantity;
      }
    },
    updatePrice() {
      var item = this.$store.state.cart;
      for (let i = 0; i < item.length; i++) {
        this.totalPrice +=
          this.$store.state.cart[i].quantity * this.$store.state.cart[i].price;
      }
    },
    removeItem() {
      var item = this.$store.state.cart;
      localStorage.removeItem("cart");
      localStorage.removeItem("cartTotalItem");
      item.splice(0, item.length);
      this.$store.commit("updateCart", item);
      this.$store.commit("updateTotalItem", 0);
      this.totalPrice = 0;
      this.totalQuantity = 0;
    },
    checkoutItem() {
      var cart = this.$store.state.cart;
      var checkout = JSON.parse(JSON.stringify(cart));

      this.$store.commit("checkout", checkout);
      localStorage.setItem(
        "checkout",
        JSON.stringify(this.$store.state.checkout)
      );
      this.removeItem();
    },
  },
};
</script>
