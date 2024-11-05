import React from 'react'
import './portfolio.css'
import myPhoto from './asset/Profile.jpg'
import linkedinPH from './asset/linkedin.png'
import EmailLogo from './asset/Email.png'
import contactLogo from './asset/contact.png'
import GetHubLogo from './asset/GetHub.png'
import Aboutlogo from './asset/about_icon.png'
import projrct from './asset/Project_logo.png'
import EXTRACURRICULARLogo from './asset/EXTRACURRICULAR.png'
import INTERESTSlogo from './asset/INTERESTS.png'
import AWARDSlogo from './asset/AWARDS.png'
import resumelogo from './asset/resume.png' 
const portfolio = () => {
  return (
    <div className='container'>
      <div className='Header-box'>
        <div className='pro-header'>
          <img src={myPhoto} className='myPh' />
        </div>
          <div className='name-box'>Akshat Singhai</div>
        <div className='detailBox'>
          <div className='detBox'>
            <img src={EmailLogo} className='img-box' />
            <div className='id-box' > akshatsinghai2412@gmail.com</div>
          </div>
          <div className='detBox'>
            <img src={contactLogo} className='img-box' />
            <div className='id-box'>7566778397</div>
          </div>
          <div className='detBox'>
            <img src={linkedinPH} className='img-box' />
            <a href='https://www.linkedin.com/in/akshat-singhai-727bb5302/' target="_blank">
             <div className='id-box'>  Akshat-Singhai</div> </a>
          </div>
          <div className='detBox'>
            <img src={GetHubLogo} className='img-box' />
            <a href='https://github.com/akshat-singhai' target="_blank"> 
            <div className='id-box'>  Akshat-Singhai</div> </a>
          </div>
          <div className='detBox'>
            <img src={resumelogo} className='img-box' />
            <a href='https://drive.google.com/file/d/1C5gdyF9rD384xgj6e5mxK_ZFzfdY4iwP/view?usp=drive_link' target="_blank"> 
            <div className='id-box'> Resume</div> </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default portfolio

