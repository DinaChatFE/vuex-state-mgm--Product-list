import axios from "axios";

export default {
  getProductApi: cb => {
    setTimeout(() => {
      axios
        .get("http://localhost:8090/data?_sort=created_at&_order=desc")
        .then(res => {
          cb(res);
        });
    }, 1000);
  },
  addNewProductApi: (product, cb) => {
    axios.post("http://localhost:8090/data", product).then(res => {
      cb(res);
    });
  },
  deleteProductApi: (id, cb) => {
    axios.delete("http://localhost:8090/data/" + id).then(res => {
      cb(res);
    });
  },
};
