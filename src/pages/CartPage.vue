<template>
  <section>
    <Banner />
    <div class="container">
      <div class="columns">
        <ShoppingCart/>
        <CartSummary @checkout="onCheckout"/>
      </div>
    </div>

    
  </section>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart"
import CartSummary from "@/components/CartSummary"
import Banner from "@/components/Banner"
export default {
  components: {
    ShoppingCart,
    Banner,
    CartSummary
  },
  methods: {
    onCheckout(){
      this.$snackbar.open({
                    message: 'Thank you for your purchase!',
                    type: 'is-success',
                    position: 'is-top',
                    actionText: 'OK',
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
.container{
  margin-top: 3.5rem;
  max-width: 800rem;
}
</style>

