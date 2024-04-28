import React from 'react'
import { Link } from 'react-router-dom';
import './molecules.scss'
import SelectProductModal from './SelectProductModal';
import { Modal } from '@mui/material';

const ProductCard = ({ product }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="card text-center h-100" key={product.id}>
        <img
          className="card-img-top p-3"
          src={product.image}
          alt="Card"
          height={300}
        />
        <div className="product-card-body">
          <h5 className="card-title">
            <Link to={"/products/" + product.id} style={{ textDecoration: 'none', color: 'black' }} >
              {product.name}
            </Link>
          </h5>
          <p className="card-text">
            {product.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">{Number(product.price).toLocaleString('en')} vnd</li>
        </ul>
        <div className="product-card-body">
          {/* <Link to={"/products/" + product.id} className="btn btn-dark m-1">
            Buy Now
          </Link> */}
          <button
            type="button"
            className="btn btn-dark m-1"
            data-target="#select-product-variant-modal"
            data-toggle="modal"
            onClick={() => setOpen(true)}
          >
            Add to Cart
          </button>
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

    </>
  )
}

export default ProductCard;
