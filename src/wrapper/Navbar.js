import styled from "styled-components";

const Wrapper = styled.div`
/* border: 2px solid red; */
position: sticky;
top:0px;
width: 100%;
/* padding: 10px; */
z-index: 100;
background-color: #F2C94C;
.black{
  color: #232526;
  /* font-size: larger; */
}
.white{
  color: white;
}
.switch-mode{
    /* border: 2px solid black; */
.checkbox {
  opacity: 0;
  position: absolute;
}
li{
  border: 1px solid white;
}
.label {
  width: 50px;
  height: 26px;
  background: linear-gradient(to right, #232526,#414345);
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1);
}

.ball {
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball{
  transform: translateX(24px);
}

.fa-moon {
  color: pink;
}

.fa-sun {
  color: yellow;
}
}
`

export default Wrapper