import React from "react";

function ModalEditCart(props) {
  return (
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
              <p>{props.product_name}</p>
              <h6>Price</h6>
              <p>{props.price}</p>
              <label for="qty">Qty</label>
              <input
                type="number"
                class="form-control"
                id="qty"
                onChange={props.handleChangeQty}
                value={props.qty}
              />
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
              onClick={props.handleSubmitDeleteCart}
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#EditSuccess"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={props.handleSubmitEditCart}
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
  );
}

export default ModalEditCart;
