import React from 'react'
import { openInNewTab } from '@/utilities/window'

function Section2({ data }) {
  console.log('→ data', data)
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
        {button.label}
      </div>
    </div>
  )
}

export default Section2