import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2> Caitlin's Design Portfolio </h2>
      <ul>
        <Link to='/'> Home</Link>
        <Link to='/projects'> Projects </Link>
      </ul>
     
    </header>
  )
}

export default Header
