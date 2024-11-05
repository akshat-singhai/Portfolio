import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from './portfolio '
import Aboutlogo from './asset/about_icon.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='container-box'>
      <div className='nav-box' >
        <nav>
            <Link to='/About'> <li className='list-box'>ABOUT</li></Link>
            <Link to='/education'><li className='list-box'>EDUCATION</li></Link>
            <Link to='/Skill'><li className='list-box'>SKILL</li></Link>
            <Link to='/Project'><li className='list-box'>PROJECTS</li></Link>
            <Link to='/extracurricular'><li className='list-box'>EXTRACURRICULAR</li></Link>
        </nav>
      </div>
      <div className='dt-box'>
        <Portfolio />
      </div>
    </div>
  )
}

export default Navbar
