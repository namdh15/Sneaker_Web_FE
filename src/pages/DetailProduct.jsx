import { Link, useParams } from 'react-router-dom';
import './page.scss';
import { useEffect, useState } from 'react';

import * as Api from "../services/product"
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InventoryIcon from '@mui/icons-material/Inventory';
// assets
import {
  IconTag
} from '@tabler/icons-react';
import { BreadcrumbsCustom, SelectProductModal, SlideProducts } from '../components';
import { PRODUCT_CATEGORIES, PRODUCT_COLOR, PRODUCT_GENDER } from '../constants';
import { Modal } from '@mui/material';

const listRoutesBreadCrumb = [
  {
    href: '/',
    icon: <HomeIcon sx={{ fontSize: 20 }} />,
    label: 'Home'
  },
  {
    href: '/products',
    icon: <InventoryIcon sx={{ fontSize: 20 }} />,
    label: 'Product lists'
  },
  {
    href: '#',
    icon: <LocalMallIcon sx={{ fontSize: 20 }} />,
    label: 'Product details'
  }
]

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [open, setOpen] = useState(false);
  // const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await Api.getProduct(id);
      const res2 = await Api.getProducts({ categories: response?.categories ?? 1 });
      setProduct(response);
      setSimilarProducts(res2?.results)
    };
    getProducts();
  }, [id]);
  
  return (
    <div className="d-flex justify-content-center">
      <div className="single_product" style={{ width: '80%' }}>
        <BreadcrumbsCustom routeItems={listRoutesBreadCrumb} />
        <div
          className="container-fluid"
          style={{ backgroundColor: "#fff", padding: "3em 2em" }}
        >
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="">
                  <img src="https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </li>
                <li data-image="">
                  <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </li>
                <li data-image=".imgur.com/HkEiXfn.jpg">
                  <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3Dg" alt="" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              <div className="image_selected d-flex">
                <img style={{
                  flexShrink: 0,
                  minWidth: '100%',
                  minHeight: '100%',
                }} src={product?.image} alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-3">
              <div className="product_description">
                <div className="product_name font-weight-bold">
                  {product?.name}
                </div>
                <div className="product-rating">
                  <span className="badge badge-success">
                    <i className="fa fa-star" /> 4.5 Star
                  </span>
                  <span className="rating-review ml-3">35 Ratings &amp; 45 Reviews</span>
                </div>
                <div>
                  <span className="product_price">VND {Number(product.price).toLocaleString('en')}</span>
                  <strike className="product_discount">
                    <span style={{ color: "black" }}>
                      VND 2,000<span> </span>
                    </span>
                  </strike>
                </div>
                <div>
                  <span className="product_saved">You Saved:</span>
                  <span style={{ color: "black" }}>
                    VND 2,000<span> </span>
                  </span>
                </div>
                <hr className="singleline" />
                <div>

                  <span className="product_info">
                    {product.description}
                  </span>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="br-dashed">
                        <div className="row">
                          <div className="col-md-3 col-xs-3">
                            <IconTag
                              size={40}
                              strokeWidth={1}
                              color={'black'}
                            />
                          </div>
                          <div className="col-md-9 col-xs-9">
                            <div className="pr-info">

                              <span className="break-all">
                                Get 5% instant discount + 10X rewards @ RENTOPC
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7"> </div>
                  </div>
                  <div className="row" style={{ marginTop: 15 }}>
                    <div className="col-xs-6 ml-3 mb-3">
                      <span className="product_options font-weight-bold">Gender</span>
                      <span className="ml-5">{PRODUCT_GENDER[product?.gender]}</span>
                    </div>
                    <div className="col-xs-6 ml-3 mb-3">
                      <span className="product_options font-weight-bold">Category</span>
                      <span className="ml-5">{PRODUCT_CATEGORIES[product?.categories]}</span>
                    </div>
                    <div className="col-xs-6 ml-3 mb-3">
                      <span className="product_options">Size Options</span>
                      <br />
                      {product?.details?.length ?
                        [...new Set(product?.details?.map((item, index) => item?.size))]?.map((item, index) => (
                          <button className="btn btn-primary btn-sm mr-2">{item}</button>
                        )) : <span className="btn ml-5">Empty variant</span>
                      }
                    </div>
                    <div className="col-xs-6  ml-3 mb-3">
                      <span className="product_options">Color Options</span>
                      <br />
                      {product?.details?.length ?
                        [...new Set(product?.details?.map((item, index) => item?.color))]?.map((item, index) => (
                          <button className="btn btn-primary btn-sm mr-2">{PRODUCT_COLOR[item]}</button>
                        )) :
                        <span className="btn ml-5">Empty variant</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <button onClick={() => setOpen(true)} className="btn btn-dark">Add to Cart</button>
                    <Link to="/cart" className="btn btn-dark mx-2">Go to Cart</Link>
                    <div className=" btn btn-outline-dark mx-1">
                      <i className="fas fa-heart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-underline mt-5">
            <div className="col-md-6">
              <span className=" deal-text">Similar Products</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <SlideProducts products={similarProducts} />
            </div>
          </div>
          <div className="row row-underline">
            <div className="col-md-6">
              <span className=" deal-text">Combo Offers</span>
            </div>
            <div className="col-md-6">
              <a href="#" data-abc="true">
                <span className="ml-auto view-all" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="row padding-2">
                <div className="col-md-5 padding-0">
                  <div className="bbb_combo">
                    <div className="bbb_combo_image">
                      <img
                        className="bbb_combo_image"
                        src=".imgur.com/K4b71NV.jpg"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-start">

                      <strike style={{ color: "red" }}>

                        <span className="fs-10" style={{ color: "black" }}>
                          ₹ 32,000<span> </span>
                        </span>
                      </strike>
                      <span className="ml-auto">
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row justify-content-start"
                      style={{ marginBottom: 13 }}
                    >

                      <span style={{ marginTop: "-4px" }}>₹30,000</span>
                      <span className="ml-auto fs-10">23 Reviews</span>
                    </div>
                    <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                  </div>
                </div>
                <div className="col-md-2 text-center">

                  <span className="step">+</span>
                </div>
                <div className="col-md-5 padding-0">
                  <div className="bbb_combo">
                    <div className="bbb_combo_image">
                      <img
                        className="bbb_combo_image"
                        src=".imgur.com/K4b71NV.jpg"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-start">

                      <strike style={{ color: "red" }}>

                        <span className="fs-10" style={{ color: "black" }}>
                          ₹ 32,000<span> </span>
                        </span>
                      </strike>
                      <span className="ml-auto">
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row justify-content-start"
                      style={{ marginBottom: 13 }}
                    >

                      <span style={{ marginTop: "-4px" }}>₹30,000</span>
                      <span className="ml-auto fs-10">23 Reviews</span>
                    </div>
                    <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12" style={{ marginLeft: 36 }}>
                  <div className="boxo-pricing-items">
                    <div className="combo-pricing-item">

                      <span className="items_text">1 Item</span>
                      <span className="combo_item_price">₹13,200</span>
                    </div>
                    <div className="combo-plus">

                      <span className="plus-sign">+</span>
                    </div>
                    <div className="combo-pricing-item">

                      <span className="items_text">1 Add-on</span>
                      <span className="combo_item_price">₹500</span>
                    </div>
                    <div className="combo-plus">

                      <span className="plus-sign">=</span>
                    </div>
                    <div className="combo-pricing-item">

                      <span className="items_text">Total</span>
                      <span className="combo_item_price">₹13,700</span>
                    </div>
                    <div className="add-both-cart-button">

                      <button type="button" className="btn btn-primary shop-button">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <span className="vertical-line" />
            </div>
            <div className="col-md-5" style={{ marginLeft: "-27px" }}>
              <div className="row padding-2">
                <div className="col-md-5 padding-0">
                  <div className="bbb_combo">
                    <div className="bbb_combo_image">
                      <img
                        className="bbb_combo_image"
                        src=".imgur.com/K4b71NV.jpg"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-start">

                      <strike style={{ color: "red" }}>

                        <span className="fs-10" style={{ color: "black" }}>
                          ₹ 32,000<span> </span>
                        </span>
                      </strike>
                      <span className="ml-auto">
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating p-rating" />
                        <i className="fa fa-star p-rating" />
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row justify-content-start"
                      style={{ marginBottom: 13 }}
                    >

                      <span style={{ marginTop: "-4px" }}>₹30,000</span>
                      <span className="ml-auto fs-10">23 Reviews</span>
                    </div>
                    <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                  </div>
                </div>
                <div className="col-md-2 text-center">

                  <span className="step">+</span>
                </div>
                <div className="col-md-5 padding-0">
                  <div className="bbb_combo">
                    <div className="bbb_combo_image">
                      <img
                        className="bbb_combo_image"
                        src=".imgur.com/K4b71NV.jpg"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-row justify-content-start">

                      <strike style={{ color: "red" }}>

                        <span className="fs-10" style={{ color: "black" }}>
                          ₹ 32,000<span> </span>
                        </span>
                      </strike>
                      <span className="ml-auto">
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                        <i className="fa fa-star p-rating" />
                      </span>
                    </div>
                    <div
                      className="d-flex flex-row justify-content-start"
                      style={{ marginBottom: 13 }}
                    >

                      <span style={{ marginTop: "-4px" }}>₹30,000</span>
                      <span className="ml-auto fs-10">23 Reviews</span>
                    </div>
                    <span>Acer laptop with 10GB RAM + 500 GB Hard Disk</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12" style={{ marginLeft: 36 }}>
                  <div className="boxo-pricing-items">
                    <div className="combo-pricing-item">

                      <span className="items_text">1 Item</span>
                      <span className="combo_item_price">₹13,200</span>
                    </div>
                    <div className="combo-plus">

                      <span className="plus-sign">+</span>
                    </div>
                    <div className="combo-pricing-item">

                      <span className="items_text">1 Add-on</span>
                      <span className="combo_item_price">₹500</span>
                    </div>
                    <div className="combo-plus">

                      <span className="plus-sign">=</span>
                    </div>
                    <div className="combo-pricing-item">

                      <span className="items_text">Total</span>
                      <span className="combo_item_price">₹13,700</span>
                    </div>
                    <div className="add-both-cart-button">

                      <button type="button" className="btn btn-primary shop-button">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-underline">
            <div className="col-md-6">

              <span className=" deal-text">Specifications</span>
            </div>
            <div className="col-md-6">
              <a href="#" data-abc="true">
                <span className="ml-auto view-all" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="col-md-12">
                <tbody>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Sales Package :</span>
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>
                          2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User
                          Guide, Warranty Documents
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Model Number :</span>
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li> 14-dh0107TU </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Part Number :</span>
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>7AL87PA</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Color :</span>
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>Black</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Suitable for :</span>
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>Processing &amp; Multitasking</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Processor Brand :</span>
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>Intel</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SelectProductModal
          product={product}
          setOpenModal={setOpen}
        />
      </Modal>
    </div>
  )
}
export default DetailProduct