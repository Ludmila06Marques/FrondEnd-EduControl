import styled from "styled-components"

export const Ask=styled.div`
display: ${props => props.view ? "none": "flex"};

flex-direction: column;
justify-content: center;
align-items: center;

`
export const AskEdit=styled.h1`
font-size: 30px;
color:${({theme})=> theme.colorSignUp};


`
export const EditButtons=styled.div`
display: flex;
justify-content: center;
align-items: center;


`
export const OptionEdit=styled.button`
margin: 10px;
width: 90px;
height: 50px;
font-size: 15px;
border-radius: 8px;
background-color: ${props => props.color ? "#D2C4E2": "transparent"};
color:${({theme})=> theme.colorSignUp};
border: ${({theme})=> theme.borderOption};
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

`
export const SignUpButton = styled.button`
width: 256px;
height: 45px;
margin-top: 10px;
border-radius: 8px;
border: none;
background-color:${({theme})=> theme.colorBlack};
margin-bottom:7px;
color:white;
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

export const Rate=styled.button`
font-size: 30px;
border: none;
background-color: transparent;
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

`
export const RateEmojis=styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
margin-bottom: 5px;
width: 100%;

`
export const InputComent=styled.textarea`
margin-top: 5px;
width: 300px;
border-radius: 8px;
border: solid 1px #94a5cb;
padding:10px;
`


export const Container=styled.div`

display:${props => props.view ? "flex": "none"};
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`

export const Photo=styled.div`
img{

width: 250px;
height: auto;
}
`
export const AskRate=styled.h1`


font-size: 20px;
color:${({theme})=> theme.colorSignUp};
text-align: center;
margin-bottom: 10px;



`