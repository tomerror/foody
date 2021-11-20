<template>
  <div class="home">
    <products />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import Products from './Products/Products.vue';
export default {
  name: 'Home',
  components: {
    Products
  },
  created () {
    this.loadProducts();
  },
  methods: {
    ...mapActions('products', ['loadProducts'])
  }
}
</script>
