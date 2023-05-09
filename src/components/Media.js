import React from 'react'
import Wrapper from '../wrapper/Media'

function Media() {
  return (
    <Wrapper id='contact'>
      <div className="heading">
        <h2 style={{ color: '#0F2027' }}>Social Media</h2>
      </div>
      <div className="body">
        <div className="icon">
          <a href="https://www.linkedin.com/in/jatin-sharma-15351a258/" target="_blank">
            <i className="fa-brands fa-linkedin linked"></i>
            <p className='my-2 mx-2'>LinkedIn</p>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/JATINSHARMA9714" target={"_blank"}>
            <i className="fa-brands fa-github github"></i>
            <p className='my-2 mx-4' >Github</p>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/jatinsharma453/" target="_blank">
            <i className="fa-brands fa-instagram insta"></i>
            <p className='my-2 mx-2'>Instagram</p>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Media