<template>
  <section>
    <Banner />
    <ShoppingCart />
  </section>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart"
import Banner from "@/components/Banner";
export default {
  components: {
    ShoppingCart,
    Banner
  }

}
</script>
