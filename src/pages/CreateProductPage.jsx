import { Link } from "react-router-dom";
import { AdminControlComponent } from "./DashboardPage";
import { useReducer } from "react";
import { useState } from "react";

const sizeConstant = [36, 37, 38, 39, 40]

const CreateProductPage = () => {

  const initialProduct = {
    code: '',
    name: 'New Product',
    price: 0,
    gender: 0,
    color: 0,
    categories: 0,
    description: '',
    quantity: 0,
    image: null,
  }

  const [formValues, setFormValues] = useReducer((currentVals, newVals) => ({ ...currentVals, ...newVals }), initialProduct);
  const { code, name, price, gender, color, categories, description, quantity } = formValues;
  const [previewImage, setPreviewImage] = useState(null);

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setFormValues({ [name]: value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file instanceof Blob) {
        setFormValues({ image: file })
        var reader = new FileReader();
        reader.onload = function () {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        console.error('The selected file is not of type Blob.');
      }
    } else {
      console.error('No file selected.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  }
  return (
    <>
      <div style={{ padding: '3em' }}>
        <div className="row flex-lg-nowrap">
          <AdminControlComponent />
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto" style={{ width: 140 }}>
                            <div
                              className="d-flex justify-content-center align-items-center rounded"
                              style={{ height: 140, backgroundColor: "rgb(233, 236, 239)" }}
                            >
                              {previewImage ?
                                <img style={{ width: '140px', height: '140px' }} src={previewImage} alt="" /> :
                                <span style={{ color: "rgb(166, 168, 170)", font: "bold 8pt Arial" }} >
                                  140x140
                                </span>}
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              New Product
                            </h4>
                            <p className="mb-0">new product</p>
                            <div className="text-muted">
                              <small>address</small>
                            </div>
                            <div className="mt-2">
                              <label htmlFor="image">
                                <input
                                  type="file"
                                  className="form-control d-none"
                                  id="image"
                                  name="image"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                                <span class="btn btn-primary">
                                  <i className="fa fa-fw fa-camera" /> Select Photo
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            <span className="badge badge-secondary">
                              administrator
                            </span>
                            <div className="text-muted">
                              <small>System admin</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href="" className="active nav-link">Settings</a>
                        </li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" noValidate="">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Code</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="ABC-xyz"
                                        onChange={handleChangeValue}
                                        value={code}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Quantity</label>
                                      <input
                                        className="form-control"
                                        type="number"
                                        name="quantity"
                                        placeholder="0"
                                        defaultValue="0"
                                        onChange={handleChangeValue}
                                        value={quantity}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Product Name</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="New Product"
                                        onChange={handleChangeValue}
                                        value={name}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        className="form-control"
                                        rows={5}
                                        name="description"
                                        placeholder="Product Bio"
                                        onChange={handleChangeValue}
                                        value={description}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2">
                                  <b>Product static</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Price (VND)</label>
                                      <input
                                        className="form-control"
                                        type="number"
                                        placeholder="0"
                                        value={price}
                                        name="price"
                                        onChange={handleChangeValue}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Size</label>
                                      <input
                                        className="form-control"
                                        type="number"
                                        placeholder="0"
                                      />
                                    </div>
                                  </div>
                                </div> */}
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Category</label>
                                      <select
                                        onChange={handleChangeValue}
                                        name="categories"
                                        class="form-select"
                                        aria-label="Default select example"
                                        value={categories}
                                      >
                                        <option selected>Select category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Color</label>
                                      <select
                                        class="form-select"
                                        aria-label="Default select example"
                                        onChange={handleChangeValue}
                                        name="color"
                                        value={color}
                                      >
                                        <option selected>Select color</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Gender</label>
                                      <select
                                        class="form-select"
                                        aria-label="Default select example"
                                        onChange={handleChangeValue}
                                        name="gender"
                                        value={gender}
                                      >
                                        <option selected>Select gender</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2">
                                  <b>Other static</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <label>Size</label>
                                    <div className="custom-controls-stacked px-2" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                      {sizeConstant.map((item, index) => (
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id={'size' + item}
                                            defaultChecked=""
                                          />
                                          <label className="custom-control-label" htmlFor={'size' + item}>
                                            {item}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col">
                                    <label>Available</label>
                                    <div className="custom-controls-stacked px-2">
                                      <label class="switch">
                                        <input type="checkbox" checked />
                                        <span class="slider round"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                                <button onClick={handleSubmit} className="btn btn-primary" type="submit">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="px-xl-3">
                      <button className="btn btn-block btn-secondary">
                        <Link className="nav-link px-2 active" to='/admin'>
                          <i className="fa fa-sign-out" />
                          <span> Exit unsave</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title font-weight-bold">Support</h6>
                    <p className="card-text">
                      Lorem ipsum, free help from our friendly assistants.
                    </p>
                    <button type="button" className="btn btn-primary">
                      Help
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default CreateProductPage;