import { getStrapiMediaNotAPI } from "@/lib/media";
import LayoutRightSide from "@/components/Layout/LayoutRightSide";
import { openInNewTab } from '@/utilities/window'
import { useRouter } from "next/router"

function LayoutOurServices(props) {
  const { data } = props
  const router = useRouter()

  const handleButtonClick = ({ isExternal, href }) => {
    if (isExternal) {
      openInNewTab(href)
    } else {
      router.push(href)
    }
  }

  return (
    <div className="section3">
      <div className="section-our-services section-page" id={data.anchor}>
        <div className="section-our-services-container container-odd">
          <div className="container-content">
            <LayoutRightSide
              selected_key={data.anchor}
              anchor_items={data.anchor_items}
              color={'black'}
            />
            <div className="section-our-services-top">
              <div className="section-our-services-headline item-headline section-headline">
                <span>{data.headline}</span>
              </div>
              <div className="section-our-services-paragraph item-paragraph section-paragraph">
                <span>{data.paragraph}</span>
              </div>
              <div className="section-our-services-partners">
                {data.button_items.map((item, index) => {
                  return (
                    <button onClick={() => handleButtonClick(item)} key={index} className="section-our-services-partners-item section-button">
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
                  return (
                    <div className="section-our-services-cards-item" key={`card1_items_${index}`}>
                      <div className="section-our-services-cards-item-icon">
                        <img src={getStrapiMediaNotAPI(item.icon.url)} alt={item.icon.alternativeText} />
                      </div>
                      <div className="section-our-services-cards-item-headline"><span>{item.headline}</span></div>
                      <div className="section-our-services-cards-item-paragraph">{item.paragraph}</div>

                    </div>
                  )
                })
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutOurServices;
