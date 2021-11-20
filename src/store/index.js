import { createStore } from 'vuex';
import productModule from './modules/products/products.module';

export default createStore({
  modules: {
    products: productModule
  }
})
