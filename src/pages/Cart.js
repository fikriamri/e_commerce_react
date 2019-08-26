import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import CartTableHeader from "../component/CartTableHeader";
import CartTableContain from "../component/CartTableContain";

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
    this.redirect();
  };

  handleEdit = product_id => async event => {
    event.preventDefault();
    await this.props.setCartByProductId(product_id);
    this.setState({ qty: this.props.cartByProductId.qty });
  };

  handleSubmitEditCart = event => {
    event.preventDefault();
    const data = {
      product_id: this.props.cartByProductId.product_id,
      qty: this.state.qty
    };
    this.props.handleSubmitEditCart(data);
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
        {/* Modal Edit Cart */}
        <div
          class="modal fade"
          id="EditCart"
          tabindex="-1"
          role="dialog"
          aria-labelledby="EditCart"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="EditCart">
                  Edit Cart
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <h6>Product Name</h6>
                  <p>{this.props.cartByProductId.product_name}</p>
                  <h6>Price</h6>
                  <p>{this.props.cartByProductId.price}</p>
                  <label for="qty">Qty</label>
                  <input
                    type="number"
                    class="form-control"
                    id="qty"
                    onChange={this.handleChangeQty}
                    value={this.state.qty}
                  />
                  {console.log(this.state.qty)}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={this.props.handleSubmitDeleteCart}
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#EditSuccess"
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleSubmitEditCart}
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#EditSuccess"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Checkout */}
        <div
          class="modal fade"
          id="checkout"
          tabindex="-1"
          role="dialog"
          aria-labelledby="checkout"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="checkout">
                  Checkout
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
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
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={this.handleCheckout}
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#EditSuccess"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Edit Success */}
        <div
          class="modal fade"
          id="EditSuccess"
          tabindex="-1"
          role="dialog"
          aria-labelledby="EditTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="EditTitle">
                  Your changes has been submitted!
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Please refresh page to apply the changes!
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "AllProduct, cart, cartByProductId",
  actions
)(Cart);
