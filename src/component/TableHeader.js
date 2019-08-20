import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <td>
        <h6>No</h6>
      </td>
      <td>
        <h6>Product Name</h6>
      </td>
      <td>
        <h6>Price</h6>
      </td>
      <td>
        <h6>Qty</h6>
      </td>
      <td>
        <h6>{props.subTotal}</h6>
      </td>
    </tr>
  );
}

export default TableHeader;
// export default connect(
//     "isLogin",
//     actions
// )(HeaderPublic);
