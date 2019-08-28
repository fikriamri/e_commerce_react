import React from "react";

function ModalEditPassword(props) {
  return (
    <div
      class="modal fade"
      id="EditPassword"
      tabindex="-1"
      role="dialog"
      aria-labelledby="EditPassword"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="EditPassword">
              Edit Password
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
              <label for="fullname">username</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                onChange={props.handleChangeClientKey}
                value={props.client_key}
              />
              <label for="oldPassword">Old Password</label>
              <input
                type="password"
                class="form-control"
                id="oldPassword"
                onChange={props.handleChangeOldPassword}
              />
              <label for="newPassword">New Password</label>
              <input
                type="password"
                class="form-control"
                id="newPassword"
                onChange={props.handleChangeNewPassword}
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
              onClick={props.handleSubmitEditPassword}
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

export default ModalEditPassword;
