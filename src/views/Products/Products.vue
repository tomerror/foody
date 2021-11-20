<template>
  <div class="home">
    {{ products }}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
export default {
  name: 'Products',
  computed: {
    ...mapGetters('products', ['getProducts']),
    products () {
      return this.getProducts;
    }
  }
}
</script>
