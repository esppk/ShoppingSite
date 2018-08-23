<template>
  <div>
    <Banner />
    <div class="div container">
      <div class="columns">
        <NavList class="column is-one-quarter is-hidden-touch"/>
        <ProdList class="column "/>
      </div>
    </div>
    
  </div>
</template>

<script>
import ProdList from "@/components/ProdList";
import NavList from "@/components/NavList";
import Banner from "@/components/Banner";
export default {
  components: {
    NavList,
    ProdList,
    Banner
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
}
</style>
