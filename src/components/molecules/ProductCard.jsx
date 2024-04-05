import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import { Link } from 'react-router-dom';
import './molecules.scss'
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    toast.success("Add an item to cart successful")
    dispatch(addCart(product))
  }
  return (
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
        <Link to={"/product/" + product.id} className="btn btn-dark m-1">
          Buy Now
        </Link>
        <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard;
