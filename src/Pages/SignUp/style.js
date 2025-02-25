import styled from "styled-components";

export const PhoneContainer = styled.div`
    display: flex;
    align-items: center;

    select {
        margin-right: 10px;
        padding: 8px;
        font-size: 16px;
    }

    input {
        padding: 8px;
        font-size: 16px;
        flex-grow: 1;
    }
`;

export const UploadText=styled.h1`
margin-top:15px;
margin-bottom:10px;
 font-size:15px;
  font-weight:bold;
 color:${({theme})=> theme.colorWelcome};

`
export const ContainerSelect=styled.div`
width: 256px;
margin-bottom:10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
`
export const ContainerInputsCity=styled.div`

`
export const InputCity=styled.input`

width:123px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
margin-right: 2px;
`

export const InputCountry=styled.input`
margin-left: 5px;
width:123px;
height: 45px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
margin-bottom: 10px;
`
export const InputPhone=styled.input`
width: 176px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const InputDDI=styled.select`
width: 80px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const InputName=styled.input`
width: 256px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const InputEmail=styled.input`
width: 256px;
height: 45px;
margin-bottom: 10px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;

`
export const InputPassword=styled.input`
width: 256px;
height: 45px;
border-radius: 8px;
border-radius: 8px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const InputImage=styled.input`
width: 256px;
height: 45px;
border-radius: 8px;
margin-bottom: 10px;
border: ${({theme})=> theme.borderOption};
padding: 10px;
`
export const ContainerInputs=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:white;
width:400px;
min-height:650px

`
export const LoginText=styled.h1`
text-align:center;
 font-size:40px;
  font-weight:bold;
 color:${({theme})=> theme.colorWelcome};
 margin-bottom:10px;
 margin-top:15px;
`

export const SignUpButton = styled.button`
width: 256px;
height: 45px;
margin-top: 10px;
border-radius: 8px;
 font-size:20px;
border: none;
background-color:${({theme})=> theme.colorBlack};
margin-bottom:7px;
color: white;
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
export const SendToLogin=styled.h1`
margin-bottom: 20px;
text-decoration: underline;
color:${({theme})=> theme.colorWelcome};
font-weight: bold;
:hover{
  cursor: pointer;
}
`