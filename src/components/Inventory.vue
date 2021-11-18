<template>
  <div class="inventory">
    <div class="inventory__container">
      <div class="inventory__container-list">
        <div
          class="inventory__container-list-box"
          v-for="dt in hardCodeContent"
          :key="dt.id"
        >
          <h3>{{ dt.goods }}</h3>
          <button
            class="inventory__container-list-box-btn"
            @click="addToCart(dt.id, dt.goods, dt.price)"
          >
            Add to Cart
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quis, dolor nobis autem obcaecati aperiam eius ducimus omnis
            assumenda reprehenderit modi.
          </p>
          <div class="inventory__container-list-footer">
            <div class="inventory__container-list-footer-email">
              <p class="inventory__container-list-footer-email-name">
                {{ dt.name }}
              </p>
              <p class="inventory__container-list-footer-email-text">
                {{ dt.email }}
              </p>
            </div>
            <div class="inventory__container-list-footer-price">
              <span>$</span>
              <span>{{ dt.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <p>{{ a }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  components: {},
  data() {
    return {
      a: this.$store.state.title,
      listCart: this.$store.getters.getCartData,
      totalItem: this.$store.getters.getTotalItems,
      totalPriceItem: 0,
      hardCodeContent: [
        {
          id: 1,
          goods: "CAT Engine",
          name: "Colton",
          email: "col@gmail.com",
          price: 999.9,
        },
        {
          id: 2,
          goods: "MIKANO Engine",
          name: "Colton",
          email: "col@gmail.com",
          price: 650.9,
        },
        {
          id: 3,
          goods: "SEFANG Engine",
          name: "Anne",
          email: "anne@gmail.com",
          price: 619.9,
        },
        {
          id: 4,
          goods: "BMW Engine",
          name: "Irene",
          email: "irene@gmail.com",
          price: 319.9,
        },
        {
          id: 5,
          goods: "aaaa Engine",
          name: "Irene",
          email: "irene@gmail.com",
          price: 319.9,
        },
        {
          id: 6,
          goods: "pret Engine",
          name: "Irene",
          email: "irene@gmail.com",
          price: 319.9,
        },
        {
          id: 7,
          goods: "bruh Engine",
          name: "Irene",
          email: "irene@gmail.com",
          price: 319.9,
        },
        {
          id: 8,
          goods: "fla Engine",
          name: "Irene",
          email: "irene@gmail.com",
          price: 319.9,
        },
      ],
    };
  },
  computed: {
    getTotalItem() {
      return this.listCart.length;
    },
  },
  methods: {
    addToCart(id, goods, price) {
      let item = this.listCart.find((i) => i.id == id);
      if (item) {
        item.quantity++;
        item.totalprice = (item.quantity * price).toFixed(2);
      } else {
        this.totalPriceItem = this.listCart.quantity * price;
        this.listCart.push({
          id,
          goods,
          price,
          quantity: 1,
          totalprice: 1 * price,
        });
      }

      this.totalItem = this.getTotalItem;
      this.$store.commit("updateCart", this.listCart);
      this.$store.commit("updateTotalItem", this.totalItem);
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
      localStorage.setItem(
        "cartTotalItem",
        JSON.stringify(this.$store.state.totalItem)
      );
    },
  },
};
</script>
