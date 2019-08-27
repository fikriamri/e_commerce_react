import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderBuyer from "../component/HeaderBuyer";
import ProfileItem from "../component/ProfileItem";
import TransactionTableHeader from "../component/TransactionTableHeader";
import TransactionTableContain from "../component/TransactionTableContain";
import TransactionDetailsTableHeader from "../component/TransactionDetailsTableHeader";
import TransactionDetailsTableContain from "../component/TransactionDetailsTableContain";
import Footer from "../component/Footer";
import ModalEditProfileBuyer from "../component/ModalEditProfileBuyer";
import ModalEditPassword from "../component/ModalEditPassword";
import ModalSuccess from "../component/ModalSuccess";

class ProfileBuyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client_key: "",
      client_secret: "",
      old_client_secret: "",
      new_client_secret: "",
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
      url: self.props.hostBase + "/client/" + localStorage.getItem("client_id"),
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
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address,
      postal_code: this.state.postal_code
    };
    await this.props.handleSubmitEditProfileBuyer(data);
    await this.props.setBuyerProfile();
  };

  handleDetails = transaction_id => async event => {
    event.preventDefault();
    await this.props.setTransactionDetails(transaction_id);
  };

  componentDidMount = async () => {
    await this.props.setBuyerProfile();
    await this.props.setTransaction();
    this.setState({ client_key: localStorage.getItem("client_key") });
    this.setState({ name: this.props.buyerProfile.buyer_details.name });
    this.setState({
      store_name: this.props.buyerProfile.buyer_details.store_name
    });
    this.setState({ email: this.props.buyerProfile.buyer_details.email });
    this.setState({
      phone_number: this.props.buyerProfile.buyer_details.phone_number
    });
    this.setState({ address: this.props.buyerProfile.buyer_details.address });
    this.setState({
      postal_code: this.props.buyerProfile.buyer_details.postal_code
    });
  };

  render() {
    return (
      <div>
        <HeaderBuyer />
        <div className="container profile">
          <div className="row justify-content-center text-center">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12">
              <h4>Profile</h4>
              <table className="shadow">
                <tbody>
                  <ProfileItem
                    title="username"
                    contain={this.props.buyerProfile.username}
                  />
                  <ProfileItem
                    title="Full Name"
                    contain={this.props.buyerProfile.buyer_details.name}
                  />
                  <ProfileItem
                    title="Email"
                    contain={this.props.buyerProfile.buyer_details.email}
                  />
                  <ProfileItem
                    title="Phone Number"
                    contain={this.props.buyerProfile.buyer_details.phone_number}
                  />
                  <ProfileItem
                    title="Address"
                    contain={this.props.buyerProfile.buyer_details.address}
                  />
                  <ProfileItem
                    title="Postal Code"
                    contain={this.props.buyerProfile.buyer_details.postal_code}
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
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10 col-12 transaction">
              <h4>Transactions</h4>
              <table className="transaction-table">
                <tbody>
                  <TransactionTableHeader />
                  {this.props.transaction.map((item, index) => {
                    return (
                      <TransactionTableContain
                        number={index + 1}
                        totalQty={item.total_qty}
                        totalPrice={item.total_price}
                        courier={item.courier}
                        paymentMethod={item.payment_method}
                        date={item.date_created.slice(0, 16)}
                        details={
                          <button
                            type="button"
                            class="btn btn-info"
                            onClick={this.handleDetails(item.id)}
                            data-toggle="modal"
                            data-target="#TransactionDetails"
                          >
                            Details
                          </button>
                        }
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
        {/* Modal Edit Profile */}
        <ModalEditProfileBuyer
          handleChangeName={this.handleChangeName}
          name={this.state.name}
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
        {/* Modal Transaction Details */}
        <div
          class="modal fade"
          id="TransactionDetails"
          tabindex="-1"
          role="dialog"
          aria-labelledby="EditTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="EditTitle">
                  Transaction Details
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <table className="transaction-details text-center">
                  <tbody>
                    <TransactionDetailsTableHeader />
                    {this.props.transactionDetails.map((item, index) => {
                      return (
                        <TransactionDetailsTableContain
                          number={index + 1}
                          productName={item.product_name}
                          price={item.price}
                          qty={item.qty}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "buyerProfile, transaction, transactionDetails, hostBase",
  actions
)(ProfileBuyer);
