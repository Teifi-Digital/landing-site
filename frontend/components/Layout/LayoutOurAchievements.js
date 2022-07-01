import { getStrapiMediaNotAPI } from "@/lib/media";

function LayoutOurAchievements(props) {console.log('=====', props.data.card2_items)
  const { data } = props;  
  return (
    <div className="section-our-achievements">
      <div className="section-our-achievements-container container-odd">
        <div className="container-content">
          <div className="section-our-achievements-top">
                <div className="section-our-achievements-tag section-tag">
                  <p>{data.tag}</p>
                </div>
                <div className="section-our-achievements-headline item-headline section-headline">
                  <p>{data.headline}</p>
                </div>
                <div className="section-our-achievements-paragraph item-paragraph section-paragraph">
                  <p>{data.paragraph}</p>
                </div>
          </div>

          <div className="section-our-achievements-middle">
                <div className="section-our-achievements-cards">
                  {data.achivement_items.map((item, index) => {
                    return(
                      <div className="section-our-achievements-cards-item" key={`card1_items_${index}`}>
                        <p className="section-our-achievements-cards-item-icon">
                          <img src={getStrapiMediaNotAPI(item.icon.url)} alt={item.icon.alternativeText} />
                        </p>
                        <p className="section-our-achievements-cards-item-number">{item.number}</p>
                        <p className="section-our-achievements-cards-item-paragraph">{item.paragraph}</p>

                      </div>
                    )
                  })
                  }
                </div>
          </div> 

          <div className="section-our-achievements-bottom">
                <div className="section-our-achievements-cards">
                  {data.card2_items.map((item, index) => {
                    return(
                      <div className="section-our-achievements-cards-item" key={`card1_items_${index}`}>
                        <p className="section-our-achievements-cards-item-icon">
                          <img src={getStrapiMediaNotAPI(item.image.url)} alt={item.image.alternativeText} />
                        </p>
                        <p className="section-our-achievements-cards-item-headline">{item.headline}</p>
                        <p className="section-our-achievements-cards-item-paragraph">
                          {item.line_items.map((line_item, line_items_index) => {
                            return(
                              <p key={`line_items_${line_items_index}`}>{line_item}</p>
                            )
                          })}
                        </p>

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

export default LayoutOurAchievements;
