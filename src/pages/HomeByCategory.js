import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderHomePublic from "../component/HeaderHomePublic";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemHome from "../component/ItemHome";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p: "",
      rp: "",
      product_category_id: "",
      orderby: "",
      sort: ""
    };
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      await this.props.setProductCategoryId(this.props.match.params.category);
      await this.props.setAllProduct();
    }
  };

  componentDidMount = async () => {
    await this.props.setProductCategoryId(this.props.match.params.category);
    await this.props.setAllProduct();
  };

  render() {
    const status = JSON.parse(localStorage.getItem("status"));
    if (status == false) {
      // pindah ke halaman profile buyer
      return (
        <div>
          <HeaderBuyer />
          <div className="container home">
            <div className="row justify-content-center">
              {this.props.allProduct.map((item, index) => {
                return (
                  <div className="col-md-3 col-sm-6 col-12 ">
                    <Link
                      to={"/allproduct/" + item.id}
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                      className="link"
                    >
                      <ItemHome
                        image={item.image}
                        product_name={item.product_name}
                        price={item.price}
                        store_name={item.store_name}
                        seller_id={item.seller_id}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <HeaderHomePublic />
          <div className="container home">
            <div className="row justify-content-center">
              {this.props.allProduct.map((item, index) => {
                return (
                  <div className="col-md-3 col-sm-6 col-12 ">
                    <Link
                      to={"/allproduct/" + item.id}
                      style={{
                        textDecoration: "none",
                        color: "black"
                      }}
                      className="link"
                    >
                      <ItemHome
                        image={item.image}
                        product_name={item.product_name}
                        price={item.price}
                        store_name={item.store_name}
                        seller_id={item.seller_id}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
  }
}

export default connect(
  "allProduct",
  actions
)(Home);
