import { getStrapiMediaNotAPI } from "@/lib/media";
import LayoutRightSide from "./LayoutRightSide";

function LayoutOurAchievements(props) {
  const { data } = props;

  return (
    <div className="section-our-achievements section-page" id={data.anchor}>
      <div className="section-our-achievements-container container-odd">
        <div className="container-content">
          <LayoutRightSide
            selected_key={data.anchor}
            anchor_items={data.anchor_items}
            color={'black'}
          />
          <div className="section-our-achievements-top">
            <div className="section-our-achievements-headline item-headline section-headline">
              <span>{data.headline}</span>
            </div>
            <div className="section-our-achievements-paragraph item-paragraph section-paragraph">
              <span>{data.paragraph}</span>
            </div>
          </div>

          <div className="section-our-achievements-middle">
            <div className="section-our-achievements-cards">
              {data.achivement_items.map((item, index) => {
                return (
                  <div className="section-our-achievements-cards-item" key={`card1_items_${index}`}>
                    <div className="section-our-achievements-cards-item-icon">
                      <img src={getStrapiMediaNotAPI(item.icon.url)} alt={item.icon.alternativeText} />
                    </div>
                    <div className="section-our-achievements-cards-item-number">{item.number}</div>
                    <div className="section-our-achievements-cards-item-paragraph">{item.paragraph}</div>
                  </div>
                )
              })
              }
            </div>
          </div>

          <div className="section-our-achievements-bottom">
            <div className="section-our-achievements-bottom-cards">
              {data.card2_items.map((item, index) => {
                return (
                  <div className="bottom-cards-item" key={`card1_items_${index}`}>
                    <div className="bottom-cards-item-image">
                      <img src={getStrapiMediaNotAPI(item.image.url)} alt={item.image.alternativeText} />
                    </div>
                    <div className="bottom-cards-item-headline">{item.headline}</div>
                    <div className="bottom-cards-item-paragraph">
                      <ul>
                        {item.line_items.map((line_item, line_items_index) => {
                          return (
                            <li key={`line_items_${line_items_index}`}>{line_item}</li>
                          )
                        })}
                      </ul>
                    </div>

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
