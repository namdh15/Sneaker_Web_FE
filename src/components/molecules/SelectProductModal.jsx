import React, { useEffect, useState } from 'react'
import { addCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Api from "../../services/product"
import Slider from 'react-slick';
import { Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { PRODUCT_COLOR, PRODUCT_SIZE } from '../../constants';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 3
};

const SelectProductModal = (props) => {
  const dispatch = useDispatch();
  const { productId } = props
  const [prodDetails, setProdDetails] = useState()

  useEffect(() => {
    const getProdDetails = async () => {
      const response = await Api.getProduct(productId);
      setProdDetails(response)
    }
    getProdDetails()
  }, [productId])

  const addProduct = (product) => {
    toast.success("Add an item to cart successful")
    dispatch(addCart(product))
  }

  return (
    <div
      className="modal fade"
      id='select-product-variant-modal'
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className=" modal-dialog modal-dialog-centered" style={{ width: '70vw', margin: 'auto' }} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              <b>Choose the product variant</b>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="card col-md-4">
                <Slider {...settings}>
                  <div>
                    <img width={'250px'} height={'200px'} src='http://42.96.32.131:8000/media/products/pexels-maria-orlova-4947417.jpg' alt="" />
                  </div>
                  <div>
                    <img width={'250px'} height={'200px'} src='http://42.96.32.131:8000/media/products/pexels-maria-orlova-4947417.jpg' alt="" />
                  </div>
                  <div>
                    <img width={'250px'} height={'200px'} src='http://42.96.32.131:8000/media/products/pexels-maria-orlova-4947417.jpg' alt="" />
                  </div>
                </Slider>
              </div>
              <div className="col-md-8">
                <b>Select product variant</b>
                <hr />
                <form className="">
                  <p>Select Size</p>
                  <RadioGroup
                    row
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                  // value={value}
                  // onChange={handleRadioChange}
                  >
                    {PRODUCT_SIZE.map((item) => (
                      <FormControlLabel value={item} control={<Radio />} label={item} sx={{ marginRight: '5em' }} />
                    ))}
                  </RadioGroup>
                  <p className='mt-3'>Select Color</p>
                  <RadioGroup
                    row
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                  // value={value}
                  // onChange={handleRadioChange}
                  >
                    {PRODUCT_COLOR.map((item) => (
                      <div className='d-flex justify-content-center align-items-center mr-5'>
                        <FormControlLabel
                          value={item}
                          control={<Radio />}
                          label={item}

                        />
                        <div style={{
                          background: 'gray',
                          width: '20px',
                          height: '20px',
                          margin: '-10px 0 0px -10px',
                          borderRadius: '3px'
                        }}></div>
                      </div>
                    ))}
                  </RadioGroup>
                  {/* {PRODUCT_SIZE.map((item) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={item}
                    />
                  ))} */}
                </form >
              </div>
            </div>


          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            // onClick={}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
            // onClick={}
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectProductModal;