import React from 'react'

function Card3({ data }) {
  return (
    <div className='card3-item'>
      <div className='content'>
        <div className='headline'>{data.headline}</div>
        <div className='paragraph'>{data.paragraph}</div>
      </div>
    </div>
  )
}

export default Card3