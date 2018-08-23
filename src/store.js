import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogIn: false,
    token: "",
    userName: "Emrick",
    shoppingCart: [],
    isCartOpen: ""
  },
  mutations: {
    doLogIn(state) {
      state.isLogIn = true;
    },
    logOut(state) {
      state.isLogIn = false;
    },
    setToken(state, tok) {
      state.token = tok;
    },
    addCart(state, payload) {
      let isAdded = false;

      state.shoppingCart.forEach(prod => {
        if (prod.id === payload.id) {
          prod.count += 1;
          isAdded = true;
        }
      });

      if (!isAdded) {
        state.shoppingCart.push({ ...payload, count: 1 });
      }
    },
    emptyCart(state) {
      state.shoppingCart = [];
    },
    openCart(state) {
      state.isCartOpen = "is-active";
    },
    closeCart(state) {
      state.isCartOpen = "";
    }
  },
  actions: {}
});
