<template>

    <div class="column">
      <div class="media box" v-for="(prod, i) in shoppingCart" :key="i">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="prod.thumbnailUrl">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <strong>
              {{ prod.title }}
            </strong>
          </div>
        </div>
        <div class="media-right ">
          <div class="buttons has-addons amountControl">
            <span class="button is-success is-small"
              @click='increase(prod)' >
            <strong>+</strong>
            </span>
            <span class="button is-small">{{prod.count}}</span>
            <span class="button is-success is-small"
            @click='decrease(prod.id)'
            ><strong>-</strong></span>
          </div>  
        </div> 
        <div class="media-right">
          <button class="delete" @click="removeProd(prod.id)"></button>
        </div> 
      </div>
    </div>

</template>


<script>
export default {
  mounted() {
    this.$store.commit("closeCart")
    this.$nextTick(window.scrollTo(0, 0))
  },
  data() {
    return {
      amount: 3
    }
  },
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart
    }
  },
  methods: {
    increase(prod) {
      this.$store.commit("addCart", prod)
    },
    decrease(idx) {
      this.$store.commit("deductCart", idx)
    },
    removeProd(idx) {
      this.$store.commit("removeProd", idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.amountControl {
  margin-top: 20%;
}
</style>
