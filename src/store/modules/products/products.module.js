import { fetchProducts } from './products.utils';
export default {
    namespaced: true,
    state: {
        products: {}
    },
    mutations: {
        setProducts (state, { products }) {
            state.products = {
                fruits: products.filter(product => product.type === 'fruits'),
                vegetables: products.filter(product => product.type === 'vegetables'),
                greens: products.filter(product => product.type === 'greens'),
                party: products.filter(product => product.type === 'party')
            }
        },
    },
    actions: {
        async loadProducts ({ commit }) {
            const products = await fetchProducts();
            commit('setProducts', { products });
        }
    },
    getters: {
        getProducts: (state) => state.products,
        getFruits: (state) => state.products.fruits,
        getVegetables: (state) => [...state.products.fruits, ...state.products.greens]
    }
};
