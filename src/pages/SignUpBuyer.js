import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderHomePublic from "../component/HeaderHomePublic";
import SignUpBuyerForm from "../component/SignUpBuyerForm";

const host = "http://0.0.0.0:5050/signup";

class SignUpBuyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_key: "",
      client_secret: "",
      name: "",
      email: "",
      phone_number: "",
      address: "",
      postal_code: ""
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

  handleChangeName = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };

  handleChangePhoneNumber = event => {
    this.setState({ phone_number: event.target.value });
    console.log(this.state.phone_number);
  };

  handleChangeAddress = event => {
    this.setState({ address: event.target.value });
    console.log(this.state.address);
  };

  handleChangePostalCode = event => {
    this.setState({ postal_code: event.target.value });
    console.log(this.state.postal_code);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const self = this;
    const req = {
      method: "post",
      url: host,
      data: {
        client_key: this.state.client_key,
        client_secret: this.state.client_secret,
        name: this.state.name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        address: this.state.address,
        postal_code: this.state.postal_code
      }
    };
    await axios(req)
      .then(function(response) {
        this.props.history.replace("/signin");
        // self.setState({ listBooking: response.data.booking });
        // self.props.history.replace("/");
        console.log(response.data);
        console.log(self.state.data);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
  };

  render() {
    // console.log(this.state.data);
    // console.log(this.state.data.client_key);
    return (
      <div>
        <HeaderHomePublic />
        <div className="signup">
          <SignUpBuyerForm
            handleChangeClientKey={this.handleChangeClientKey}
            handleChangeClientSecret={this.handleChangeClientSecret}
            handleChangeName={this.handleChangeName}
            handleChangeEmail={this.handleChangeEmail}
            handleChangePhoneNumber={this.handleChangePhoneNumber}
            handleChangeAddress={this.handleChangeAddress}
            handleChangePostalCode={this.handleChangePostalCode}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default SignUpBuyer;
// export default connect(
//     "listzodiac,listimage,listDailyZodiac",
//     actions
// )(Home);
