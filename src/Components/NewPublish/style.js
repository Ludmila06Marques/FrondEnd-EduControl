import styled from "styled-components";

export const InputLocal=styled.input`
margin-top: 5px;
width: 300px;
height: 50px;
border-radius: 8px;
border: solid 1px #94a5cb;
padding: 10px;
`

export const InputComent=styled.textarea`
margin-top: 5px;
width: 300px;
border-radius: 8px;
border: solid 1px #94a5cb;
padding:10px;
`

export const InputImage=styled.input`
margin-top: 5px;
width: 300px;
height: 50px;
border-radius: 8px;
border: solid 1px #94a5cb;
padding: 10px;
`

export const  ContainerPublish=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
width: 100%;

border-bottom: 1px solid  #94a5cb;
`
export const Options=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 10px;
align-items: center;
width: 100%;

`
export const Option=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2px;
margin-top: 2px;
border-radius: 8px;
width: 95px;
height: 50px;
color:  ${({theme})=> theme.colorBlack};
font-weight: bold;
border: solid 1px #94a5cb;
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

export const AskRate=styled.h1`


font-size: 20px;
color:${({theme})=> theme.colorBlack};




`
export const Container=styled.button`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 10px;
background-color: ${({theme})=> theme.colorBlack};
width: 300px;
height: 42px;
border: none;
border: 1 px solid blue;
border-radius: 8px;
color: ${({theme})=> theme.colorWhite};
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }
`
export const ContainerMap=styled.div`
width:100vw;
height: 300px;

`