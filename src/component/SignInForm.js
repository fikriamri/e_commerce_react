import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function SignInForm(props) {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <h4>Sign In</h4>
      </div>
      <form>
        <div className="row justify-content-center" />
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
            <button
              //   type="submit"
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

export default SignInForm;
// export default connect(
//     "isLogin",
//     actions
// )(HeaderPublic);
