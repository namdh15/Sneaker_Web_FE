import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import * as Api from "../../services/product"
import { ProductCard, SkeletonProducts } from "..";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await Api.getProducts();
      setData(response);
      setFilter(response);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.categories === cat);
    setFilter(updatedList); 
    // setFilter(data);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(0)}>Shoes</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(1)}>
            Sandals
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(2)}>Running</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct(3)}>Sneaker</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-3 col-sm-6 col-xs-8 col-12 mb-4">
              <ProductCard product={product} />
            </div>
          )
        })}
      </>
    );
  };
  return (
    <>
      <div className="list-poducts my-3 py-3 pr-5">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <SkeletonProducts /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
