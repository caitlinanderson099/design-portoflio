import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div id='website-title'>
      <h2> Portfolio </h2>
      <img src='/img/site-img/portfolio-logo-transparent.png' alt='portfolio logo' id='logo'/>
      </div>
   
      <ul>
        <Link to='/'> Home</Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/skills'> Skills </Link>
      </ul>
     
    </header>
  )
}

export default Header
