import createStore from "unistore";
import axios from "axios";

const intialState = {
  // data
  allProduct: [],
  productByProductId: {},
  cart: [],
  cartByProductId: {},
  sellerProduct: [],
  transaction: [],
  transactionDetails: [],
  productCategoryId: 0,

  // data buyer
  buyerProfile: {
    buyer_details: {}
  },

  // data seller
  sellerProfile: {
    seller_details: {}
  },
  orderDetails: [],

  // host
  hostBase: "https://api.fikriamri.xyz",
  hostSignin: "/signin",
  hostAllProduct: "/product/all",
  hostSellerProduct: "/product/list",
  hostPostProduct: "/product",
  hostCart: "/cart",
  hostCheckout: "/checkout",
  hostTransactionDetails: "/transaction_details",
  hostOrderDetails: "/order_details",
  hostSellerProfile: "/seller/profile",
  hostBuyerProfile: "/profile",
  hostClient: "/client/"
};

export const store = createStore(intialState);

export const actions = store => ({
  async handleSignin(state, data) {
    const req = {
      method: "post",
      url: store.getState().hostBase + store.getState().hostSignin,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(async function(response) {
        localStorage.setItem("token", response.data.token);
        const reqGet = {
          method: "get",
          url: store.getState().hostBase + store.getState().hostSignin,
          headers: {
            Authorization: "Bearer " + response.data.token
          }
        };
        await axios(reqGet)
          .then(function(response) {
            localStorage.setItem("client_id", response.data.claims.client_id);
            localStorage.setItem("client_key", response.data.claims.client_key);
            localStorage.setItem("status", response.data.claims.status);
            console.log("get", response);
          })
          .catch(function(error) {
            console.log("error", error);
          });
      })
      .catch(error => {
        alert("Invalid username or password!");
        alert(error);
      });
  },

  // Fungsi untuk mendapatkan semua produk yang terdaftar di database
  async setAllProduct(state) {
    let url = store.getState().hostBase + store.getState().hostAllProduct;
    if (store.getState().productCategoryId !== 0) {
      url = url + "?product_category_id=" + store.getState().productCategoryId;
    }
    const req = {
      method: "get",
      url: url
    };
    await axios(req)
      .then(response => {
        store.setState({ allProduct: response.data });
      })
      .catch(error => {
        alert(error);
      });
  },

  setProductCategoryId(state, productCategoryId) {
    store.setState({ productCategoryId: productCategoryId });
  },

  async setSellerProduct(state) {
    const req = {
      method: "get",
      url: store.getState().hostBase + store.getState().hostSellerProduct,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ sellerProduct: response.data });
      })
      .catch(error => {
        alert(error);
      });
  },

  async setProductByProductId(state, product_id) {
    const req = {
      method: "get",
      url:
        store.getState().hostBase +
        store.getState().hostPostProduct +
        "?product_id=" +
        product_id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ productByProductId: response.data });
      })
      .catch(error => {
        alert(error);
      });
  },
  async handleSubmitProduct(state, data) {
    const req = {
      method: "post",
      url: store.getState().hostBase + store.getState().hostPostProduct,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {})
      .catch(error => {
        alert(error);
      });
  },
  async handleSubmitEditProduct(state, data) {
    const req = {
      method: "put",
      url:
        store.getState().hostBase +
        store.getState().hostPostProduct +
        "?product_id=" +
        data.product_id,
      data: data.data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {})
      .catch(error => {
        alert(error);
      });
  },

  async handleSubmitDeleteProduct(state) {
    const req = {
      method: "delete",
      url:
        store.getState().hostBase +
        store.getState().hostPostProduct +
        "?product_id=" +
        store.getState().productByProductId.id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {})
      .catch(error => {
        alert(error);
      });
  },

  async handleAddToCart(state, data) {
    const req = {
      method: "post",
      url: store.getState().hostBase + store.getState().hostCart,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {})
      .catch(error => {
        alert(error);
      });
  },

  async setCart(state) {
    const req = {
      method: "get",
      url: store.getState().hostBase + store.getState().hostCart + "/all",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ cart: response.data });
      })
      .catch(error => {
        alert(error);
      });
  },

  async setCartByProductId(state, product_id) {
    const req = {
      method: "get",
      url:
        store.getState().hostBase +
        store.getState().hostCart +
        "?product_id=" +
        product_id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ cartByProductId: response.data });
        console.log(response);
        console.log(store.getState().cartByProductId);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async handleSubmitEditCart(state, data) {
    const req = {
      method: "put",
      url: store.getState().hostBase + store.getState().hostCart,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async handleSubmitDeleteCart(state) {
    const req = {
      method: "delete",
      url:
        store.getState().hostBase +
        store.getState().hostCart +
        "?product_id=" +
        store.getState().cartByProductId.product_id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async checkout(state, data) {
    const req = {
      method: "post",
      url: store.getState().hostBase + store.getState().hostCheckout,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        if (response.data.status === "Cart Empty!") {
          alert("Cart Empty!");
        } else {
          // alert("Checkout Success! Please finish the payment");
        }
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },

  async setSellerProfile(state) {
    const req = {
      method: "get",
      url: store.getState().hostBase + store.getState().hostSellerProfile,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ sellerProfile: response.data });
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async setBuyerProfile(state) {
    const req = {
      method: "get",
      url: store.getState().hostBase + store.getState().hostBuyerProfile,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ buyerProfile: response.data });
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },

  async handleSubmitEditProfileSeller(state, data) {
    const req = {
      method: "put",
      url: store.getState().hostBase + store.getState().hostSellerProfile,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async handleSubmitEditProfileBuyer(state, data) {
    const req = {
      method: "put",
      url: store.getState().hostBase + store.getState().hostBuyerProfile,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async handleSubmitEditPassword(state, data) {
    const req = {
      method: "put",
      url:
        store.getState().hostBase +
        store.getState().hostClient +
        localStorage.getItem("client_id"),
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        console.log(response);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async setTransaction(state) {
    const req = {
      method: "get",
      url: store.getState().hostBase + store.getState().hostCheckout,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ transaction: response.data });
        console.log(store.getState().transaction);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async setTransactionDetails(state, transaction_id) {
    const req = {
      method: "get",
      url:
        store.getState().hostBase +
        store.getState().hostTransactionDetails +
        "?transaction_id=" +
        transaction_id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ transactionDetails: response.data });
        console.log(store.getState().transactionDetails);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  },
  async setOrderDetails(state) {
    const req = {
      method: "get",
      url: store.getState().hostBase + store.getState().hostOrderDetails,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ orderDetails: response.data });
        console.log(store.getState().orderDetails);
      })
      .catch(error => {
        console.log("Error", error);
        alert(error);
      });
  }
});
