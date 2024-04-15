import React from 'react'
import { Link } from 'react-router-dom';
import './molecules.scss'
import SelectProductModal from './SelectProductModal';

const ProductCard = ({ product }) => {

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
            {product.name}
          </h5>
          <p className="card-text">
            {product.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">{Number(product.price).toLocaleString('en')} vnd</li>
          {/* <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li> */}
        </ul>
        <div className="product-card-body">
          <Link to={"/products/" + product.id} className="btn btn-dark m-1">
            Buy Now
          </Link>
          <button
            type="button"
            className="btn btn-dark m-1"
            data-target="#select-product-variant-modal"
            data-toggle="modal"
          //  onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <SelectProductModal
        productId={product?.id}
      />
    </>
  )
}

export default ProductCard;
