import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { getStrapiMediaNotAPI } from "@/lib/media";

function LayoutOurProjects(props) {
  const { data } = props;
  let sliderData = {
    data: data?.logo_items || [],
    settings: {
      arrows: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 8,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            rows: 2,
            slidesPerRow: 4,
          }
        },
      ],
    },
    className: 'section-our-projects-slider',
    }
  return (
    <div className="section-our-projects">
      <div className="section-our-projects-container">
        <div className="section-our-projects-top">
              <div className="section-our-projects-tag">
                <p>{data.tag}</p>
              </div>
              <div className="section-our-projects-headline">
                <p>{data.headline}</p>
              </div>
              <div className="section-our-projects-paragraph">
                <p>{data.paragraph}</p>
              </div>
        </div>
          <Slider {...sliderData.settings} className={sliderData.className}>
          {sliderData.data.map((slide, index) => {
            return (
              <div key={index} className="section-our-projects-slider-item">
                <Image className="section-our-projects-slider-item-image" src={getStrapiMediaNotAPI(slide.url)} alt={slide.alternativeText} width={80} height={80} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  )
}

export default LayoutOurProjects;
