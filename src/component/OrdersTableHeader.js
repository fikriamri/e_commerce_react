import React from "react";

function OrdersTableHeader(props) {
  return (
    <tr>
      <td>
        <h6>No</h6>
      </td>
      <td>
        <h6>Product Id</h6>
      </td>
      <td>
        <h6>Product Name</h6>
      </td>
      <td>
        <h6>Qty</h6>
      </td>
      <td>
        <h6>Buyer Address</h6>
      </td>
      <td>
        <h6>Order Date</h6>
      </td>
      <td>
        <h6>Status</h6>
      </td>
    </tr>
  );
}

export default OrdersTableHeader;
