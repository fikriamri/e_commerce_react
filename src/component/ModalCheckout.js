import React from "react";

function ModalCheckout(props) {
  return (
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
                onChange={props.handleChangeCourier}
              >
                <option value="JNE">JNE</option>
                <option value="POS">POS</option>
                <option value="JNT">JNT</option>
              </select>
              <label for="payment_method">Payment Method</label>
              <select
                className="browser-default custom-select"
                id="payment_method"
                onChange={props.handleChangePaymentMethod}
              >
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="OVO">OVO</option>
                <option value="Go-Pay">Go-Pay</option>
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
              onClick={props.handleCheckout}
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#Checkout"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCheckout;
