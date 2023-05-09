import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <p>Created & Designed By JATIN SHARMA &copy; 2022-23</p>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
    /* border: 2px solid black; */
p{
    text-align: center;
    color: #0F2027;
}
`
