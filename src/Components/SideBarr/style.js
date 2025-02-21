import styled from "styled-components";

export const ContainerSideBarr=styled.div`
position: absolute;
top:58px;
display: ${props => props.view ? "flex": "none"};
flex-direction: column;
z-index: 2;
height: 100vh;
width: 150px;
background-color: ${({theme})=> theme.colorBlack};
padding: 5px;
ion-icon{
    font-size: 25px;
    color: white;
    margin-top: 18px;
    margin-left: 5px;
}
`
export const Perfil=styled.div`
width:100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;


`
export const Image=styled.img`
width: 50px;
height: 50px;
border-radius: 100px;`

export const Name=styled.h1`
font-size: 20px;
color: white;
padding: 5px;
font-weight: bold;
`

export const Box=styled.div`
width: 100%;
height: 40px;
margin-top: 5px;
display: flex;
align-items: flex-end;
border-bottom: 1px lightgrey solid ;
a:link{
    text-decoration: none;
}
:hover{
  cursor: pointer;
}


ion-icon{
    padding: 3px;
    font-size: 20px;
   
}
`
export const Text=styled.h1`
 font-size: 15px;
    font-weight: bold;
    color: white;

`