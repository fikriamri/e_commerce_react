import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderSeller from "../component/HeaderSeller";
import ItemHome from "../component/ItemHome";
import ModalEditProfile from "../component/ModalEditProfile";

class HomeSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p: "",
      rp: "",
      product_category_id: "",
      orderby: "",
      sort: "",
      product_id: "",
      product_name: "",
      category: "",
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

  handleEditProduct = product_id => async event => {
    event.preventDefault();
    await this.props.setProductByProductId(product_id);
    this.setState({ product_id: this.props.productByProductId.id });
    console.log(this.state.product_id);
    this.setState({ product_name: this.props.productByProductId.product_name });
    console.log(this.state.product_name);
    this.setState({
      product_category_id: this.props.productByProductId.product_category_id
    });
    console.log(this.state.product_category_id);

    this.setState({ description: this.props.productByProductId.description });
    this.setState({ price: this.props.productByProductId.price });
    this.setState({ image: this.props.productByProductId.image });
    this.setState({ stock: this.props.productByProductId.stock });
  };

  handleSubmitEditProduct = async event => {
    event.preventDefault();
    const data = {
      product_id: this.state.product_id,
      data: {
        product_name: this.state.product_name,
        product_category_id: this.state.product_category_id,
        description: this.state.description,
        price: this.state.price,
        image: this.state.image,
        stock: this.state.stock
      }
    };
    await this.props.handleSubmitEditProduct(data);
    await this.props.setSellerProduct();
  };

  componentDidMount = async () => {
    this.props.setSellerProduct();
  };

  render() {
    return (
      <div>
        <HeaderSeller />
        <div className="container home">
          <div className="row justify-content-center">
            {this.props.sellerProduct.map((item, index) => {
              return (
                <div className="col-md-3 col-sm-6 col-12 ">
                  <Link
                    // to={"/allproduct/" + item.id}
                    style={{
                      textDecoration: "none",
                      color: "black"
                      // linkStyle
                    }}
                    className="link"
                  >
                    <ItemHome
                      sellerClass="item-seller"
                      image={item.image}
                      product_name={item.product_name}
                      price={item.price}
                      description={item.description}
                      seller_id={item.seller_id}
                      button={
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-toggle="modal"
                          data-target="#EditProduct"
                          onClick={this.handleEditProduct(item.id)}
                        >
                          Edit Product
                        </button>
                      }
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Modal Edit Product */}
        <ModalEditProfile
          handleChangeProductName={this.handleChangeProductName}
          product_name={this.state.product_name}
          handleChangeProductCategoryId={this.handleChangeProductCategoryId}
          product_category_id={this.state.product_category_id}
          handleChangeDescription={this.handleChangeDescription}
          description={this.state.description}
          handleChangePrice={this.handleChangePrice}
          price={this.state.price}
          handleChangeImage={this.handleChangeImage}
          image={this.state.image}
          handleChangeStock={this.handleChangeStock}
          stock={this.state.stock}
          handleSubmitDeleteProduct={this.props.handleSubmitDeleteProduct}
          handleSubmitEditProduct={this.handleSubmitEditProduct}
        />
        {/* Modal Edit Success */}
        <div
          class="modal fade"
          id="EditSuccess"
          tabindex="-1"
          role="dialog"
          aria-labelledby="EditTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="EditTitle">
                  Your changes has been submitted!
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
                Please refresh page to apply the changes!
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
  "sellerProduct, productByProductId",
  actions
)(HomeSeller);
