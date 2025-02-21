import styled from "styled-components";

export const ProfileContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
width: 100%;
height: 150px;
background-color:${({theme})=> theme.colorLightDark};
box-shadow: 0 0 0.4em #94a5cb;
`
export const UserImage=styled.img`
width: 80px;
height: 80px;
border-radius:50px;
box-shadow: 0 0 0.4em #94a5cb;
`
export const Info=styled.div`

width: 200px;
height: 80px;
box-shadow: 0 0 0.4em #94a5cb;
`
export const InfoCity=styled.h1`

`
export const GroupInfo=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Rate=styled.button`
border: none;
background-color:${({theme})=> theme.colorLightDark};
font-size: 30px;



`


export const RateEmojis=styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
margin-bottom: 5px;
width: 100%;


`
export const Together=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Number=styled.h1`
font-weight:bold;
`