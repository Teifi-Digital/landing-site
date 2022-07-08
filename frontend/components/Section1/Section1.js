import React, { useState } from 'react'
import { API_URL } from '@/config/index'
import { slide as Menu } from 'react-burger-menu'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DynamicFaIcon from '@/components/DynamicFaIcon/DynamicFaIcon'

function Section1({ data }) {
  const router = useRouter()
  const { anchor_items, logo, logo: { url, alternativeText } } = data
  const [anchorActive, setAnchorActive] = useState('')


  const changeAnchor = (anchor) => {
    router.push(`#${anchor}`)
    setAnchorActive(anchor)
  }

  const changeBurger = (anchor) => {
    router.push(`#${anchor}`)
    setAnchorActive(anchor)
  }

  return (
    <div className='section1-container'>
      <div className='logo'>
        <Image src={`${API_URL}${url}`} alt={alternativeText}
          width="100%" height="100%" layout="responsive" objectFit="contain"
        />
      </div>

      <div className='anchor'>
        {anchor_items.map(({ anchor, label }, index) => {
          const added = anchor === anchorActive ? 'anchor-active' : ''
          return (
            <div key={`anchor_${index}`} className={`anchor-item ${added}`} onClick={() => changeAnchor(anchor)}>
              <span>{label}</span>
            </div>
          )
        })}
      </div>

      <div className="burger">
        <Menu
          customBurgerIcon={
            <svg width={20} height={15} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14H19M1 7.5H19M1 1H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        >
          <div className='burger-logo'>
            <Image src={`${API_URL}${url}`} alt={alternativeText}
              width="100%" height="100%" layout="responsive" objectFit="contain"
            />
          </div>
          <div className='divide'></div>
          {anchor_items.map(({ anchor, label, icon }, index) => {
            const added = anchor === anchorActive ? 'menu-item-active' : ''
            return (
              <div
                className={`menu-item ${added}`}
                onClick={() => changeBurger(anchor)}
                key={`burger-item-${index}`}
              >
                <DynamicFaIcon name={icon} />
                <span>{label}</span>
              </div>
            )
          })}

        </Menu>
      </div>

    </div>
  )
}

export default Section1