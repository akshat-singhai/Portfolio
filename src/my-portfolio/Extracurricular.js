import React from 'react'
import projrct from './asset/Project_logo.png'
import EXTRACURRICULARLogo from './asset/EXTRACURRICULAR.png'
import INTERESTSlogo from './asset/INTERESTS.png'
import Book_reading from './asset/Book_Reading.png'
import Communicationlogo from './asset/Communication Skill.png'
import Gyminglogo from './asset/Gymming.png'
import Travel_logo from './asset/Travel.png'
import AWARDSlogo from './asset/AWARDS.png'
import Gardeninglogo from './asset/Gardening.png'
import DebateCompetition from './asset/Debate Competition.png'
import Marathonlogo from './asset/Marathon.png'
const Extracurricular = () => {
    return (
        <div>
            <div className='main-box'>
                <div className='head-box'>
                    <img src={EXTRACURRICULARLogo} className='img-logo' />
                    <h2> EXTRACURRICULAR</h2>
                </div>
                    <div className='bt-box'>
                <div className='text-box'>
                    <div className='ex-box'>
                     <img src={Book_reading} className='img-logo' />
                    <h4> Book Reading</h4>
                    </div>
                    Reading books improve my reading skill and my vocabulary.
                    </div>
                </div>
                    <div className='bt-box'>
                <div className='text-box'>
                <div className='ex-box'>
                     <img src={Communicationlogo} className='img-logo' />
                    <h4> Communication Skill   </h4>
                    </div>
                    Whenever I am free I always work to improve my communication skill.
                   </div>
                </div>
            </div>
            <div className='main-box'>
                <div className='head-box'>
                    <img src={INTERESTSlogo} className='img-logo' />
                    <h2> INTERESTS</h2>
                </div>
                <div className='in-box'>
                <div className='int-box'>
                <img src={Gyminglogo} className='img-logo' />
                    <h5> Gymming</h5>
                    </div>
                    <div className='int-box'>
                <img src={Travel_logo} className='img-logo' />
                    <h5> Travel</h5>
                    </div>
                    <div className='int-box'>
                <img src={Gardeninglogo} className='img-logo' />
                    <h5> Gardening</h5>
                    </div>
                    
                </div>
            </div>
            <div className='main-box'>
                <div className='head-box'>
                    <img src={AWARDSlogo} className='img-logo' />
                    <h2> AWARDS</h2>
                </div>
                <div className='bt-box'>
                    <div className='text-box'>
                <div className='in-box'>
                <img src={ DebateCompetition} className='img-logo' />
                    <h4> Debate Competition Award</h4>                  
                    </div>
                    I participate In a debate on the topic "Plastic
                    bags should be banned," and my team won
                    the debate. We were on the side of full ban
                    plastic. My team won the debate when we
                    were in school.
                    </div>
                </div>
                <div className='bt-box'>
                    <div className='text-box'>
                <div className='in-box'>
                <img src={ Marathonlogo} className='img-logo' />
                    <h4> Marathon </h4>                 
                    </div>
                    I won a marathon when I was in school .
                    marathon was 5 km long and i came second
                    place
                </div>
                </div>
            </div>
        </div>
    )
}

export default Extracurricular
