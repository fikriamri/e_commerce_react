import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderSeller from "../component/HeaderSeller";
import AddProductForm from "../component/AddProductForm";
import ModalSuccess from "../component/ModalSuccess";
import Footer from "../component/Footer";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_category_id: "1",
      description: "",
      price: 0,
      image: "",
      stock: 0
    };
  }

  handleChangeProductName = event => {
    this.setState({ product_name: event.target.value });
    console.log(this.state.product_name);
  };

  handleChangeProductCategoryId = event => {
    this.setState({ product_category_id: event.target.value });
    console.log(this.state.product_category_id);
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
    console.log(this.state.description);
  };

  handleChangePrice = event => {
    this.setState({ price: event.target.value });
    console.log(this.state.price);
  };

  handleChangeImage = event => {
    this.setState({ image: event.target.value });
    console.log(this.state.image);
  };

  handleChangeStock = event => {
    this.setState({ stock: event.target.value });
    console.log(this.state.stock);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const data = {
      product_name: this.state.product_name,
      product_category_id: this.state.product_category_id,
      description: this.state.description,
      price: this.state.price,
      image: this.state.image,
      stock: this.state.stock
    };
    this.props.handleSubmitProduct(data);
  };

  handleCloseCheckout = event => {
    this.props.history.push("/seller");
  };

  render() {
    return (
      <div>
        <HeaderSeller />
        <div className="signup">
          <AddProductForm
            handleChangeProductName={this.handleChangeProductName}
            handleChangeProductCategoryId={this.handleChangeProductCategoryId}
            handleChangeDescription={this.handleChangeDescription}
            handleChangePrice={this.handleChangePrice}
            handleChangeImage={this.handleChangeImage}
            handleChangeStock={this.handleChangeStock}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <Footer />
        {/* Modal Success */}
        <ModalSuccess
          id="AddProduct"
          title="Success!"
          body="Your Product has been recorded!"
          onClick={this.handleCloseCheckout}
        />
      </div>
    );
  }
}

export default connect(
  "hostBase",
  actions
)(AddProduct);
