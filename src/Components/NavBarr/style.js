import styled from "styled-components";



export const ContainerNavBarr=styled.div`
opacity: 1;
display: flex;
justify-content: space-between;
padding: 15px;
align-items: center;
width: 100%;
height: 58px;
background-color:${({theme})=> theme.colorNavbar};

ion-icon{
    font-size: 25px;
    color: ${({theme})=> theme.colorWhite};
    :active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }
}
 `
export const Separe=styled.div`
display: flex;

align-items: center;
:hover{
  cursor: pointer;
}
`

export const SepareTwo=styled.div`
display: flex;
`
export const Back=styled.div`
display: ${props => props.appear ? "flex": "none"};
:hover{
  cursor: pointer;
}
`
export const Out=styled.div`
display: ${props => props.desappear ? "flex": "none"};
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