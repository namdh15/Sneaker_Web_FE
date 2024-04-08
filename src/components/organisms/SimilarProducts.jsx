import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/action';

const SimilarProducts = ({ similarProducts }) => {

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <>
      <div className="py-4 my-4">
        <div className="d-flex">
          {similarProducts.map((item) => {
            return (
              <div key={item.id} className="card mx-4 text-center">
                <img
                  className="card-img-top p-3"
                  src={item.image}
                  alt="Card"
                  height={300}
                  width={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title.substring(0, 15)}...
                  </h5>
                </div>
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                <div className="card-body">
                  <Link
                    to={"/product/" + item.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}


export default SimilarProducts;