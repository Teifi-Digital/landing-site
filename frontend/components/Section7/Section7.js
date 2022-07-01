import React from 'react'
import Card3 from '@/components/Card3/Card3'
import LayoutRightSide from '@/components/Layout/LayoutRightSide'

function Section7({ data }) {
  const { tag, headline, card3_items: cardItems, anchor, anchor_items } = data
  const paragraph = data.paragraph.split('. ')
  const emphasize = paragraph.pop()
  const _paragraph = [
    paragraph.join('. ') + '. ',
    emphasize
  ]

  return (
    <div className='section7-container'>
      <span class='anchor' id={anchor}></span>
      <LayoutRightSide
        selected_key={anchor}
        anchor_items={anchor_items}
        color={'black'} 
      />
      <div className='top-block'>
        <div className='tag'>{tag}</div>
        <div className='headline'>{headline}</div>
        <div className='paragraph'>
          {_paragraph[0]}
          <span className='emphasize'>{_paragraph[1]}</span>
        </div>
      </div>
      <div className='card-items'>
        {cardItems.map((card, index) => (
          <Card3 data={card} key={`card3-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Section7