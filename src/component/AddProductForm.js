import React from "react";

function AddProductForm(props) {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <h4>Add Product</h4>
      </div>
      <form>
        <div className="row justify-content-center" />
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="product_name">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="product_name"
              placeholder="product name"
              onChange={props.handleChangeProductName}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="category">Category</label>
            <select
              className="browser-default custom-select"
              id="category"
              onChange={props.handleChangeProductCategoryId}
            >
              <option value="1">Baju</option>
              <option value="2">Mainan</option>
              <option value="3">Perlengkapan</option>
            </select>
          </div>
        </div>

        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="description">Description</label>
            <input
              type="textarea"
              class="form-control"
              id="description"
              placeholder="description"
              onChange={props.handleChangeDescription}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="price">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="0"
              onChange={props.handleChangePrice}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="image">Image</label>
            <input
              type="text"
              class="form-control"
              id="image"
              placeholder="image src"
              onChange={props.handleChangeImage}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <label for="stock">Stock</label>
            <input
              type="number"
              class="form-control"
              id="stock"
              placeholder="0"
              onChange={props.handleChangeStock}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="form-group col-md-6">
            <button
              class="btn btn-primary btn-lg btn-block"
              onClick={props.handleSubmit}
              data-toggle="modal"
              data-target="#AddProduct"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
