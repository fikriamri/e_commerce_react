import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemDetail from "../component/ItemDetail";
import ModalSuccess from "../component/ModalSuccess";
import Footer from "../component/Footer";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      qty: 1
    };
  }

  handleChangeQty = event => {
    this.setState({ qty: event.target.value });
    console.log("qty", this.state.qty);
  };

  handleAddToCart = async event => {
    event.preventDefault();
    const status = JSON.parse(localStorage.getItem("status"));
    if (status == undefined) {
      // pindah ke halaman profile buyer
      alert("You have to sign in!");
      this.props.history.replace("/signin");
    } else {
      const data = {
        product_id: this.props.match.params.id,
        qty: this.state.qty
      };
      await this.props.handleAddToCart(data);
    }
  };

  handleBuy = async event => {
    event.preventDefault();
    const status = JSON.parse(localStorage.getItem("status"));
    if (status == undefined) {
      // pindah ke halaman profile buyer
      alert("You have to sign in!");
      this.props.history.replace("/signin");
    } else {
      const data = {
        product_id: this.props.match.params.id,
        qty: this.state.qty
      };
      await this.props.handleAddToCart(data);
      this.props.history.replace("/cart");
    }
  };

  redirect = () => {
    this.props.history.replace("/");
  };

  handleCloseAddToCart = event => {
    this.props.history.push("/");
  };

  componentDidMount = async () => {
    this.props.setAllProduct();
    // this.setState({ product_id: this.props.match.params.id });
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
                    handleBuy={this.handleBuy}
                    handleAddToCart={this.handleAddToCart}
                    stock={item.stock}
                    sold={item.sold}
                  />
                );
              })}
          </div>
        </div>
        <Footer />
        {/* Modal Success */}
        <ModalSuccess
          id="AddToCart"
          title="Success!"
          body="This product has been added to your cart!"
          onClick={this.handleCloseAddToCart}
        />
      </div>
    );
  }
}

export default connect(
  "allProduct, hostBase",
  actions
)(ProductDetails);
