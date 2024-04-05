import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { Footer, Navbar, ProductDetail, SimilarProducts, SkaletonDetailProduct, SkeletonSimilarProducts } from "../components";


import * as Api from "../services/product"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await Api.getProduct(id);
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
  }, [id]);


  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true);
  //     setLoading2(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const data = await response.json();
  //     setProduct(data);
  //     setLoading(false);
  //     const response2 = await fetch(
  //       `https://fakestoreapi.com/products/category/${data.category}`
  //     );
  //     const data2 = await response2.json();
  //     setSimilarProducts(data2);
  //     setLoading2(false);
  //   };
  //   getProduct();
  // }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <SkaletonDetailProduct /> : <ProductDetail product={product} />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={100}
              delay={5}
            >
              {loading2 ? <SkeletonSimilarProducts /> : <SimilarProducts similarProducts={[]} />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
