<template>

  <div class="column">
    <transition-group tag="ul"
    name="cartItem">
      <div class="media box is-radiusless is-marginless" v-for="prod in shoppingCart" :key="prod.id">
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
              <p>
                <span class="has-text-weight-bold has-text-danger">
                ${{ Math.abs(Math.round(10*prod.albumId*Math.sin(prod.id))) }}
                </span>
              </p>
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
    </transition-group>  
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

.cartItem {
  &-move {
    transition: all 300ms ease-in-out 50ms;
  }
  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    width: 100%;
    z-index: 0;
  }
  &-leave-to {
    opacity: 0;
  }
}
</style>
