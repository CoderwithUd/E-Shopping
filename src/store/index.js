import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      // Check if product already exists in cart
      let item = state.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    // Add more mutations as needed, like remove from cart, update quantity, etc.
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItemCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
  },
});

export default store;
