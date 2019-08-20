import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderHomePublic from "../component/HeaderHomePublic";
import HeaderBuyer from "../component/HeaderBuyer";
import ItemHome from "../component/ItemHome";

const host = "http://0.0.0.0:5050/product/all?product_category_id=";

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
      const self = this;
      const req = {
        method: "get",
        url: host + this.props.match.params.category
      };
      console.log(this.props.match.params.category);
      await axios(req)
        .then(function(response) {
          self.props.setSellerProduct(response.data);
          // self.setState({ listBooking: response.data.booking });
          // self.props.history.replace("/");
          console.log(response.data);
          console.log(self.props.AllProduct);
        })
        .catch(function(error) {
          // alert(error);
          console.log("error", error);
        });
    }
  };

  componentDidMount = async () => {
    const self = this;
    const req = {
      method: "get",
      url: host + this.props.match.params.category
    };
    console.log(this.props.match.params.category);
    await axios(req)
      .then(function(response) {
        self.props.setSellerProduct(response.data);
        // self.setState({ listBooking: response.data.booking });
        // self.props.history.replace("/");
        console.log(response.data);
        console.log(self.props.AllProduct);
      })
      .catch(function(error) {
        // alert(error);
        console.log("error", error);
      });
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
              {this.props.SellerProduct.map((item, index) => {
                return (
                  <div className="col-md-2 col-sm-6 col-12 ">
                    <Link
                      to={"/allproduct/" + item.id}
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
    } else
      return (
        <div>
          <HeaderHomePublic />
          <div className="container home">
            <div className="row justify-content-center">
              {this.props.SellerProduct.map((item, index) => {
                return (
                  <div className="col-md-2 col-sm-6 col-12 ">
                    <Link
                      to={"/allproduct/" + item.id}
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

export default connect(
  "SellerProduct",
  actions
)(Home);
