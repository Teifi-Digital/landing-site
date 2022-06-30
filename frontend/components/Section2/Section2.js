import React from 'react'
import { openInNewTab } from '@/utilities/window'
import Image from 'next/image'
import { API_URL } from '@/config/index'

function Section2({ data }) {
  const { paragraph_1, paragraph_2, button } = data
  const headline = data.headline.split(' ')
  const emphasizeWord = headline.pop().replace('.', '')
  const _headline = [
    headline.join(' '),
    emphasizeWord,
    '.'
  ]

  return (
    <div className='section2-container'>
      <div className='headline'>
        {_headline[0]}{' '}
        <span className={'emphasize'}>{_headline[1]}</span>
        {_headline[2]}
      </div>
      <div className='paragraph-1'>{paragraph_1}</div>
      <div className='paragraph-2'>{paragraph_2}</div>
      <div className='button'>
        <div className='label'>{button.label}</div>
        <div className='icon'>
          <Image src={`${API_URL}${button.icon.url}`} width={14} height={14} />
        </div>
      </div>
    </div>
  )
}

export default Section2