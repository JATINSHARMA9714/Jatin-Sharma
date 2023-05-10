import React from 'react'
import Wrapper from '../wrapper/Media'

function Media(props) {
  return (
    <Wrapper id='contact'>
      <div className="heading" style={{color:props.mode?'white':'#141E30',
            borderBottom:props.mode?'4px solid white':'4px solid #141E30',
            borderRadius: '10px'}}>
        <h2 style={{ color:props.mode?'white': '#0F2027' }}>Social Media</h2>
      </div>
      <div className="body" style={{color:props.mode?'white':'#141E30'}}> 
        <div className="icon">
          <a href="https://www.linkedin.com/in/jatin-sharma-15351a258/" target="_blank">
            <i className="fa-brands fa-linkedin linked"></i>
            <p className='my-2' style={{color:props.mode?'white':'#141E30'}}>LinkedIn</p>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/JATINSHARMA9714" target={"_blank"}>
            <i className="fa-brands fa-github github"></i>
            <p className='my-2 mx-1' style={{color:props.mode?'white':'#141E30'}} >Github</p>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/jatinsharma453/" target="_blank">
            <i className="fa-brands fa-instagram insta"></i>
            <p className='my-2' style={{color:props.mode?'white':'#141E30'}}>Instagram</p>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Media