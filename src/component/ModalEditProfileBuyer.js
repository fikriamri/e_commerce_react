import React from "react";

function ModalEditProfileBuyer(props) {
  return (
    <div
      class="modal fade"
      id="EditProfile"
      tabindex="-1"
      role="dialog"
      aria-labelledby="EditProfile"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="EditProfile">
              Edit Profile
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
            <form>
              <label for="fullname">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                onChange={props.handleChangeName}
                value={props.name}
              />
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                onChange={props.handleChangeEmail}
                value={props.email}
              />
              <label for="phone_number">Phone Number</label>
              <input
                type="text"
                class="form-control"
                id="phone_number"
                onChange={props.handleChangePhoneNumber}
                value={props.phone_number}
              />

              <label for="full_address">Full Address</label>
              <input
                type="text"
                class="form-control"
                id="full_address"
                onChange={props.handleChangeAddress}
                value={props.address}
              />
              <label for="postal_code">Postal Code</label>
              <input
                type="text"
                class="form-control"
                id="postal_code"
                onChange={props.handleChangePostalCode}
                value={props.postal_code}
              />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={props.handleSubmitEditProfile}
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#EditSuccess"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditProfileBuyer;
