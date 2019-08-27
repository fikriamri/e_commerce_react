import React from "react";
import HeaderHomePublic from "../component/HeaderHomePublic";
import HeaderBuyer from "../component/HeaderBuyer";
import HeaderSeller from "../component/HeaderSeller";
import Footer from "../component/Footer";

function NotFound() {
  const status = JSON.parse(localStorage.getItem("status"));
  let header = <div></div>;
  if (status === true) {
    header = <HeaderSeller />;
  } else if (status === false) {
    header = <HeaderBuyer />;
  } else {
    header = <HeaderHomePublic />;
  }
  return (
    <div>
      {header}
      <div className="row justify-content-center text-center not-found">
        <div className="col-lg-4 col-md-6 col-sm-8 col-12">
          <h4>404 Not Found</h4>
          <p>Your requested page not found!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
