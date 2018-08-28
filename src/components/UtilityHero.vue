<template>
<section class="hero">
  <div class="hero-body">
    <div class="container level">
      <div class="level-item has-text-centered">
      </div>
      <div class="level-item has-text-centered">
        <div>
          <b-field label="Sorted By">
              <b-select placeholder="Select a key to sort" v-model="selectedKey">
                  <option
                    v-for="(option, i) in sortKeys"
                      :value="option.val"
                      :key="i">
                      {{ option.label }}
                  </option>
              </b-select>
          </b-field>
        </div>
      </div>
      <div class="level-item has-text-centered">
      </div>
      <div class="level-item has-text-centered">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Search" id="searchBox">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      selectedKey: "",
      sortKeys: [
        { label: "Price", val: "albumId" },
        { label: "Name", val: "title" },
        { label: "type", val: "albumId" }
      ]
    };
  },
  computed: {
    sortKey() {
      return this.$store.state.sortKey;
    }
  },
  watch: {
    selectedKey() {
      this.setSortKey(this.selectedKey);
    }
  },
  methods: {
    setSortKey(key) {
      this.$store.commit("setSortKey", key);
    }
  }
};
</script>

<style lang="scss" scoped>
#searchBox {
  border-width: 0 0 2px 0;
  box-shadow: none;
  border-radius: 0;
}
</style>
