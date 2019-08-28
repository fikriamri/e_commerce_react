import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

function HeaderHomePublic() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg" fixed="top" className="shadow">
          <Navbar.Brand>
            <Link to="/" style={{ color: "black" }}>
              babypedia
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/" style={{ color: "grey" }}>
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/category/1" style={{ color: "grey" }}>
                    Baju
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/2" style={{ color: "grey" }}>
                    Mainan
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/3" style={{ color: "grey" }}>
                    Perlengkapan
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/signin" style={{ color: "grey" }}>
                  Sign In
                </Link>
              </Nav.Link>

              <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/signup" style={{ color: "grey" }}>
                    Buyer
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/seller/signup" style={{ color: "grey" }}>
                    Seller
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
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

export default HeaderHomePublic;
