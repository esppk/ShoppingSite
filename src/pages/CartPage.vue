<template>
  <section>
    <Banner />
    <div class="container">
      <div class="columns" v-if="$store.state.shoppingCart.length!==0">
        <ShoppingCart/>
        <CartSummary @checkout="onCheckout"/>
      </div>
      <PlaceHolder v-if="$store.state.shoppingCart.length===0"/>
    </div>
  </section>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart"
import CartSummary from "@/components/CartSummary"
import PlaceHolder from "@/components/PlaceHolder"
import Banner from "@/components/Banner"
export default {
  components: {
    ShoppingCart,
    Banner,
    CartSummary,
    PlaceHolder
  },
  methods: {
    onCheckout() {
      this.$snackbar.open({
        message: "Thank you for your purchase!",
        type: "is-success",
        position: "is-top",
        actionText: "OK",
        indefinite: true,
        onAction: () => {
          this.$router.push("/")
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 3.5rem;
  max-width: 800rem;
}
</style>
