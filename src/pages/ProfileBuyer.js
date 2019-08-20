import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemHome from "../component/ItemHome";


class ProfileBuyer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderBuyer />
        <div className="container profile">
          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <h4>Profile</h4>
              <div className="col-md4">
                <table className="cart-table">
                  <tbody>
                    {/* <TableHeader subTotal="Sub Total" /> */}
                    <tr>
                      <td>
                        <p />
                      </td>
                      <td className="product-name">
                        <p />
                      </td>
                      <td>
                        <p />
                      </td>
                      <td>{/* <p>Total</p> */}</td>
                      <td>{/* <p>{total}</p> */}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileBuyer;
// export default connect(
//     "listzodiac,listimage,listDailyZodiac",
//     actions
// )(Home);
