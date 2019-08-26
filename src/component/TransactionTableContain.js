import React from "react";

function TransactionTableContain(props) {
  return (
    <tr>
      <td>
        <p>{props.number}</p>
      </td>
      <td>
        <p>{props.totalQty}</p>
      </td>
      <td>
        <p>{props.totalPrice}</p>
      </td>
      <td>
        <p>{props.courier}</p>
      </td>
      <td>
        <p>{props.paymentMethod}</p>
      </td>
      <td>
        <p>{props.date}</p>
      </td>
      <td>
        <p>{props.details}</p>
      </td>
    </tr>
  );
}

export default TransactionTableContain;
