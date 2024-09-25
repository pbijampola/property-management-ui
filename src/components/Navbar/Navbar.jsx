import React, { useState } from 'react'

import './Navbar.scss'

const navigationItems = [
  {
    id: 1,
    title: 'Home'
  },
  {
    id: 2,
    title: 'About'
  },
  {
    id: 3,
    title: 'Contact'
  },
  {
    id: 4,
    title: 'Agent'
  }
];
const rightNavigationItems = [
  {
    id: 1,
    title: 'Sign In'
  },
  {
    id: 2,
    title: 'Sign Up'
  }
];
const mobileNavigationItems = [
  {
    id: 1,
    title: 'Home'
  },
  {
    id: 2,
    title: 'About'
  },
  {
    id: 3,
    title: 'Contact'
  },
  {
    id: 4,
    title: 'Agent'
  },
  {
    id: 5,
    title: 'Sign In'
  },
  {
    id: 6,
    title: 'Sign Up'
  }
];

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
        <div className="left">
         <a href="/" className='logo'>
         <img src="/logo.png" alt="" />
         <span>Eastcode Estates</span>
         </a>
         {navigationItems.map((item, index) => (
            <a href="#" key={item.id}>{item.title}</a>
         ))}
        </div>
        <div className="right">
          {rightNavigationItems.map((item, index) => (
            <a href="#" key={item.id} className={index=== rightNavigationItems.length-1 ? 'last-item' : ''}>{item.title}</a>
          ))}
          <div className="menu">
            <img src="/menu.png" alt="" onClick={() => setOpen(!open)}/>
          </div>
          <div className={open ? 'row-menu active' : 'row-menu'}>
            {mobileNavigationItems.map((item, index) => (
              <a href="#" key={item.id} >{item.title}</a>
            ))}
          </div>
        </div>
    </nav>
  )
}

export default Navbar
