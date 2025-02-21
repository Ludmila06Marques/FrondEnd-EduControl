import styled from "styled-components"

export const ContainerNavBarr=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 58px;
background-color: ${({theme})=> theme.colorNavbar};
padding: 10px;
ion-icon{
    font-size: 30px;
    color:  ${({theme})=> theme.colorWhite};
    margin-left:10px;
    :hover{
  cursor: pointer;
  :active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }
}

}



`

export const  UserName=styled.h1`
font-size: 20px;
color: ${({theme})=> theme.colorWhite};
font-weight: bold;
`