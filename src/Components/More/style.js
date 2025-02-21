import styled from "styled-components"

export const Publish=styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom:12px;
right: 12px;
border-radius: 100px;
background-color:${({theme})=> theme.colorOption};
ion-icon{
  font-size: 50px;
  color: ${({theme})=> theme.colorContainer};
  

}
:hover{
  cursor: pointer;
}
`