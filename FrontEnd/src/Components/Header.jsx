import React from 'react'
import Logo from '../Assets/LogoSolo1.png'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

function Header() {
  return (
    <div>
      <header>
        <nav>
          <img className='logo' src={Logo} alt="" />
          <div className="nav-items">
            <Link className='items' to="/">Home</Link>
            <Link className='items' to="/">Pages</Link>
            <Link className='items' to="/">Support</Link>
            <Link className='items' to="/">Dashboard</Link>
            <Link className='items' to="/">
              <button className='SignIn'>Sign In</button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header