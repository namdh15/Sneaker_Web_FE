import Slider from "react-slick";
import "./organisms.scss"
import { EmptyComponent, ProductCard } from "..";
import { Link } from "react-router-dom";


const SlideProducts = ({ products, title }) => {
  const settings = {
    dots: title?.length > 0,
    infinite: products?.length > 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  };

  return (
    <>
      <div className={`container ${title && 'my-5'}`}>
        {title && <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center"><b>{title}</b></h2>
            <hr />
          </div>
        </div>}
        <div className="row justify-content-center">
          <div className="slider-product-section">
            {products?.length > 0 ?
              <Slider {...settings}>
                {products.map((product) => <ProductCard product={product} />)}
              </Slider>
              :
              <EmptyComponent
                isSlide={true}
                message1={'Sorry, there are currently no products available'}
                message2={`Don't worry, we'll have products available soon!`}
              />
            }
          </div>
        </div>
        {(products?.length > 4 && title) &&
          <Link className="row justify-content-center" to="/products" style={{ textDecoration: 'none' }}>
            <button className="button-loadmore">More</button>
          </Link>}
      </div>
    </>
  );
}

export default SlideProducts;