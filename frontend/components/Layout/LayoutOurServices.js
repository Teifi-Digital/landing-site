import Image from "next/image";
import { getStrapiMediaNotAPI } from "@/lib/media";

function LayoutOurServices(props) {console.log('=====', props.data.card1_items)
  const { data } = props;  
  return (
    <div className="section-our-services">
      <div className="section-our-services-container container-odd">
        <div className="container-content">
          <div className="section-our-services-top">
                <div className="section-our-services-tag section-tag">
                  <p>{data.tag}</p>
                </div>
                <div className="section-our-services-headline item-headline section-headline">
                  <p>{data.headline}</p>
                </div>
                <div className="section-our-services-paragraph item-paragraph section-paragraph">
                  <p>{data.paragraph}</p>
                </div>
                <div className="section-our-services-partners">
                  {data.button_items.map((item, index) => {
                    return (
                      <button href={item.href} key={index} className="section-our-services-partners-item section-button">
                        <img src={getStrapiMediaNotAPI(item.icon.url)} alt={item.icon.alternativeText} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })
                  }
                </div>
          </div>

          <div className="section-our-services-bottom">
                <div className="section-our-services-cards">
                  {data.card1_items.map((item, index) => {
                    return(
                      <div className="section-our-services-cards-item" key={`card1_items_${index}`}>
                        <p className="section-our-services-cards-item-icon">
                          <img src={getStrapiMediaNotAPI(item.icon.url)} alt={item.icon.alternativeText} />
                        </p>
                        <p className="section-our-services-cards-item-headline">{item.headline}</p>
                        <p className="section-our-services-cards-item-paragraph">{item.paragraph}</p>

                      </div>
                    )
                  })
                  }
                </div>
          </div> 
          
        </div>
      </div>
    </div>
  )
}

export default LayoutOurServices;
