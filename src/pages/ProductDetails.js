import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemDetail from "../component/ItemDetail";

const hostCart = "http://0.0.0.0:5020/cart";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    };
  }

  handleChangeQty = event => {
    this.setState({ qty: event.target.value });
    console.log("qty", this.state.qty);
  };

  handleAddToCart = async event => {
    event.preventDefault();
    const self = this;
    const status = JSON.parse(localStorage.getItem("status"));
    if (status == undefined) {
      // pindah ke halaman profile buyer
      alert("You have to sign in!");
      this.props.history.replace("/signin");
    } else {
      const req = {
        method: "post",
        url: hostCart,
        data: {
          product_id: self.props.match.params.id,
          qty: self.state.qty
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      };
      await axios(req)
        .then(function(response) {
          alert("Your product has been added to cart!");
          self.redirect();
          console.log(response.data);
          console.log(self.state.qty);
        })
        .catch(function(error) {
          alert(error);
          console.log("error", error);
        });
    }
  };

  redirect = () => {
    this.props.history.replace("/");
  };

  componentDidMount = async () => {
    this.props.setAllProduct();
  };

  render() {
    console.log(this.props.allProduct);
    console.log("param", this.props.match.params.id);
    return (
      <div>
        <HeaderBuyer />
        <div className="container home">
          <div className="row justify-content-center">
            {this.props.allProduct
              .filter(product => product.id == this.props.match.params.id)
              .map((item, index) => {
                return (
                  <ItemDetail
                    image={item.image}
                    product_name={item.product_name}
                    description={item.description}
                    price={item.price}
                    handleChangeQty={this.handleChangeQty}
                    handleAddToCart={this.handleAddToCart}
                    stock={item.stock}
                    sold={item.sold}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "allProduct",
  actions
)(ProductDetails);
