<template>
  <section class="banner">
    <div class="text">
      <h1 class="is-size-2 ">Best Online Shopping Experience</h1>
      <p class="is-hidden-mobile">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam necessitatibu</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url(https://images.pexels.com/photos/929245/pexels-photo-929245.jpeg?cs=srgb&dl=background-board-bokeh-929245.jpg&fm=jpg);
  background-color: #777;
  height: 20rem;
  margin-top: -5rem;
  background-size: cover;
  background-blend-mode: luminosity;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  .text {
    margin-top: 5rem;
    color: white;
    h1 {
      text-shadow: 1px 2px 2px #222;
    }
    p {
      padding-left: 5rem;
      text-shadow: 1px 1px 1px #222;
    }
  }
}
</style>
