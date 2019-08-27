import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderHomePublic from "../component/HeaderHomePublic";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemHome from "../component/ItemHome";
import Footer from "../component/Footer";

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
    let header = <div></div>;
    if (status === false) {
      header = <HeaderBuyer />;
    } else {
      header = <HeaderHomePublic />;
    }
    return (
      <div>
        {header}
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
        <Footer />
      </div>
    );
  }
}

export default connect(
  "allProduct",
  actions
)(Home);
