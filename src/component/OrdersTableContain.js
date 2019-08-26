import React from "react";

function OrdersDetailsTableContain(props) {
  return (
    <tr>
      <td>
        <p>{props.number}</p>
      </td>
      <td>
        <p>{props.productId}</p>
      </td>
      <td>
        <p>{props.productName}</p>
      </td>
      <td>
        <p>{props.qty}</p>
      </td>
      <td>
        <p>{props.buyerAddress}</p>
      </td>
      <td>
        <p>{props.date}</p>
      </td>
      <td>
        <p>On Process</p>
      </td>
    </tr>
  );
}

export default OrdersDetailsTableContain;
