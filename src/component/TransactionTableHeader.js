import React from "react";

function TransactionTableHeader(props) {
  return (
    <tr>
      <td>
        <h6>No</h6>
      </td>
      <td>
        <h6>Total Qty</h6>
      </td>
      <td>
        <h6>Total Price</h6>
      </td>
      <td>
        <h6>Courier</h6>
      </td>
      <td>
        <h6>Payment Method</h6>
      </td>
      <td>
        <h6>Date</h6>
      </td>
    </tr>
  );
}

export default TransactionTableHeader;
