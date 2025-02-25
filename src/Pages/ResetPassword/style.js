import styled from "styled-components";
import { injectGlobal } from 'styled-components';

export const InputEmail=styled.input`
width: 256px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border:solid 1px #94a5cb;
padding: 10px;

`
export const InputPassword=styled.input`
width: 256px;
height: 45px;
border-radius: 8px;
border-radius: 8px;
border:solid 1px #94a5cb;
padding: 10px;
`
export const ContainerInputs=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color:white;
border-radius:5px;
width:400px;
height:200px

`
export const ContainerInputsSection2=styled.div`


`
export const ContainerInputsSection1=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
export const WelcomeText=styled.h1`
text-align:center;
 font-size:50px;
  font-weight:bold;
   margin-top:100px;
 color:${({theme})=> theme.colorWelcome};

`
export const LoginText=styled.h1`
text-align:center;
 font-size:20px;
  font-weight:bold;
 color:${({theme})=> theme.colorWelcome};

`
export const LoginButton = styled.button`
width: 256px;
height: 45px;
margin-top: 10px;
border-radius: 8px;
border: none;
background-color:${({theme})=> theme.colorBlack};
margin-bottom:7px;
color: white;
 font-size:20px;
:hover{
  cursor: pointer;
}
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }
`
export const SendToSignUp=styled.h1`

text-decoration: underline;
color:${({theme})=> theme.colorWelcome};
font-weight: bold;
:hover{
  cursor: pointer;
}
`

