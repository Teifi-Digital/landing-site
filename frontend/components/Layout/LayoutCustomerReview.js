import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LayoutCustomerReview(props) {
  const { data } = props;
  let sliderData = {
    data: data?.quote_items || [],
    settings: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    },
    className: 'section-customer-review-slider',
    }
  return (
    <div className="section-customer-review">
      <div className="section-customer-review-container container-odd">
          <Slider {...sliderData.settings} className={sliderData.className}>
          {sliderData.data.map((slide, index) => {
            return (
              <div key={index} className="section-customer-review-slider-item">
                <p className="section-customer-review-slider-item-quote">{slide.quote}</p>
                <p className="section-customer-review-slider-item-name">{slide.name}</p>
                <p className="section-customer-review-slider-item-company">{slide.company}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  )
}

export default LayoutCustomerReview;
