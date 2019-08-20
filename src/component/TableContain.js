import React from "react";

function TableContain(props) {
  return (
    <tr>
      <td>
        <p>{props.number}</p>
      </td>
      <td>
        <p className="product-name">{props.product_name}</p>
      </td>
      <td>
        <p>{props.price}</p>
      </td>
      <td>
        <p>{props.qty}</p>
      </td>
      <td>
        <p>{props.subTotal}</p>
      </td>
    </tr>
  );
}

export default TableContain;
