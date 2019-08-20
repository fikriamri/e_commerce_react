import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ItemHome(props) {
  return (
    <div className="item-home">
      <div className="row justify-content-center shadow border mx-1 my-4 py-4 item-home2">
        <div className="col-12 text-center">
          <img
            className="imgitem-home w-100 shadow"
            src={props.image}
            alt="logo"
          />
        </div>
        <div className="col-12 text-center">
          <h6 className="font-weight-bold">{props.product_name}</h6>
        </div>
        <div className="col-12 text-center">
          <span>Rp. {props.price}</span>
        </div>
        <div className="col-12 text-center">
          <Link
            to={"/store/" + props.seller_id}
            style={{
              textDecoration: "none",
              color: "grey"
              // linkStyle
            }}
          >
            <span>{props.store_name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemHome;
// export default connect(
//     "isLogin",
//     actions
// )(HeaderPublic);
