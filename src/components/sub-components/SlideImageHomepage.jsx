import Slider from 'react-slick';
import './SubComponents.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlideImageHomepage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <div className='slider-home-image'>
      <Slider {...settings}>
        <div>
          <img class="d-block w-100" src="./assets/home_1.jpg" alt="First slide" />
        </div>
        <div>
          <img class="d-block w-100" src="./assets/home_2.jpg" alt="Second slide" />
        </div>
        <div>
          <img class="d-block w-100" src="./assets/home_3.jpg" alt="Third slide" />
        </div>
      </Slider>
    </div>
  );
}

export default SlideImageHomepage;