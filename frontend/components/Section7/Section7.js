import React from 'react'
import Card3 from '@/components/Card3/Card3'

function Section7({ data }) {
  const { tag, headline, card3_items: cardItems } = data
  const paragraph = data.paragraph.split('. ')
  const emphasize = paragraph.pop()
  const _paragraph = [
    paragraph.join('. ') + '. ',
    emphasize
  ]

  return (
    <div className='section7-container'>
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