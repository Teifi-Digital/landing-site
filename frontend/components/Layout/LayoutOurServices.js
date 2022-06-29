import Image from "next/image";
import { getStrapiMediaNotAPI } from "@/lib/media";

function LayoutOurServices(props) {
  const { data } = props;  
  return (
    <div className="section-our-services">
      <div className="section-our-services-container">
          <div className="section-our-services-top">
                <div className="section-our-services-tag">
                  <p>{data.tag}</p>
                </div>
                <div className="section-our-services-headline">
                  <p>{data.headline}</p>
                </div>
                <div className="section-our-services-paragraph">
                  <p>{data.paragraph}</p>
                </div>
                <div className="section-our-services-partners">
                  {data.button_items.map((item, index) => {
                    return (
                      <a href={item.href} key={index}>
                        <button className="section-our-services-partners-item">{item.label}</button>
                      </a>
                    );
                  })
                  }
                </div>
          </div>

          <div className="section-our-services-bottom">                
                <div className="section-our-services-cards">
                  {data.card1_items.map((item, index) => {
                    return (
                      <div className="section-our-services-cards-item" key={index}>

                      </div>
                    );
                  })
                  }
                </div>
          </div> 

      </div>
    </div>
  )
}

export default LayoutOurServices;
