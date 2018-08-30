<template>
  <div>
    <Banner />
    <UtilityHero />
    <div class="container">
      <div class="columns">
        <NavList class="column is-one-quarter is-hidden-touch"/>
        <ProdList class="column "/>
      </div>
    </div>
    
  </div>
</template>

<script>
import ProdList from "@/components/ProdList"
import NavList from "@/components/NavList"
import Banner from "@/components/Banner"
import UtilityHero from "@/components/UtilityHero"
export default {
  components: {
    NavList,
    ProdList,
    Banner,
    UtilityHero
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
}
</style>
