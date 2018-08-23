// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Buefy from "buefy";
import store from "./store";
import router from "./router";
import "buefy/lib/buefy.css";
import Vuikit from "vuikit";
Vue.use(Vuikit);
Vue.use(Buefy, {
  defaultIconPack: "fas"
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
