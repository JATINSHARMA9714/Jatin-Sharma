import React from 'react'
import Wrapper from '../wrapper/Skills'
import cimg from '../assets/letter-c.png'
import cplus from '../assets/c++.png'
import javaImg from '../assets/java.png'
import htmlImg from '../assets/html-5.png'
import cssImg from '../assets/css-3.png'

function Skills(props) {
  return (
    <Wrapper id='skill'>
        <div className="heading">
            <h2 style={{color:props.mode?'white':'#141E30',
            borderBottom:props.mode?'4px solid white':'4px solid #141E30',
            borderRadius: '10px'}}>Skills</h2>
        </div>
        <div className="body">
            <div className="row">
                {/* java */}
                <img src={javaImg} alt="" />
                {/* //javascript */}
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                {/* c prog */}
                <img src={cimg} alt="" />
                {/* c++ */}
                <img src={cplus} alt="" />
                
            </div>
            <div className="row">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            <img src={cssImg} alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                <img src={htmlImg} alt="" />
                
                
            </div>
        </div>
    </Wrapper>
  )
}

export default Skills
