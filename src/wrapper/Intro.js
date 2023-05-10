import styled from "styled-components";

const Wrapper = styled.div`
.intro{
height: 100vh;
background-image: linear-gradient(to left, #F2C94C, #F2C94C);
display: flex;
align-items: center;
flex-wrap: wrap;
padding: 30px;
justify-content: space-around;
    .intro-content{
            font-size: 2.5rem;
            width: 50vw;
            span{
                font-size: 3rem;
                color: #DC281E;
  
            }
    }
    .my-img{
        width: 25vw;
        /* height: ; */
        img{
            border-radius: 50%;
            height: 100%;
            width: 100%;
        }
    }
}
`


export default Wrapper