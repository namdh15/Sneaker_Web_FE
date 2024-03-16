import Slider from "react-slick";
import "./Components.scss"
import ProductCard from "./item-components/ProductCard";

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img class="d-block w-100" src="./assets/next.svg" alt="First slide" />
    </div >
  );
}

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img class="d-block w-100" src="./assets/previous.svg" alt="First slide" />
    </div>
  );
}

const SlideProducts = ({ products, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">{title}</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="slider-product-section">
            <Slider {...settings}>
              {products.map((product) => <ProductCard product={product} />)}
            </Slider>
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="button-loadmore">More</button>
        </div>

      </div>
    </>



  );
}

export default SlideProducts;