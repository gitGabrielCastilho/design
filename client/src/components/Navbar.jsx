import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
      <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/blog">
            <h6>BLOG</h6>
          </Link>
          <Link className="link" to="/projects">
            <h6>PROJECTS</h6>
          </Link>
          <span>Carol</span>
          <span>Logout</span>
          <span className='write'>          
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar