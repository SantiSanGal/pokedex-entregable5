import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-red'>
        <div className="header-img">
          <img className='header-img-img' src="./images/pokedex.png" alt="" />
        </div>
      </div>
      <div className='header-black'></div>
      <div className="header-circle">
        <div className='header-circle-intern'></div>
      </div>
    </header>
  )
}

export default Header