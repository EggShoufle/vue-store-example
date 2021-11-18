import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    totalItem: 0,
    checkout: [],
  },
  getters: {
    getCartData: (state) => {
      return state.cart;
    },
    getTotalItem: (state) => {
      return state.totalItem;
    },
  },
  mutations: {
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      const total = localStorage.getItem("cartTotalItem");
      if (cart) {
        state.cart = JSON.parse(cart);
      }

      if (total) {
        state.totalItem = JSON.parse(total);
      }
    },

    updateCart(state, param) {
      state.cart = param;
    },

    updateTotalItem(state, param) {
      state.totalItem = param;
    },

    checkout(state, param) {
      state.checkout = param;
    },
  },
  actions: {},
  modules: {},
});
