<template>
  <div id="app">
    <Navbar/>
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import FooterComp from "./components/FooterComp";
export default {
  name: "App",
  components: {
    Navbar,
    FooterComp
  }
};
</script>

<style>

</style>
