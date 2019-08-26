import React from "react";

function ItemHome(props) {
  return (
    <tr>
      <td className="title">{props.title}</td>
      <td className="colon">:</td>
      <td className="contain">{props.contain}</td>
    </tr>
  );
}

export default ItemHome;
