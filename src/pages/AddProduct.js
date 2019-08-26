import React from "react";
import axios from "axios";
import HeaderSeller from "../component/HeaderSeller";
import AddProductForm from "../component/AddProductForm";

const host = "http://0.0.0.0:5020/product";

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
    const self = this;
    const req = {
      method: "post",
      url: host,
      data: {
        product_name: self.state.product_name,
        product_category_id: self.state.product_category_id,
        description: self.state.description,
        price: self.state.price,
        image: self.state.image,
        stock: self.state.stock
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        this.props.history.push("/seller/add_product");
        console.log(response.data);
        console.log(self.state.data);
      })
      .catch(function(error) {
        alert(error);
        console.log("error", error);
      });
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
      </div>
    );
  }
}

export default AddProduct;
