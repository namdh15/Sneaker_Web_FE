import React, { useEffect, useLayoutEffect, useState } from 'react'
import { addCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Api from "../../services/product"
import Slider from 'react-slick';
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { PRODUCT_COLOR, PRODUCT_SIZE } from '../../constants';
import Loading from '../atoms/Loading';
import InputNumberCustom from '../atoms/InputNumberCustom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '1px solid gray',
  borderRadius: '1em',
  boxShadow: 24,
  p: 4,
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const generateColor = (index) => {
  switch (index) {
    case 0:
      return 'black'
    case 1:
      return 'gray'
    case 2:
      return 'blue'
    case 3:
      return 'orange'
    case 4:
      return 'navy'
    default:
      return "white";
  }
}

const SelectProductModal = (props) => {
  const dispatch = useDispatch();
  const { product, setOpenModal } = props;
  const [loading, setLoading] = useState(false);
  const [prodDetails, setProdDetails] = useState([]);
  const [currentVariant, setCurrentVariant] = useState();

  useLayoutEffect(() => {
    const getProdDetails = async () => {
      setLoading(true);
      const response = await Api.getProduct(product?.id);
      setProdDetails(response?.details);
      const { details, ...currentProd } = response;
      setCurrentVariant({ ...currentProd, stock: 1 })
      setLoading(false);
    };
    getProdDetails();
  }, [product])

  const handleAddProduct = () => {
    setOpenModal(false);
    dispatch(
      addCart({
        ...currentVariant,
        id: prodDetails?.find(item => (item?.size === currentVariant?.size && item?.color === currentVariant?.color))?.id || currentVariant?.id,
        image: prodDetails?.find(item => (item?.size === currentVariant?.size && item?.color === currentVariant?.color))?.image || currentVariant?.image
      })
    );
    toast.success("Add an item to cart successful")
  }

  return (
    <Box sx={style}>
      {loading ? <Loading /> :
        <>
          <div>
            <h5 className="modal-title" id="exampleModalLongTitle">
              <b>Choose the product variant</b>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpenModal(false)}
            ><span aria-hidden="true">×</span></button>
          </div>
          <div className="row">
            <div className="card col-md-4">
              <Slider
                {...settings}
                ref={slider => {
                  slider?.slickGoTo(prodDetails?.findIndex(item => (item?.size === currentVariant?.size && item?.color === currentVariant?.color)))
                }}
              >
                {prodDetails?.length ? prodDetails?.map(variant => (
                  <div>
                    <img style={{ width: '250px', height: '200px', objectFit: 'cover' }}
                      src={variant?.image}
                      alt=""
                    />
                  </div>
                )) :
                  <div>
                    <img style={{ width: '250px', height: '200px', objectFit: 'cover' }}
                      src={product?.image}
                      alt=""
                    />
                  </div>}
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
                  value={currentVariant?.size}
                  onChange={(event) => setCurrentVariant({ ...currentVariant, size: +event.target.value })}
                >
                  {PRODUCT_SIZE.map((item, index) => (
                    <FormControlLabel
                      value={item}
                      control={<Radio />}
                      label={item}
                      disabled={![...new Set(prodDetails?.map(product => product.size))]?.includes(item)}
                      sx={{ marginRight: '5em' }}
                    />
                  ))}
                </RadioGroup>
                <p className='mt-3'>Select Color (Choose variant size first)</p>
                <RadioGroup
                  row
                  aria-labelledby="demo-error-radios"
                  name="quiz"
                  value={currentVariant?.size}
                  onChange={(event) => setCurrentVariant({ ...currentVariant, color: +event.target.value })}
                >
                  {PRODUCT_COLOR.map((item, index) => (
                    <div className='d-flex justify-content-center align-items-center mr-5'>
                      <FormControlLabel
                        value={index}
                        control={<Radio />}
                        label={item}
                        disabled={![...new Set(prodDetails?.filter((item) => (+item?.size === +currentVariant?.size))?.map(product => product.color))]?.includes(index)}
                      />
                      <div style={{
                        background: generateColor(index),
                        width: '20px',
                        height: '20px',
                        margin: '-10px 0 0px -10px',
                        borderRadius: '3px'
                      }}></div>
                    </div>
                  ))}
                </RadioGroup>
                <p className='mt-3'>Input Quantity</p>
                <InputNumberCustom
                  sx={{ justifyContent: "start" }}
                  onChange={(numberValue) => setCurrentVariant({ ...currentVariant, stock: numberValue })}
                  defaultValue={1}
                />
              </form >
            </div>
          </div>
          <hr className='mt-5 mb-3' />
          <div className="modal-footer ">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!(currentVariant?.size !== undefined && currentVariant?.color !== undefined)}
              className="btn btn-success"
              data-dismiss="modal"
              onClick={handleAddProduct}
            >
              Add to card
            </button>
          </div>
        </>}
    </Box >
  )
}

export default SelectProductModal;