import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import "./index.css";
import products from "./store/modules/products";

const store = createStore({
  modules: {
    products,
  },
});

createApp(App)
  .use(store)
  .mount("#app");
