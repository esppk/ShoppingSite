<template>
<vk-sticky show-on-up>
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
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                <span>
                  Tweet
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-dark-outlined" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                <span>Shopping Cart</span>
              </a>
            </p>
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
  methods: {
    toggler() {
      if (!this.burgerToggle) {
        this.burgerToggle = "is-active";
      } else {
        this.burgerToggle = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .is-dark{
    opacity: 0.8;
  }
</style>

