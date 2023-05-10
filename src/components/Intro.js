import React from 'react'
import Wrapper from '../wrapper/Intro'
import myImg from '../assets/myImg.jpg'

function Intro() {
  return (
    <Wrapper id='intro'>
      <div className="intro">
      <div className="intro-content">
        <p id='introText'>Hey There, I'm <span className='main'>JATIN SHARMA </span>, Third Year CSE Undergrad and a <span className='main'>FRONT-END WEB DEVELOPER</span>  at BIT MESRA</p>
      </div>
      <div className="my-img">
        <img src={myImg} alt='my'/>
      </div>
      </div>
    </Wrapper>
  )
}

export default Intro
