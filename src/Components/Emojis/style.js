import styled from "styled-components"

export const RatePublish=styled.h1`

font-size: 25px;

`
export const RateEmojis=styled.div`
position: absolute;
bottom: 95px;
right:100px;

display: flex;
justify-content: center;
width: 100%;
:hover{
  cursor: pointer;
}
`
export const Count=styled.h1`
font-size: 15px;
color:${({theme})=> theme.colorContainer};
font-weight: bold;

`
export const Group=styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`