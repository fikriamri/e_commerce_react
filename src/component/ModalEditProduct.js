import React from "react";

function ModalEditProduct(props) {
  return (
    <div
      class="modal fade"
      id="EditProduct"
      tabindex="-1"
      role="dialog"
      aria-labelledby="EditProduct"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="EditProduct">
              Edit Product
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
              <label for="product_name">Product Name</label>
              <input
                type="text"
                class="form-control"
                id="product_name"
                placeholder="product name"
                onChange={props.handleChangeProductName}
                value={props.product_name}
              />
              <label for="category">Category</label>
              <select
                className="browser-default custom-select"
                id="category"
                onChange={props.handleChangeProductCategoryId}
                value={props.product_category_id}
              >
                <option value="1">Baju</option>
                <option value="2">Mainan</option>
                <option value="3">Perlengkapan</option>
              </select>
              <label for="description">Description</label>
              <input
                type="textarea"
                class="form-control"
                id="description"
                placeholder="description"
                onChange={props.handleChangeDescription}
                value={props.description}
              />

              <label for="price">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="0"
                onChange={props.handleChangePrice}
                value={props.price}
              />
              <label for="image">Image</label>
              <input
                type="text"
                class="form-control"
                id="image"
                placeholder="image src"
                onChange={props.handleChangeImage}
                value={props.image}
              />
              <label for="stock">Stock</label>
              <input
                type="number"
                class="form-control"
                id="stock"
                placeholder="0"
                onChange={props.handleChangeStock}
                value={props.stock}
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
              class="btn btn-warning"
              onClick={props.handleSubmitDeleteProduct}
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#EditSuccess"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={props.handleSubmitEditProduct}
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

export default ModalEditProduct;
