import React from 'react'
import bookLogo from './asset/book.png'
import buildinglogo from './asset/building logo.png'
const education = () => {
  return (
    <div>
      <>
        <div className='main-box'>
          <div className='ed-box'>
            <div className='head-box'>
              <img src={bookLogo} className='img-logo' /> <h1>EDUCATION</h1>
            </div>
            <div>
              <div className='page-box'>
                <img src={buildinglogo} className='img-logo' /><h2> College </h2>
              </div>
              <div className='text-box'>
                Bachelor of Computer Applications
                Makhanlal Chaturvedi University
                <div className='text-box'> 2021 – 2024 | Damoh, India</div>
              </div>
              <div className='page-box'>

                <img src={buildinglogo} className='img-logo' /><h2> HSC </h2>
              </div>
              <div className='text-box'>
                Mission Higher Secondary School
                <div className='text-box'> 2021 | Damoh, India </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default education 
