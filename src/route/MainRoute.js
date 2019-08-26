import React from "react";
import { store } from "../store/store";
import { Provider } from "unistore/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUpSeller from "../pages/SignUpSeller";
import SignUpBuyer from "../pages/SignUpBuyer";
import SignIn from "../pages/SignIn";
import ProfileBuyer from "../pages/ProfileBuyer";
import ProfileSeller from "../pages/ProfileSeller";
import AddProduct from "../pages/AddProduct";
import HomeSeller from "../pages/HomeSeller";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import HomeByCategory from "../pages/HomeByCategory";
import NotFound from "../pages/NotFound";

function MainRoutes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/seller/signup" component={SignUpSeller} />
          <Route exact path="/seller/profile" component={ProfileSeller} />
          <Route exact path="/seller" component={HomeSeller} />
          <Route exact path="/signup" component={SignUpBuyer} />
          <Route exact path="/profile" component={ProfileBuyer} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/seller/add_product" component={AddProduct} />
          <Route exact path="/allproduct/:id" component={ProductDetails} />
          <Route exact path="/category/:category" component={HomeByCategory} />
          <Route exact path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default MainRoutes;
