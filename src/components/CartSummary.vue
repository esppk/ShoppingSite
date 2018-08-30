<template>
  <nav class="panel column is-one-quarter">
    <p class="panel-heading has-text-weight-bold">
      Summary
    </p>
    <div class="panel-block has-text-weight-bold">
      <p>Product Name</p>
      <p>Count</p>
      <p>Total Price</p>
    </div>
    <div class="panel-block media is-marginless" v-for="prod in shoppingCart" :key="prod.id" >
        <span class="prodTitle">{{ prod.title.slice(0, 10) }}</span>
        <b-tag type="is-danger">{{ prod.count }}</b-tag>
        <span class="has-text-weight-bold totalPrice">
        ${{ Math.abs(Math.round(10*prod.albumId*Math.sin(prod.id)))*prod.count }}
        </span>
    </div>
    <p class="panel-heading has-text-weight-bold">
      Summary
    </p>
    <div class="panel-block">
      <button class="button is-success is-fullwidth"
      @click="$emit('checkout')"
      >CHECK OUT</button>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-block {
  display: flex;
  justify-content: space-between;
  .totalPrice {
    width: 30%;
    text-align: right;
  }
  .prodTitle {
    width: 50%;
  }
}
</style>
