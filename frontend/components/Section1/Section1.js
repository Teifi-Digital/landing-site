import React, { useState } from 'react'
import { API_URL } from '@/config/index'
import { slide as Menu } from 'react-burger-menu'
import { FaNetworkWired, FaInfoCircle, FaUser } from 'react-icons/fa'

function Section1({ data: { anchor_items, logo, logo: { url, alternativeText } } }) {
  const [anchorActive, setAnchorActive] = useState('contact')

  const changeAnchor = (anchor) => {
    // console.log('→ anchor', anchor)
    setAnchorActive(anchor)
  }

  return (
    <div className='section1-container'>
      <div className='logo'>
        <img src={`${API_URL}${url}`} alt={alternativeText} />
      </div>

      <div className='anchor'>
        {anchor_items.map((anchor, index) => {
          const added = anchor === anchorActive ? 'anchor-active' : ''
          return (
            <div key={`anchor_${index}`} className={`anchor-item ${added}`} onClick={() => changeAnchor(anchor)}>
              <a href={`#${anchor}`}>{anchor}</a>
            </div>
          )
        })}
      </div>

      <div className="burger">
        {/* <svg width={20} height={15} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 14H19M1 7.5H19M1 1H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg> */}
        <Menu
          customBurgerIcon={
            <svg width={20} height={15} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14H19M1 7.5H19M1 1H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        >
          <a className="menu-item" href="/">
            <FaNetworkWired />
            <span>Work</span>
          </a>

          <a className="menu-item" href="/burgers">
            <FaInfoCircle />
            <span>About</span>
          </a>

          <a className="menu-item" href="/pizzas">
            <FaUser />
            <span>Contact</span>
          </a>

        </Menu>
      </div>

    </div>
  )
}

export default Section1