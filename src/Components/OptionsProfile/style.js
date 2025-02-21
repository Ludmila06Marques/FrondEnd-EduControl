import styled from "styled-components";

export const ContainerOption=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin: 2px;

:hover{
  cursor: pointer;
}


`

export const OptionText=styled.h1`

 font-size: 20px;
    color: black;
    font-weight: bold;

`
export const Container=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 10px;
align-items: center;
overflow-x: scroll;


`
export const OptionName=styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2px;
margin-top: 2px;
border-radius: 8px;
font-size: 15px;
width: 100px;
height: 45px;
background-color:  "f1e3fc";
color:${({theme})=> theme.colorBlack};
font-weight: bold;
border:${({theme})=> theme.borderOption};

:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }
`