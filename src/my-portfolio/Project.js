import React from 'react'
import Calculator from './asset/Calculator_app.png'
import Weather_logo from './asset/weather.png'
import Employee_logo from './asset/Employee_app.png'
import keylogo from './asset/Key logo.png'
import projrct from './asset/Project_logo.png'
const Project= () => {
  return (
    <div>
             
        <div className='main-box'>
          <div className='head-box'>
            <img src={projrct} className='img-logo' /><h2>PROJECT</h2>
          </div> 
         <div className='proj-box'>
          <div className='page-box'>   
          <img src={Weather_logo} className='img-logo' /> <h3> Weather app (React j.s.) </h3> </div>
          <div className='text-box'>
            This app allowed users to search for current
            weather conditions in various locations. It
            typically displays temperature, humidity,
            wind speed, and a weather icon to visually
            represent the conditions.
            <div> <img src={keylogo} className=' key_icon'/><b> Key Features</b></div>
              <div>•User Input: Users can enter a city name or
              location to fetch weather data.</div>
              <div> •API Integration: The app communicates
              with a weather API (like OpenWeatherMap)
              to retrieve real-time weather information.</div>
              <div>•Data Display: Current weather details,
              including temperature, conditions (sunny,
              cloudy, etc.).</div>
              <a href='https://weather-app-by-akshat.netlify.app/' target='blank'>
               <u> <h4> Click here to visit  Weather App</h4></u></a>
          </div>
          <div className='page-box'>
             <img src={Employee_logo} className='img-logo' /> <h3> Employee Management App (React j.s.) </h3> 
             </div>
          <div className='text-box'>
            This app is a fundamental web application
            that allows users to perform these basic
            operations (Create,Read,Update, Delete) on
            user data. This fetches a list of items from an
            API, displays them, and allows users to
            delete them.
            <div> <img src={keylogo} className=' key_icon'/><b>Key Features</b></div>
            <div>•Data management :User allow to perform
            operation (Create,read,update,delete).</div>
            <div>•User Interface Components : User
            Interface Components app user can enter
            employee data to help of form and table.</div>
           <div> •Component Structure : Manage state and
            business logic, fetching data and handling
            user actions.</div>
            •Routing: Links and buttons to navigate
            between routes, enhancing user experience.                   
          </div>
          <div className='page-box'>
             <img src={Calculator} className='img-logo' /> <h3> Calculator App (HTML,CSS,JavaScript) </h3> 
             </div>
                <div className='text-box'>
                  It is a simple calculator application. This
                  calculator app performs addition ,
                  Subtraction ,multiplication and division.
                  Calculator app also solves big collections in
                  a few seconds
                  <div> <img src={keylogo} className=' key_icon'/><b>Key Features</b></div>
                  <div>
                  • User Interface: Shows input numbers,
                    operation symbols, and results clearly.
                  </div>
                  <div>• Basic Operations :Addition (+), Subtraction
                        (−), Multiplication (×), and Division (÷): The
                        four fundamental arithmetic operations.
                        </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Project
