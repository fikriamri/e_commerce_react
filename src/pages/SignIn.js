import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderHomePublic from "../component/HeaderHomePublic";
import SignInForm from "../component/SignInForm";
import Footer from "../component/Footer";

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
    const data = {
      client_key: this.state.client_key,
      client_secret: this.state.client_secret
    };
    await this.props.handleSignin(data);
    this.movePage();
  };

  movePage = () => {
    const status = JSON.parse(localStorage.getItem("status"));
    console.log("status", status);
    if (status === true) {
      // pindah ke halaman profile seller
      this.props.history.replace("/seller");
    } else if (status === false) {
      // pindah ke halaman profile buyer
      this.props.history.replace("/");
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
        <Footer />
      </div>
    );
  }
}

export default connect(
  "token, hostBase",
  actions
)(SignInBuyer);
