<template>
  <div class="content">
    <Inventory></Inventory>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Inventory from "@/components/Inventory.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Inventory,
  },
};
</script>
