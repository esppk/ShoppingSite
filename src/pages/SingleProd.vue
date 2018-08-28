<template>
<section>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="prod.url" alt="Placeholder image">
            </figure>
          </div>
        </div>
      </div>
      <div class="sideInfo">
        <div>
          <h1 class="is-size-1">{{ prod.title.slice(0,12) }}</h1>
          <h3 class="is-size-3 has-text-weight-bold"> ${{ Math.abs(Math.round(10*prod.albumId*Math.sin(prod.id))) }}</h3>
        </div>  
        <div>
          <b-field label="Amount">
              <b-select placeholder="Select Amount" 
              v-model="selectedAmount"
              expanded>
                  <option
                      v-for="option in amount"
                      :value="option"
                      :key="option">
                      {{ option }}
                  </option>
              </b-select>   
          </b-field>
          <button class="button is-fullwidth is-danger is-outlined
            has-text-weight-bold
            is-radiusless"
            @click="addToCart"
            ><span class="icon is-small">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <span>ADD TO CART</span>
          </button>
        </div>

      </div>
    </div>
    <section class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Tweets</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Following</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </section>
    <div class="content">
      <h1>Hello World</h1>
      <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
      <h2>Second level</h2>
      <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prod: null,
      selectedAmount: 0,
      amount: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  async created() {
    const prod = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}`
    );
    this.prod = prod.data;
    console.log(this.prod);
  },
  methods: {
    addToCart() {
      this.$store.commit("openCart");
      for (var i = 0; i < this.selectedAmount; i++) {
        this.$store.commit("addCart", this.prod);
      }
      this.closeFunc = setTimeout(() => this.$store.commit("closeCart"), 5000);
      this.$toast.open({
        message: "Add to Cart Successfully!",
        type: "is-success",
        position: "is-top-right",
        queue: false
      });
    }
  }
};
</script>




<style lang="scss" scoped>
.container {
  max-width: 90vw;
  margin-top: 3rem;
}
.card {
  margin-right: 4rem;
}
.sideInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content {
  margin: 0 5rem;
}

.level {
  margin: 5rem 0rem;
  height: 10rem;
  background-image: url(https://images.pexels.com/photos/461302/pexels-photo-461302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-color: #777;
  background-size: cover;
  background-blend-mode: luminosity;
  background-attachment: fixed;
}
</style>
