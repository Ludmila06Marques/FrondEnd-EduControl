import styled from "styled-components"

export const Container=styled.div`
position: absolute;
right: 0;
top: -10px;
transition: 0.5ms all ease-in;

`


export const Wrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
padding-top: 1rem;
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;

`


export const BGC=styled.div`
position: relative;
width: 70px;
height: 38px;
border-radius: 38px;
transition: 1ms all ease-in;
background-color:  ${({position})=>position? '#00BB2D' : 'lightgrey'};

 `
export const ButtonSwitch=styled.button`
position: absolute;
cursor: pointer;
bottom: 5px;
left: ${({position})=>position? '37px' : '5px'};
width: 28px;
height: 28px;
border: none;
border-radius: 58%;
background-color: #fff;
`