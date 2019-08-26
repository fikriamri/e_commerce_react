import React from "react";

function TransactionDetailsTableContain(props) {
  return (
    <tr>
      <td>
        <p>{props.number}</p>
      </td>
      <td>
        <p>{props.productName}</p>
      </td>
      <td>
        <p>{props.price}</p>
      </td>
      <td>
        <p>{props.qty}</p>
      </td>
    </tr>
  );
}

export default TransactionDetailsTableContain;
