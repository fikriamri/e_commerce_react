import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemDetail from "../component/ItemDetail";

const host = "http://0.0.0.0:5050/product/all";
const hostCart = "http://0.0.0.0:5050/cart";

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
    // alert("Your product has been added to cart!");
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
          // alert(error);
          console.log("error", error);
        });
    }
  };

  redirect = () => {
    this.props.history.replace("/");
  };

  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: host
    };
    await axios(req)
      .then(function(response) {
        self.props.setAllProduct(response.data);
        // self.setState({ listBooking: response.data.booking });
        // self.props.history.replace("/");
        console.log(response.data);
        console.log(self.props.AllProduct);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
  };

  render() {
    console.log(this.props.AllProduct);
    console.log("param", this.props.match.params.id);
    return (
      <div>
        <HeaderBuyer />
        <div className="container home">
          <div className="row justify-content-center">
            {this.props.AllProduct.filter(
              product => product.id == this.props.match.params.id
            ).map((item, index) => {
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

// export default HomeBuyer;
export default connect(
  "AllProduct",
  actions
)(ProductDetails);
