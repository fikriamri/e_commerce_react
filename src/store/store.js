import createStore from "unistore";
import axios from "axios";

const intialState = {
  // data
  AllProduct: [],
  Cart: [],
  SellerProduct: [],

  // data buyer

  // data seller

  // token (sesuaikan dengan jwt claim)
  isLogin: 0,
  username: "",
  token: "",
  user_id: 0,
  user_status: 0
};

export const store = createStore(intialState);

export const actions = store => ({
  async getProduct(state) {
    await store
      .getState()
      .axiosNoToken.get(store.getState().productEndP + "cek")
      .then(response => {
        console.log(response);
        store.setState({ listProduct: response.data });
      })
      .catch(error => console.log("Error getProduct", error));
  },

  async Login(state, data) {
    await store.axiosNoToken
      .post("/login", data)
      .then(response => {
        store.setState({ token: response.data.token });
        store.setState({ user_id: response.data.client_id });
        store.setState({ user_status: response.data.status });
        store.setState({ isLogin: 1 });
      })
      .catch(error => {
        console.log("Error login", error);
        alert(error);
      });
  },

  setAllProduct(state, allProduct) {
    return { AllProduct: allProduct };
  },

  setSellerProduct(state, SellerProduct) {
    return { SellerProduct: SellerProduct };
  },

  setCart(state, Cart) {
    return { Cart: Cart };
  }
});
