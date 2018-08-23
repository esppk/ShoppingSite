<template>
  <div>
    <div class="div container">
      <div class="columns">
        <NavList class="column is-one-quarter"/>
        <ProdList class="column"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import ProdList from "@/components/ProdList";
import NavList from "@/components/NavList";
export default {
  components: {
    NavList,
    ProdList
  }
};
</script>

<style lang="scss" scoped>
  .container{
    max-width: 1000px;
  }
</style>

