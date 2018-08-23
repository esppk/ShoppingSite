<template>
  <section>
    <div class="columns is-multiline is-centered ">
      <div class="column is-one-quarter" v-for="prod in prods" :key="prod.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="prod.url" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p>{{ prod.title.slice(0, 12) }}</p>
              <div class="btnContainer">
                <button class="button is-small">
                  <i class="material-icons">
                    favorite_border
                  </i>
                </button>
                <button class="button is-small">
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
    <b-pagination
        :total="total"
        :current.sync="currentPage"
        order='is-centered'

        rounded="isRounded"
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
      perPage: 20
    };
  },
  created() {
    this.getData();
  },
  watch: {
    currentPage() {
      this.getData();
    }
  },
  methods: {
    async getData() {
      let prods = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${
          this.currentPage
        }&_limit=20`
      );
      this.prods = prods.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.btnContainer {
  display: flex;
  justify-content: flex-end;
}
.material-icons{
  font-size: inherit;
}
.card-content{
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
}
</style>
