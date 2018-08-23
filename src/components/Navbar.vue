<template>
<vk-sticky :top="200">
  <nav class="navbar is-transparent is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>     
      <div class="navbar-burger burger" :class="burgerToggle" 
      @click="toggler"
      data-target="navbarMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarMenu" class="navbar-menu" :class="burgerToggle">
      <div class="navbar-start">
        <a class="navbar-item" href="#">
          Home
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" :class="isOpen">
          <a class="is-dark is-outlined is-inverted navbar-link">
              <span class="icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <span>Shopping Cart</span>
          </a>
          <div class="navbar-dropdown is-right">
            <p v-if="shoppingCart.length===0" class="navbar-item"><strong>Nothing Here Yet!</strong></p>
            <div class="navbar-item media" v-for="prod in shoppingCart" :key="prod.id">
              <figure class="media-left">
                <p class="image is-32x32">
                  <img :src="prod.thumbnailUrl" alt="prodImg">
                </p>
              </figure>
              <p class="cartPice">
                <span>{{ prod.title.slice(0, 10) }}</span>
                <span class="has-text-weight-bold">
                ${{ Math.abs(Math.round(10*prod.albumId*Math.sin(prod.id))) }}
                </span>
                <b-tag type="is-danger">{{ prod.count }}</b-tag>
              </p>    
            </div>
            <hr class="navbar-divider">
            <div class="navbar-item">
              <a class="button is-danger is-outlined is-small is-fullwidth" 
              @click="emptyCart"
              >Empty Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</vk-sticky>
</template>


<script>
export default {
  data() {
    return {
      burgerToggle: ""
    };
  },
  computed: {
    shoppingCart(){
      return this.$store.state.shoppingCart
    },
    isOpen(){
      return this.$store.state.isCartOpen
    }
  },
  methods: {
    toggler() {
      if (!this.burgerToggle) {
        this.burgerToggle = "is-active";
      } else {
        this.burgerToggle = "";
      }
    },
    emptyCart(){
      this.$store.commit("emptyCart")
    }
  }
};
</script>

<style lang="scss" scoped>
  .is-dark{
    opacity: 0.8;
  }
  .cartPice{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .navbar-dropdown{
    width: 15rem;
  }
</style>

