import api from "../../api";
export default {
  namespace: true,
  state() {
    return {
      data: [],
      processing: true,
    };
  },

  getters: {
    getAllProduct() {
      api.getProductApi(res => {
        return res.data;
      });
    },
  },
  mutations: {
    getAllProduct(state) {
      api.getProductApi(res => {
        state.data = res.data;
        state.processing = false;
      });
    },
    addNewProduct(state, { product }) {
      state.data = [...state.data, product];
    },
    addNewProductJson(state, { product }) {
      state.processing = true;
      api.addNewProductApi(product.product, function() {
        api.getProductApi(res => {
          state.data = res.data;
          state.processing = false;
        });
      });
    },
    deleteProduct(state, id) {
      state.data = state.data.filter(i => i.id !== id);
    },
    deleteProductJson(state, id) {
      api.deleteProductApi(id, function() {
        state.data = state.data.filter(i => i.id !== id);
      });
    },
  },
  actions: {
    productAction({ commit }) {
      commit("getAllProduct");
    },
    addProductAction({ commit }, product) {
      commit("addNewProductJson", { product });
    },
    deleteProductAction({ commit }, id) {
      commit("deleteProductJson", id);
    },
  },
};
