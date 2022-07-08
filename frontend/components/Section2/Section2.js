import React from 'react'
import { openInNewTab } from '@/utilities/window'
import Image from 'next/image'
import { API_URL } from '@/config/index'

function Section2({ data }) {
  const { paragraph_1, paragraph_2, button } = data
  const headline = data.emphasized_items

  return (
    <div className='section2-container'>
      <div className='headline'>
        {headline.map(({ text, isEmphasized }, index) => (
          <span key={`headline_${index}`} className={isEmphasized ? 'emphasize' : ''}>
            {text}
          </span>
        ))}
      </div>
      <div className='paragraph-1'>{paragraph_1}</div>
      <div className='paragraph-2'>{paragraph_2}</div>
      <div className='button'>
        <div className='label'>{button.label}</div>
        <div className='icon'>
          <Image 
            src={`${API_URL}${button.icon.url}`}
            width="100%" height="100%" layout="responsive" objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Section2