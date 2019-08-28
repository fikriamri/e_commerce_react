import React from "react";
import { Link } from "react-router-dom";

function ItemHome(props) {
  let styleDeleted = {};
  if (props.description === "deleted") {
    styleDeleted = { color: "red" };
  }
  return (
    <div className="item-home">
      <div
        className={
          "row justify-content-center shadow border mx-1 my-4 py-4 item-home2" +
          props.sellerClass
        }
      >
        <div className="col-12 text-center">
          <img
            className="imgitem-home w-100 shadow"
            src={props.image}
            alt="product"
          />
        </div>
        <div className="col-12 text-center">
          <h6 className="font-weight-bold">{props.product_name}</h6>
        </div>
        <div className="col-12 text-center">
          <span>Rp. {props.price}</span>
        </div>
        <div className="col-12 text-center">
          <span style={styleDeleted}>{props.description}</span>
        </div>
        <div className="col-12 text-center">
          <Link
            to={"/store/" + props.seller_id}
            style={{
              textDecoration: "none",
              color: "grey"
            }}
          >
            <span>{props.store_name}</span>
          </Link>
        </div>
        <div className="col-12 text-center">
          <span>{props.button}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemHome;
