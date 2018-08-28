import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogIn: false,
    shoppingCart: [],
    isCartOpen: "",
    sortKey: ""
  },
  mutations: {
    addCart(state, payload) {
      let isAdded = false

      state.shoppingCart.forEach(prod => {
        if (prod.id === payload.id) {
          prod.count += 1
          isAdded = true
        }
      })
      if (!isAdded) {
        state.shoppingCart.push({ ...payload, count: 1 })
      }
    },
    emptyCart(state) {
      state.shoppingCart = []
    },
    deductCart(state, payload) {
      //let delIdx = null
      state.shoppingCart.forEach(prod => {
        if (prod.id === payload) {
          prod.count -= 1
          if (prod.count === 0) {
            state.shoppingCart = state.shoppingCart.filter(
              prod => prod.id !== payload
            )
          }
        }
      })
    },
    removeProd(state, payload) {
      state.shoppingCart = state.shoppingCart.filter(
        prod => prod.id !== payload
      )
    },
    openCart(state) {
      state.isCartOpen = "is-active"
    },
    closeCart(state) {
      state.isCartOpen = ""
    },
    setSortKey(state, payload) {
      state.sortKey = payload
    }
  },
  actions: {}
})
