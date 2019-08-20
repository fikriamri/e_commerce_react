import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function SignUpBuyerForm(props) {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <h4>BuyerSign Up Form</h4>
      </div>
      <form>
        <div className="row justify-content-center" />
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="fullname">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullname"
              placeholder="full name"
              onChange={props.handleChangeName}
              // // value={props.value.name}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="username">Username</label>
            <input
              type="username"
              class="form-control"
              id="username"
              placeholder="username"
              onChange={props.handleChangeClientKey}
              // // value={props.value.client_key}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              onChange={props.handleChangeClientSecret}
              // // value={props.value.client_secret}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="example@example.com"
              onChange={props.handleChangeEmail}
              // // value={props.value.email}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="phone_number">Phone Number</label>
            <input
              type="text"
              class="form-control"
              id="phone_number"
              placeholder="phone number "
              onChange={props.handleChangePhoneNumber}
              // // value={props.value.phone_number}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="full_address">Full Address</label>
            <input
              type="text"
              class="form-control"
              id="full_address"
              placeholder="full address"
              onChange={props.handleChangeAddress}
              // // value={props.value.address}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="postal_code">Postal Code</label>
            <input
              type="text"
              class="form-control"
              id="postal_code"
              placeholder="postal code"
              onChange={props.handleChangePostalCode}
              // // value={props.value.postal_code}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <button
              class="btn btn-primary btn-lg btn-block"
              onClick={props.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpBuyerForm;
// export default connect(
//     "isLogin",
//     actions
// )(HeaderPublic);
