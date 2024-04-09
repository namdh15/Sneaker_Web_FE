import Slider from 'react-slick';
import './organisms.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlideImageHomepage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  };
  return (
    <div className='slider-home-image'>
      <Slider {...settings}>
        <div>
          <img className="d-block w-100" src="./assets/home_1.jpg" alt="First slide" />
        </div>
        <div>
          <img className="d-block w-100" src="./assets/home_2.jpg" alt="Second slide" />
        </div>
        <div>
          <img className="d-block w-100" src="./assets/home_3.jpg" alt="Third slide" />
        </div>
        <div>
          <img className="d-block w-100" src="./assets/home_4.jpg" alt="Fourth slide" />
        </div>
      </Slider>
    </div>
  );
}

export default SlideImageHomepage;