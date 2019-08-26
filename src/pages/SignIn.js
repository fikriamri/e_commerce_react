import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderHomePublic from "../component/HeaderHomePublic";
import SignInForm from "../component/SignInForm";

const hostLogin = "http://0.0.0.0:5020/signin";

class SignInBuyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_key: "",
      client_secret: ""
    };
  }

  handleChangeClientKey = event => {
    this.setState({ client_key: event.target.value });
    console.log(this.state.client_key);
  };

  handleChangeClientSecret = event => {
    this.setState({ client_secret: event.target.value });
    console.log(this.state.client_secret);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const self = this;
    const reqPost = {
      method: "post",
      url: hostLogin,
      data: {
        client_key: this.state.client_key,
        client_secret: this.state.client_secret
      }
    };

    // Untuk mendapatkan token
    await axios(reqPost)
      .then(async function(response) {
        // self.setState({ listBooking: response.data.booking });
        localStorage.setItem("token", response.data.token);
        console.log("post", response);
        // Untuk mendapatkan client_key dan client_id
        const reqGet = {
          method: "get",
          url: hostLogin,
          headers: {
            Authorization: "Bearer " + response.data.token
          }
        };
        await axios(reqGet)
          .then(function(response) {
            // self.setState({ listBooking: response.data.booking });
            localStorage.setItem("client_id", response.data.claims.client_id);
            localStorage.setItem("client_key", response.data.claims.client_key);
            localStorage.setItem("status", response.data.claims.status);
            console.log("get", response);
          })
          .catch(function(error) {
            console.log("error", error);
          });
        self.movePage();
      })
      .catch(function(error) {
        alert("Invalid username or password!");
        console.log("error", error);
      });
  };

  movePage = () => {
    const status = JSON.parse(localStorage.getItem("status"));
    console.log("status", status);
    if (status === true) {
      // pindah ke halaman profile seller
      this.props.history.replace("/seller/profile");
    } else if (status === false) {
      // pindah ke halaman profile buyer
      this.props.history.replace("/profile");
    }
  };

  render() {
    return (
      <div>
        <HeaderHomePublic />
        <div className="container signin">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <SignInForm
                handleChangeClientKey={this.handleChangeClientKey}
                handleChangeClientSecret={this.handleChangeClientSecret}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "token",
  actions
)(SignInBuyer);
