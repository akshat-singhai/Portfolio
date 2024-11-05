import React from 'react'
import skillLogo from './asset/skill_logo.png'
import Material_design  from './asset/material-design logo.png' 
import Reacte_logo from './asset/reacte logo.png'
import TypeScrip_logo from './asset/Type Scrip logo.png'
import Jslogo from './asset/javascript-logo.png'
import html_logo from './asset/html logo.png'
import css_logo from './asset/css logo.png'
import Bootstraplogo from './asset/Bootstrap logo.png'
import DSlogo from './asset/Data Structures logo.png'
import GitHublogo from'./asset/GetHub.png'
const Skill = () => {
  return (
    <div>
        <>
        <div className='main-box'>
          <div className='sk-box'>
            <div className='head-box'>
              <img src={skillLogo} className='skill-logo' /> <h1>SKILL</h1>
            </div>
            <div className='skill-box'>
            <div className='page-box'>
              <img src={Reacte_logo} className='img-box' /> <h5>React</h5>
            </div>
            <div className='page-box'>
              <img src={TypeScrip_logo} className='img-box' /> <h5>Type Scrip </h5>
            </div>
            <div className='page-box'>
              <img src={Jslogo} className='img-box' /> <h5>  Java Script</h5>
            </div> 
            <div className='page-box'>
              <img src={html_logo} className='img-box' /> <h5> HTML</h5>
            </div> 
            <div className='page-box'>
              <img src={css_logo} className='img-box' /> <h5> CSS</h5>
            </div>
            </div>
            <div className='skill-box'>
            <div className='page-box'>
              <img src={Bootstraplogo} className='img-box' /> <h5>Boot Strap</h5>
            </div>
            <div className='page-box'>
              <img src={DSlogo} className='img-box' /> <h5> Data Structures</h5>
            </div>
            <div className='page-box'>
              <img src={GitHublogo} className='img-box' /> <h5> GitHubs</h5>
            </div>
             
              <div className='page-box'>
              <img src={Material_design} className='img-box' /> <h5>Material design</h5>
            </div>  
            </div>
          </div>
        </div>
        </>
    </div>
  )
}

export default Skill
