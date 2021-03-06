import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { connect } from "unistore/react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

function HeaderSeller(props) {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg" fixed="top" className="shadow">
          <Navbar.Brand>
            <Link to="/" style={{ color: "black" }}>
              babypedia<span style={{ color: "green" }}>seller</span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/seller" style={{ color: "grey" }}>
                  See All Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/seller/profile" style={{ color: "grey" }}>
                  Profile {props.sellerProfile.seller_details.name}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/seller/add_product" style={{ color: "grey" }}>
                  Add Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/"
                  style={{ color: "grey" }}
                  onClick={() => {
                    localStorage.removeItem("client_id");
                    localStorage.removeItem("client_key");
                    localStorage.removeItem("status");
                    localStorage.removeItem("token");
                    alert("You have signed out!");
                  }}
                >
                  Sign Out
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default connect("sellerProfile")(HeaderSeller);
