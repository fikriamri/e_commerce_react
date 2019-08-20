import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ItemDetail(props) {
  return (
    <div className="container px-0">
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-12 py-3">
          <img src={props.image} class="imagedetail w-100 px-2 shadow" />
        </div>
        <div className="col-md-6 col-sm-12 contain p-4 border shadow">
          <h4 class="font-weight-bold">{props.product_name}</h4>
          <p>{props.description}</p>
          <p>Rp. {props.price}</p>
          <p>Stock: {props.stock}</p>
          <p>Sold: {props.sold}</p>

          <div className="row">
            <div class="form-group col-sm-3">
              <label for="qty">Qty</label>
              <input
                type="number"
                class="form-control"
                id="qty"
                placeholder="1"
                onChange={props.handleChangeQty}
                // // value={props.value.client_secret}
              />
            </div>
          </div>
          <br />
          <div class="row text-right">
            <div class="col-6">
              <button
                type="button"
                class="btn btn-light btn-lg btn-block border"
              >
                Buy
              </button>
            </div>
            <div class="col-6">
              <button
                type="button"
                class="btn btn-danger btn-lg btn-block"
                onClick={props.handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
// export default connect(
//     "isLogin",
//     actions
// )(HeaderPublic);
