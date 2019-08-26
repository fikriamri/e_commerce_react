import React from "react";

function SignInForm(props) {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <h4>Sign In</h4>
      </div>
      <form>
        <div className="row justify-content-center" />
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="username">Username</label>
            <input
              type="username"
              class="form-control"
              id="username"
              placeholder="username"
              onChange={props.handleChangeClientKey}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              onChange={props.handleChangeClientSecret}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <button
              //   type="submit"
              class="btn btn-primary btn-lg btn-block"
              onClick={props.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
