import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutRightSide from "./LayoutRightSide";
import { getStrapiMediaNotAPI } from "@/lib/media";

function LayoutOurProjects(props) {
  const { data } = props;
  let sliderData = {
    data: data?.logo_items || [],
    settings: {
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 2,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            rows: 2,
            slidesPerRow: 2,
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
          }
        },
      ],
    },
    className: 'section-our-projects-slider',
    }
  return (
    <div className="section-our-projects section-page">
      <div className="section-our-projects-container container-even">
        <div className="container-content">
            <LayoutRightSide selected_key = "our-projects" />
            <div className="section-our-projects-top">
                  <div className="section-our-projects-tag section-tag" id="our-projects">
                    <span>{data.tag}</span>
                  </div>
                  <div className="section-our-projects-headline item-headline section-headline">
                    <span>{data.headline}</span>
                  </div>
                  <div className="section-our-projects-paragraph item-paragraph section-paragraph">
                    <span>{data.paragraph}</span>
                  </div>
            </div>
              <Slider {...sliderData.settings} className={sliderData.className}>
              {sliderData.data.map((slide, index) => {
                return (
                  <div key={index} className="section-our-projects-slider-item">
                    <img className="section-our-projects-slider-item-image" src={getStrapiMediaNotAPI(slide.url)} alt={slide.alternativeText} />
                  </div>
                );
              })}
            </Slider>
            
        </div>
      </div>
    </div>
  )
}

export default LayoutOurProjects;
