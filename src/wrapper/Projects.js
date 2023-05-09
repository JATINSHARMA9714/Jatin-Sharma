import styled from "styled-components";

const Wrapper = styled.div`
padding: 20px;
min-height: 100vh;
.heading{
    border-bottom: 4px solid #141E30;
    margin-top: 8vh;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
}
.body{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card{
        border: 2px solid #0F2027;
        padding: 10px;
        margin: 50px 0px;
        min-width: 250px;
        width: 350px;
        background-color: transparent;
        color: #141E30;
        transition: transform 0.2s ease-in-out;
        a.btn.btn-primary{
            width: 20vw;
            background-color: transparent;
            border: 1px solid #0F2027;
            color:#0F2027;
            &:hover{
                background: linear-gradient(to left,#0F2027,#203A43);
                color:white;
            }
        }
        &:hover{
            transform: scale(1.01,1.01);
        }
    }
}
`

export default Wrapper