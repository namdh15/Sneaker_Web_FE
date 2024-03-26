import { Link, useParams } from 'react-router-dom';
import './page.scss';
import { useEffect, useState } from 'react';

import * as Api from "../services/product"

const DetailProduct = () => {
  const { code } = useParams();
  const [product, setProduct] = useState([]);
  // const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await Api.getProduct(code);
      setProduct(response);
      setLoading(false);
      //     const response2 = await fetch(
      //       `https://fakestoreapi.com/products/category/${data.category}`
      //     );
      //     const data2 = await response2.json();
      //     setSimilarProducts(data2);
      //     setLoading2(false);
    };

    getProducts();
  }, [code]);


  return (
    <div className="container">
      <div className="single_product">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#fff", padding: 11 }}
        >
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="">
                  <img src="" alt="" />
                </li>
                <li data-image="">
                  <img src="" alt="" />
                </li>
                <li data-image=".imgur.com/HkEiXfn.jpg">
                  <img src=".imgur.com/HkEiXfn.jpg" alt="" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              <div className="image_selected">
                <img src=".imgur.com/qEwct2O.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-3">
              <div className="product_description">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Products</a>
                    </li>
                    <li className="breadcrumb-item active">Accessories</li>
                  </ol>
                </nav>
                <div className="product_name">
                  {product?.name}
                </div>
                <div className="product-rating">
                  <span className="badge badge-success">
                    <i className="fa fa-star" /> 4.5 Star
                  </span>
                  <span className="rating-review">35 Ratings &amp; 45 Reviews</span>
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

                            <img src="mg.icons8.com/color/48/000000/price-tag.png" />
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
                      <span className="product_options">RAM Options</span>
                      <br />
                      <button className="btn btn-primary btn-sm mr-2">4 GB</button>
                      <button className="btn btn-primary btn-sm mr-2">8 GB</button>
                      <button className="btn btn-primary btn-sm mr-2">16 GB</button>
                    </div>
                    <div className="col-xs-6  ml-3 mb-3">
                      <span className="product_options">Storage Options</span>
                      <br />
                      <button className="btn btn-primary btn-sm  mr-2">500 GB</button>
                      <button className="btn btn-primary btn-sm  mr-2">1 TB</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6" style={{ marginLeft: 13 }}>
                    <div className="product_quantity">
                      <span>QTY: </span>
                      <input
                        id="quantity_input"
                        type="number"
                        pattern="[0-9]*"
                        defaultValue={1}
                      />
                      <div className="quantity_buttons">
                        <div
                          id="quantity_inc_button"
                          className="quantity_inc quantity_control"
                        >
                          <i className="fas fa-chevron-up" />
                        </div>
                        <div
                          id="quantity_dec_button"
                          className="quantity_dec quantity_control"
                        >
                          <i className="fas fa-chevron-down" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <button
                      className="btn btn-dark"
                    // onClick={() => addProduct(product)}
                    >
                      Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-dark mx-2">
                      Go to Cart
                    </Link>
                    <div className=" btn btn-outline-dark mx-1">
                      <i className="fas fa-heart" />
                    </div>
                  </div>
                </div>
              </div>
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
    </div>

  )
}
export default DetailProduct