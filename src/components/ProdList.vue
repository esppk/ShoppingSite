<template>
  <section>
    <div class="columns is-multiline is-centered ">
      <div class="column is-one-quarter" v-for="prod in prods" :key="prod.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3 toPointer" @click="goTo(prod.id)">
              <img :src="prod.url" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p @click="goTo(prod.id)" class="toPointer">{{ prod.title.slice(0, 12) }}</p>
              <div class="btnContainer">
                <p class="price has-text-weight-bold">
                  ${{ Math.abs(Math.round(10*prod.albumId*Math.sin(prod.id))) }}
                </p>
                <div>
                  <button class="button is-small">
                    <i class="material-icons">
                      favorite_border
                    </i>
                  </button>
                  <button class="button is-small" @click="addToCart(prod)">
                    <i class="material-icons">
                      shopping_cart
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-pagination
        :total="total"
        :current.sync="currentPage"
        order='is-centered'

        :rounded="true"
        :per-page="perPage">
    </b-pagination>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prods: null,
      total: 5000,
      currentPage: 1,
      perPage: 20,
      closeFunc: null
    };
  },
  computed:{
    sortKey(){
      return this.$store.state.sortKey
    }
  },
  created() {
    this.getData();
  },
  watch: {
    currentPage() {
      this.getData();
    },
    sortKey(){
      this.getData()
    }
  },
  methods: {
    async getData() {
      let prods = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_sort=${this.sortKey}&_page=${
          this.currentPage
        }&_limit=20`
      );
      this.prods = prods.data;
    },
    addToCart(prod) {
      clearTimeout(this.closeFunc)
      this.$store.commit("openCart")
      this.$store.commit("addCart", prod);
      this.closeFunc = setTimeout(()=>this.$store.commit("closeCart"), 3000)
      this.$toast.open({
              message: 'Add to Cart Successfully!',
              type: 'is-success',
              position: "is-top-right",
              queue:false
      })
    },
    goTo(id){
      this.$router.push({ name: 'SingleProd', params: { id }})
    }
  }
};
</script>

<style lang="scss" scoped>
.btnContainer {
  display: flex;
  justify-content: space-between;
}
.material-icons {
  font-size: inherit;
}
.card-content {
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
}
.toPointer{
  cursor: pointer;
}
</style>
