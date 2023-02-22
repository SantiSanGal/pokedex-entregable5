import React from 'react'
// import { useNavigate } from 'react-router-dom'
import './Header.css'

// const navigate = useNavigate()

// const handleClickOnHeader = e =>{
  // navigate('/pokedex')
// }

// onClick={handleClickOnHeader}

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