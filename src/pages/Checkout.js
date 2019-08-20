import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import TableHeader from "../component/TableHeader";
import TableContain from "../component/TableContain";

const host = "http://0.0.0.0:5050/product/all";
const hostCart = "http://0.0.0.0:5050/cart";

class Checkout extends React.Component {
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

        console.log(response.data);
        console.log(self.state.qty);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
  };

  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: hostCart,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.setCart(response.data);
        // self.setState({ listBooking: response.data.booking });
        // self.props.history.replace("/");
        console.log(response.data);
        console.log(self.props.Cart);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
  };

  render() {
    let total = 0;
    return (
      <div>
        <HeaderBuyer />
        <div className="container home">
          <div className="row justify-content-center text-center">
            <div className="col-md12">
              <h4>Checkout</h4>
            </div>
            <div className="container cart">
              <div className="row justify-content-center">
                <div className="col-md4">
                  <table className="cart-table">
                    <tbody>
                      <TableHeader subTotal="Sub Total" />

                      {this.props.Cart.map((item, index) => {
                        {
                          total += item.price * item.qty;
                        }
                        return (
                          <TableContain
                            number={index + 1}
                            product_name={item.product_name}
                            price={item.price}
                            qty={item.qty}
                            subTotal={item.price * item.qty}
                          />
                        );
                      })}
                      <tr>
                        <td>
                          <p />
                        </td>
                        <td className="product-name">
                          <p />
                        </td>
                        <td>
                          <p />
                        </td>
                        <td>
                          <p>Total</p>
                        </td>
                        <td>
                          <p>{total}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    <div class="row text-right button-cart">
                      <div class="col-12">
                        <button
                          type="button"
                          class="btn btn-danger"
                          // onClick={props.handleAddToCart}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default HomeBuyer;
export default connect(
  "AllProduct, Cart",
  actions
)(Checkout);
