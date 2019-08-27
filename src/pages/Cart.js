import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import CartTableHeader from "../component/CartTableHeader";
import CartTableContain from "../component/CartTableContain";
import ModalEditCart from "../component/ModalEditCart";
import ModalCheckout from "../component/ModalCheckout";
import ModalSuccess from "../component/ModalSuccess";
import Footer from "../component/Footer";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courier: "JNE",
      payment_method: "Bank Transfer",
      qty: 1
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

  handleChangeQty = event => {
    this.setState({ qty: event.target.value });
    console.log("qty", this.state.qty);
  };

  handleCheckout = event => {
    event.preventDefault();
    const data = {
      courier: this.state.courier,
      payment_method: this.state.payment_method
    };
    this.props.checkout(data);
  };

  handleCloseCheckout = event => {
    event.preventDefault();
    this.redirect();
  };

  handleEdit = product_id => async event => {
    event.preventDefault();
    await this.props.setCartByProductId(product_id);
    this.setState({ qty: this.props.cartByProductId.qty });
  };

  handleSubmitEditCart = async event => {
    event.preventDefault();
    const data = {
      product_id: this.props.cartByProductId.product_id,
      qty: this.state.qty
    };
    await this.props.handleSubmitEditCart(data);
    this.props.setCart();
  };

  handleSubmitDeleteCart = async event => {
    event.preventDefault();
    await this.props.handleSubmitDeleteCart();
    await this.props.setCart();
  };

  redirect = () => {
    this.props.history.replace("/");
  };

  componentDidMount = async () => {
    this.props.setCart();
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
                      <CartTableHeader subTotal="Sub Total" />

                      {this.props.cart.map((item, index) => {
                        total += item.price * item.qty;
                        return (
                          <CartTableContain
                            number={index + 1}
                            product_name={item.product_name}
                            price={item.price}
                            qty={item.qty}
                            subTotal={item.price * item.qty}
                            edit={
                              <button
                                type="button"
                                class="btn btn-info"
                                onClick={this.handleEdit(item.product_id)}
                                data-toggle="modal"
                                data-target="#EditCart"
                              >
                                Edit
                              </button>
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
                    <div class="row text-right button-cart">
                      <div class="col-12">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-toggle="modal"
                          data-target="#checkout"
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
        <Footer />
        {/* Modal Edit Cart */}
        <ModalEditCart
          product_name={this.props.cartByProductId.product_name}
          price={this.props.cartByProductId.price}
          handleChangeQty={this.handleChangeQty}
          qty={this.state.qty}
          handleSubmitDeleteCart={this.handleSubmitDeleteCart}
          handleSubmitEditCart={this.handleSubmitEditCart}
        />
        {/* Modal Checkout */}
        <ModalCheckout
          handleChangeCourier={this.handleChangeCourier}
          handleChangePaymentMethod={this.handleChangePaymentMethod}
          handleCheckout={this.handleCheckout}
        />
        {/* Modal Edit Success */}
        <ModalSuccess
          id="EditSuccess"
          title="Success!"
          body="Your changes has been submitted!"
        />
        <ModalSuccess
          id="Checkout"
          title="Success!"
          body="Your transaction has been recorded!"
          onClick={this.handleCloseCheckout}
        />
      </div>
    );
  }
}

export default connect(
  "AllProduct, cart, cartByProductId",
  actions
)(Cart);
