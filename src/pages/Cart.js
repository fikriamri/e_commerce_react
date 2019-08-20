import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import TableHeader from "../component/TableHeader";
import TableContain from "../component/TableContain";

const hostCart = "http://0.0.0.0:5050/cart";
const hostCheckout = "http://0.0.0.0:5050/checkout";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courier: "JNE",
      payment_method: "Bank Transfer"
    };
  }

  handleChangeCourier = event => {
    this.setState({ courier: event.target.value });
    console.log("crr", this.state.courier);
  };

  handleChangePaymentMethod = event => {
    this.setState({ payment_method: event.target.value });
    console.log("pymnt", this.state.payment_method);
  };

  handleCheckout = async event => {
    event.preventDefault();
    // alert("Your product has been added to cart!");
    const self = this;
    const req = {
      method: "post",
      url: hostCheckout,
      data: {
        courier: self.state.courier,
        payment_method: self.state.payment_method
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        if (response.data.status == "Cart Empty!") {
          alert("Cart Empty!");
        } else {
          alert("Checkout Success! Please finish the payment");
        }
        console.log(response.data);
        self.redirect();

        // console.log(self.state.qty);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
  };

  redirect = () => {
    this.props.history.replace("/");
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
              <h4>Cart</h4>
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
                            subTotal={
                              item.price * item.qty
                              //   <button
                              //     type="button"
                              //     class="btn btn-outline-danger"
                              //     // onClick={props.handleAddToCart}
                              //   >
                              //     x
                              //   </button>
                            }
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
                    <div className="row justify-content-center">
                      <div class="form-group col-md-6">
                        <label for="courier">Courier</label>
                        <select
                          className="browser-default custom-select"
                          id="courier"
                          onChange={this.handleChangeCourier}
                        >
                          <option value="JNE">JNE</option>
                          <option value="POS">POS</option>
                          <option value="JNT">JNT</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="payment_method">Payment Method</label>
                        <select
                          className="browser-default custom-select"
                          id="payment_method"
                          onChange={this.handleChangePaymentMethod}
                        >
                          <option value="bank_transfer">Bank Transfer</option>
                          <option value="ovo">OVO</option>
                          <option value="go_pay">Go-Pay</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div class="row text-right button-cart">
                      <div class="col-12">
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={this.handleCheckout}
                        >
                          Checkout
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
)(Cart);
