import React from 'react'
import Aboutlogo from './asset/about_icon.png'
const About = () => {
    return (
        <div>
            <>
                <div className='main-box'>
                    <div className='ab-box'>
                        <div className='head-box'>
                            <img src={Aboutlogo} className='img-logo' />
                            <h2> About Myself</h2>
                        </div>
                        <div className='text-box'>Hi, I'm Akshat Singhai, a Bachelor of Computer Applications graduate from M.C.U.
                            I am passionate about technology and the transformative impact it has on the world.</div>
                        <div className='text-box'>I specialize in front-end development, with strong skills in React.js, JavaScript,
                            TypeScript, HTML, and CSS. I also have hands-on experience with Bootstrap and Material
                            Design. I’ve applied these technologies in projects like a Weather App,
                            Employee Management System, and a Calculator App, demonstrating my ability
                            to build functional and user-friendly applications.
                        </div>
                        <div className='text-box'>I am constantly seeking opportunities to expand my knowledge and contribute
                            to innovative projects. Currently, I am looking for opportunities in front-end
                            development(React JS) where I can apply my skills and continue growing
                            professionally. </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default About
