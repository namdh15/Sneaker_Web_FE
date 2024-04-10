import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Api from "../../services/product"
import { PRODUCT_CATEGORIES, PRODUCT_GENDER } from "../../constants";
import { toast } from "react-toastify";
import { ConfirmModal, EditProductModal, EmptyComponent } from "../../components";
import SearchSectionDashboard from "../../components/atoms/dashboard/SearchSectionDashboard";

const ProductItem = (props) => {
  const { product, setSelectedItem } = props;
  return (
    <tr>
      <td className="align-middle">
        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
          <input type="checkbox" className="custom-control-input" id={product.id} />
          <label className="custom-control-label" htmlFor={product.id} />
        </div>
      </td>
      <td className="align-middle text-center">
        <div
          className="bg-light d-inline-flex justify-content-center align-items-center align-top"
          style={{ width: 60, height: 60, borderRadius: 5 }}
        >
          <img src={product.image} alt={product.id} style={{ width: 'inherit', height: 'inherit', borderRadius: 5 }} />
        </div>
      </td>
      <td className="align-middle">
        <Link style={{ textDecoration: 'none', fontWeight: '700' }} to={`${product?.id}`}>
          {product.name}
        </Link>
      </td>
      <td className="text-nowrap align-middle">
        {Number(product.price).toLocaleString('en')}
      </td>
      <td className="text-nowrap align-middle">
        {PRODUCT_GENDER[product.gender]}
      </td>
      <td className="text-nowrap align-middle">
        {PRODUCT_CATEGORIES[product.categories]}
      </td>
      <td className="text-center align-middle">
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round"></span>
        </label>
      </td>
      <td className="text-center align-middle">
        <div className="btn-group align-top">
          <button
            className="btn btn-dark badge"
            type="button"
            data-toggle="modal"
            data-target="#user-form-modal"
            onClick={() => setSelectedItem(product)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-secondary badge"
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={() => setSelectedItem(product)}
          >
            <i className="fa fa-trash" style={{ color: 'black' }} />
          </button>
        </div>
      </td>
    </tr>
  )
}

const DashboardListProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await Api.getProducts();
      setAllProducts(response?.results);
    };
    getProducts();
  }, []);


  const handleDeleteProduct = async (productId) => {
    const res = await Api.deleteProduct(productId)
    setAllProducts(allProducts.filter((item) => item?.id !== productId))
    toast.success('You removed this product!')
    console.log(res);
  }

  return (
    <>
      <div >
        <div className="row flex-lg-nowrap">
          <div className="col">
            <div className="e-tabs mb-3 px-3">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link active" to='#'>
                    Products setting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row flex-lg-nowrap">
              <div className="col mb-3">
                <div className="e-panel card">
                  <div className="card-body">
                    <div className="card-title">
                      <h6 className="mr-2">
                        <span>Products</span>
                        <small className="px-1">List of all items</small>
                      </h6>
                      <div className="col text-right">
                        <SearchSectionDashboard />
                      </div>
                    </div>
                    <div className="e-table">
                      <div className="table-responsive table-lg mt-3">
                        {allProducts?.length ?
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th className="align-top" style={{ width: '36px' }}>
                                  <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="all-items"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="all-items"
                                    />
                                  </div>
                                </th>
                                <th style={{ width: '90px' }}>Photo</th>
                                {/* <th>Code</th> */}
                                <th>Name</th>
                                <th style={{ width: '100px' }} className="max-width">Price</th>
                                <th style={{ width: '100px' }} className="max-width">Gender</th>
                                {/* <th className="max-width">Color</th> */}
                                <th style={{ width: '80px' }} className="max-width">Category</th>
                                {/* <th className="sortable">Quantity</th> */}
                                <th style={{ width: '80px' }}> Available </th>
                                <th style={{ width: '80px' }}>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                allProducts?.map((item, index) => (
                                  <ProductItem
                                    product={item || {}}
                                    index={index}
                                    setSelectedItem={setSelectedItem}
                                  />
                                ))
                              }
                            </tbody>
                          </table> :
                          <EmptyComponent
                            isSlide={false}
                            message1={'Your warehouse is Empty'}
                            message2={'Add something to make me happy'}
                          />
                        }
                      </div>
                      <div className="d-flex justify-content-center">
                        <ul className="pagination mt-3 mb-0">
                          <li className="disabled page-item">
                            <a href="#" className="page-link">‹</a>
                          </li>
                          <li className="active page-item">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              ›
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              »
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center px-xl-3">
                      <button
                        className="btn btn-success btn-block"
                        type="button"
                      >
                        <Link className="nav-link px-2 active" to='/admin/products/create-product' >
                          Create Product
                        </Link>
                      </button>
                    </div>
                    <hr className="my-3" />
                    <div className="e-navlist e-navlist--active-bold">
                      <ul className="nav">
                        <li className="nav-item active">
                          <a href="" className="nav-link">
                            <span>All</span>&nbsp;<small>/&nbsp;32</small>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="" className="nav-link">
                            <span>Active</span>&nbsp;<small>/&nbsp;16</small>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="" className="nav-link">
                            <span>Selected</span>&nbsp;<small>/&nbsp;0</small>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr className="my-3" />
                    <div>
                      <div className="form-group">
                        <label>Date from - to:</label>
                        <div>
                          <input
                            id="dates-range"
                            className="form-control flatpickr-input"
                            placeholder="01 Dec 17 - 27 Jan 18"
                            type="text"
                            readOnly="readonly"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Search by Name:</label>
                        <div>
                          <input
                            className="form-control w-100"
                            type="text"
                            placeholder="Name"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="my-3" />
                    <div className="">
                      <label>Status:</label>
                      <div className="px-2">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="user-status"
                            id="users-status-disabled"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="users-status-disabled"
                          >
                            Disabled
                          </label>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="user-status"
                            id="users-status-active"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="users-status-active"
                          >
                            Active
                          </label>
                        </div>
                      </div>
                      <div className="px-2">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="user-status"
                            id="users-status-any"
                            defaultChecked=""
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="users-status-any"
                          >
                            Any
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* Product Form Modal */}
      <EditProductModal currProduct={selectedItem} />
      <ConfirmModal
        modalMessage={'Are you sure to delete this item?'}
        modalTitle={'Delete this Product'}
        modalId={'exampleModalCenter'}
        rightFunc={() => handleDeleteProduct(selectedItem?.id)}
        leftFunc={() => { }}
      />
    </>

  )
}

export default DashboardListProducts;