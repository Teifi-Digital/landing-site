import React from 'react'
import Image from 'next/image'
import { API_URL } from '@/config/index'

function Section9({ data }) {
  const {
    copyright,
    privacy_policy: privacyPolicy,
    social_items: socialItems
  } = data

  return (
    <div className='section9-root'>
      <div className='section9-container'>
        <div className='copyright'>{copyright}</div>
        <div className='social'>
          {socialItems.map((item, index) => {
            return (
              <a className='social-item' href={item.href} key={`social-item-${index}`}>
                <Image src={`${API_URL}${item.icon.url}`} alt={item.icon.alternativeText} width={17} height={17} />
              </a>
            )
          })}
        </div>
        <div className='privacy-policy'>
          <a href={privacyPolicy.href}>{privacyPolicy.label}</a>
        </div>
      </div>
      <div className='section9-mobile-container'>
        <div className='mobile-social top'>
          {socialItems.map((item, index) => {
            return (
              <a className='mobile-social-item' href={item.href} key={`social-item-${index}`}>
                <Image src={`${API_URL}${item.icon.url}`} alt={item.icon.alternativeText} width={17} height={17} />
              </a>
            )
          })}
        </div>
        <div className='bottom'>
          <div className='mobile-copyright'>{copyright}</div>
          <div className='mobile-privacy-policy'>
            <a href={privacyPolicy.href}>{privacyPolicy.label}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section9