import React from 'react'
import Wrapper from '../wrapper/Navbar'

export default function Navbar(props) {
  function changeMode() {
    let main = document.getElementById('introText')
    let text = document.querySelectorAll('.main')
    let intro = document.querySelector('.intro')
    let navbar=document.querySelector('.navbar')
    let navText=document.querySelectorAll('.nav-link');
    // console.log(document.body.classList.);
    if (props.mode) {

      document.body.style.backgroundImage = 'linear-gradient(to left, #F2C94C, #F2C94C)'
      main.style.color = 'black'
      text.forEach(element => {
        element.style.color = '#DC281E'
      })
      intro.style.backgroundImage = 'linear-gradient(to left, #F2C94C, #F2C94C)'
      navbar.classList.remove('dark')
      navText.forEach((element)=>{
        element.classList.remove('white');
      })
      navText.forEach((element)=>{
        element.classList.add('black');
      })
      props.changeMode();
    }
    else {
      document.body.style.backgroundImage = 'linear-gradient(to left,#0f0c29,#302b63,#2C5364)'
      main.style.color = 'white'
      text.forEach(element => {
        element.style.color = 'red'
      })
      intro.style.backgroundImage = 'linear-gradient(to left,#0f0c29,#302b63,#2C5364)'
      navbar.classList.add('dark')
      navText.forEach((element)=>{
        element.classList.add('white');
      })
      navText.forEach((element)=>{
        element.classList.remove('black');
      })
      props.changeMode();
    }
  }
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg px-3">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>

          </button>
          <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">

                <a className="nav-link black space px-3" aria-current="page" href="#intro">INTRO</a>

              </li>
              <li className="nav-item">

                <a className="nav-link black space px-3" href="#skill">SKILLS</a>

              </li>
              <li className="nav-item">

                <a className="nav-link black space px-3" href="#project">PROJECTS</a>

              </li>
              <li className="nav-item">

                <a className="nav-link black space px-3" href='#contact'>CONTACT</a>

              </li>
            </ul>
            <div className='switch-mode'>
              <input type="checkbox" className={`checkbox ${props.mode && `dark`}`} id="checkbox" onChange={() => changeMode()} />

              <label htmlFor="checkbox" className="label">

                <i className="fas fa-moon"></i>

                <i className='fas fa-sun'></i>

                <div className='ball'></div>

              </label>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}
