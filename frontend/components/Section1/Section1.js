import React, { useState } from 'react'
import { API_URL } from '@/config/index'

function Section1({ data: { anchor_items, logo, logo: { url, alternativeText } } }) {
  const [anchorActive, setAnchorActive] = useState('contact')

  return (
    <div className='section1-container'>
      <div className='logo'>
        <img src={`${API_URL}${url}`} alt={alternativeText} />
      </div>
      <div className='anchor'>
        {anchor_items.map((anchor, index) => {
          let added = anchor === anchorActive? '-active': ''
          return (
            <div key={`anchor_${index}`} className={`anchor-item${anchorActive}`}>
              <a href={`#${anchor}`}>{anchor}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section1