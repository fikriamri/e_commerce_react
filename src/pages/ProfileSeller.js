import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderSeller from "../component/HeaderSeller";
import ProfileItem from "../component/ProfileItem";
import OrdersTableHeader from "../component/OrdersTableHeader";
import OrdersTableContain from "../component/OrdersTableContain";
import Footer from "../component/Footer";
import ModalEditProfileSeller from "../component/ModalEditProfileSeller";
import ModalEditPassword from "../component/ModalEditPassword";
import ModalSuccess from "../component/ModalSuccess";

class ProfileSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_key: "",
      client_secret: "",
      old_client_secret: "",
      new_client_secret: "",
      name: "",
      store_name: "",
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

  handleChangeName = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  handleChangeStoreName = event => {
    this.setState({ store_name: event.target.value });
    console.log(this.state.store_name);
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

  handleChangeOldPassword = event => {
    this.setState({ old_client_secret: event.target.value });
    console.log(this.state.old_client_secret);
  };

  handleChangeNewPassword = event => {
    this.setState({ new_client_secret: event.target.value });
    console.log(this.state.new_client_secret);
  };

  handleSubmitEditPassword = async event => {
    const self = this;
    event.preventDefault();
    const req = {
      method: "get",
      url: this.props.hostBase + "/client/" + localStorage.getItem("client_id"),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        self.setState({ client_secret: response.data.client_secret });
        console.log(response);
      })
      .catch(error => {
        console.log("Error login", error);
        alert(error);
      });

    if (this.state.client_secret === this.state.old_client_secret) {
      const data = {
        client_key: this.state.client_key,
        client_secret: this.state.new_client_secret
      };
      this.props.handleSubmitEditPassword(data);
    } else {
      alert("Old Password is incorrect!");
    }
  };

  handleSubmitEditProfile = async event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      store_name: this.state.store_name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address,
      postal_code: this.state.postal_code
    };
    await this.props.handleSubmitEditProfileSeller(data);
    await this.props.setSellerProfile();
  };

  componentDidMount = async () => {
    await this.props.setSellerProfile();
    await this.props.setOrderDetails();
    console.log(this.props.orderDetails);
    this.setState({ client_key: localStorage.getItem("client_key") });
    this.setState({ name: this.props.sellerProfile.seller_details.name });
    this.setState({
      store_name: this.props.sellerProfile.seller_details.store_name
    });
    this.setState({ email: this.props.sellerProfile.seller_details.email });
    this.setState({
      phone_number: this.props.sellerProfile.seller_details.phone_number
    });
    this.setState({ address: this.props.sellerProfile.seller_details.address });
    this.setState({
      postal_code: this.props.sellerProfile.seller_details.postal_code
    });
  };

  render() {
    return (
      <div>
        <HeaderSeller />
        <div className="container profile">
          <div className="row justify-content-center text-center">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12">
              <h4>Profile</h4>
              <table className="shadow">
                <tbody>
                  <ProfileItem
                    title="username"
                    contain={this.props.sellerProfile.username}
                  />
                  <ProfileItem
                    title="Full Name"
                    contain={this.props.sellerProfile.seller_details.name}
                  />
                  <ProfileItem
                    title="Store Name"
                    contain={this.props.sellerProfile.seller_details.store_name}
                  />
                  <ProfileItem
                    title="Email"
                    contain={this.props.sellerProfile.seller_details.email}
                  />
                  <ProfileItem
                    title="Phone Number"
                    contain={
                      this.props.sellerProfile.seller_details.phone_number
                    }
                  />
                  <ProfileItem
                    title="Address"
                    contain={this.props.sellerProfile.seller_details.address}
                  />
                  <ProfileItem
                    title="Postal Code"
                    contain={
                      this.props.sellerProfile.seller_details.postal_code
                    }
                  />

                  <tr>
                    <td className="title">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-toggle="modal"
                        data-target="#EditPassword"
                      >
                        Edit Password
                      </button>
                    </td>
                    <td className="colon" />
                    <td className="contain">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#EditProfile"
                      >
                        Edit Profile
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-10 col-12 transaction">
            <h4>Orders</h4>
            <table className="transaction-table">
              <tbody>
                <OrdersTableHeader />
                {this.props.orderDetails.map((item, index) => {
                  return (
                    <OrdersTableContain
                      number={index + 1}
                      productId={item.transaction_details.product_id}
                      productName={item.transaction_details.product_name}
                      qty={item.transaction_details.qty}
                      buyerAddress={item.buyer_details.address}
                      date={item.transaction.date_created.slice(0, 16)}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
        {/* Modal Edit Profile */}
        <ModalEditProfileSeller
          handleChangeName={this.handleChangeName}
          name={this.state.name}
          handleChangeStoreName={this.handleChangeStoreName}
          store_name={this.state.store_name}
          handleChangeEmail={this.handleChangeEmail}
          email={this.state.email}
          handleChangePhoneNumber={this.handleChangePhoneNumber}
          phone_number={this.state.phone_number}
          handleChangeAddress={this.handleChangeAddress}
          address={this.state.address}
          handleChangePostalCode={this.handleChangePostalCode}
          postal_code={this.state.postal_code}
          handleSubmitEditProfile={this.handleSubmitEditProfile}
        />
        {/* Modal Edit Password */}
        <ModalEditPassword
          handleChangeClientKey={this.handleChangeClientKey}
          client_key={this.state.client_key}
          handleChangeOldPassword={this.handleChangeOldPassword}
          handleChangeNewPassword={this.handleChangeNewPassword}
          handleSubmitEditPassword={this.handleSubmitEditPassword}
        />

        {/* Modal Edit Success */}
        <ModalSuccess
          id="EditSuccess"
          title="Success!"
          body="Your changes has been submitted!"
        />
      </div>
    );
  }
}

export default connect(
  "sellerProfile, orderDetails, hostBase",
  actions
)(ProfileSeller);
