import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import HeaderSeller from "../component/HeaderSeller";
import ItemHome from "../component/ItemHome";

const host = "http://0.0.0.0:5050/product";

class HomeSeller extends React.Component {
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

  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: host,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        self.props.setSellerProduct(response.data);
        // self.setState({ listBooking: response.data.booking });
        // self.props.history.replace("/");
        console.log(response.data);
        console.log(self.props.SellerProduct);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <HeaderSeller />
        <div className="container home">
          <div className="row justify-content-center">
            {this.props.SellerProduct.map((item, index) => {
              return (
                <div className="col-md-2 col-sm-6 col-12 ">
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

// export default HomeBuyer;
export default connect(
  "SellerProduct",
  actions
)(HomeSeller);
