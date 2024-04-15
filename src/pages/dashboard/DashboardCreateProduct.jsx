import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import * as Api from "../../services/product"
import { PRODUCT_CATEGORIES, PRODUCT_GENDER } from "../../constants/products.constant";
import { RowInput, RowSelect } from "../../components";
import { toast } from "react-toastify";

const sizeConstant = [36, 37, 38, 39, 40]

const DashboardCreateProduct = (props) => {

  const initialProduct = {
    name: null,
    price: null,
    gender: null,
    categories: null,
    description: null,
    image: null,
  }
  const { isEdit, currProduct } = props;
  const [formValues, setFormValues] = useState(initialProduct);
  const [previewImage, setPreviewImage] = useState(formValues?.image);
  const navigate = useNavigate();

  useEffect(() => {
    setFormValues(currProduct);
    setPreviewImage(currProduct?.image)
    return () => { }
  }, [currProduct]);

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file instanceof Blob) {
        setFormValues({ ...formValues, 'image': file })
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formValues?.image) {
      toast.error('Import your image file!')
      return false;
    }
    const formData = new FormData();
    // Append each key-value pair from the initialProduct object to the FormData object
    Object.keys(formValues).forEach(key => {
      if (formValues[key]) {
        formData.append(key, formValues[key]);
      }
    });
    const res = await Api.createProduct(formData);
    if (res?.statusCode !== 201) {
      res.errors?.map((error) => {
        toast.error(error);
        return false;
      })
    } else if (res?.statusCode === 201) {
      toast.success('Create Product successful');
      navigate('/admin/products')
      return true;
    }
  }


  return (
    <>
      <div >
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body" style={isEdit && { maxHeight: '60vh', overflow: 'scroll' }}>
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
                                <span style={{ color: "rgb(166, 168, 170)", font: "bold 8pt Arial" }}>140x140</span>}
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap" style={{ width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', height: '1.8em' }}>{formValues?.name}</h4>
                            <div className="text-muted"><small>HaNoi, 231.st Hoang Mai</small></div>
                            <div className="mt-2 required">
                              <label htmlFor="image">
                                <input
                                  type="file"
                                  className="form-control d-none"
                                  id="image"
                                  name="image"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                                <span class="btn btn-primary"><i className="fa fa-fw fa-camera" />Select Photo</span>
                              </label>
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            <>
                              <span className="badge badge-secondary">administrator</span>
                              <div className="text-muted">
                                <small>System admin</small>
                              </div>
                            </>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <div className="active nav-link">Settings</div>
                        </li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form
                            className="form needs-validation"
                            novalidate
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="col">
                                {/* <RowInput
                                  items={[
                                    {
                                      disabled: true,
                                      required: true,
                                      label: 'Code',
                                      type: 'text',
                                      name: 'code',
                                      placeholder: "ABC-xyz",
                                      handleChangeValue: handleChangeValue,
                                      value: undefined
                                    },
                                    {
                                      disabled: true,
                                      required: true,
                                      label: 'Quantity',
                                      type: 'number',
                                      name: 'quantity',
                                      placeholder: "0",
                                      handleChangeValue: handleChangeValue,
                                      value: undefined
                                    }
                                  ]}
                                /> */}
                                <RowInput
                                  items={[
                                    {
                                      required: true,
                                      label: 'Product Name',
                                      type: 'text',
                                      name: 'name',
                                      placeholder: "New Product",
                                      handleChangeValue: handleChangeValue,
                                      value: formValues?.name
                                    }
                                  ]}
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="mb-2">
                                <b>Product static</b>
                              </div>
                              <div className="col-md-4">
                                <RowInput
                                  items={[
                                    {
                                      required: true,
                                      label: 'Price (VND)',
                                      type: 'number',
                                      name: 'price',
                                      placeholder: "0",
                                      handleChangeValue: handleChangeValue,
                                      value: formValues?.price
                                    }
                                  ]}
                                />
                              </div>
                              <div className="col-md-4">
                                <RowSelect
                                  item={{
                                    required: true,
                                    label: 'Category',
                                    name: 'categories',
                                    handleChangeValue: handleChangeValue,
                                    value: formValues?.categories
                                  }}
                                  options={PRODUCT_CATEGORIES}
                                />
                              </div>
                              <div className="col-md-4">
                                <RowSelect
                                  item={{
                                    required: true,
                                    label: 'Gender',
                                    name: 'gender',
                                    handleChangeValue: handleChangeValue,
                                    value: formValues?.gender
                                  }}
                                  options={PRODUCT_GENDER}
                                />
                              </div>
                              {/* <div className="col-12 col-sm-5 offset-sm-1 mb-3">
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
                              </div> */}
                            </div>
                            <RowInput
                              items={[
                                {
                                  label: 'Description',
                                  name: 'description',
                                  placeholder: "Product Bio",
                                  handleChangeValue: handleChangeValue,
                                  value: formValues?.description
                                }
                              ]}
                              isTextArea={true}
                            />
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >Submit</button>
                              </div>
                            </div>

                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!isEdit &&
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
              }
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default DashboardCreateProduct;