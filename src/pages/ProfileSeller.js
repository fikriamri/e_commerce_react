import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderHomePublic from "../component/HeaderHomePublic";
import HeaderSeller from "../component/HeaderSeller";
import ItemHome from "../component/ItemHome";

class ProfileSeller extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderSeller />
        <div className="container profile">
          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <h4>Profile</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSeller;
// export default connect(
//     "listzodiac,listimage,listDailyZodiac",
//     actions
// )(Home);
