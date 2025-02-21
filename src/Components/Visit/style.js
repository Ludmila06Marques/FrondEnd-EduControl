import styled from "styled-components"



export const ContainerVisit= styled.div`
padding: 10px;

`

export const RateBox=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 52px;

box-shadow: 0 0 1em #94A5CB;
`
export const Rate=styled.button`
font-size: 25px;
border: none;
background-color: transparent;
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

`
export const RateAll=styled.button`
font-size: 15px;
border-radius: 8px;
background-color: transparent;
color:${({theme})=> theme.colorBlack};
:active {
            transform: scale(1.1);
            /* Scaling button to 0.98 to its original size */
            box-shadow: 5px 5px 22px 5px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

`
export const VistiBox = styled.div`
position: relative;
display: flex;

align-items: center;
margin-top: 15px;
width: 100%;
height: 70px;
box-shadow: 0 0 1em #94A5CB;
`

export const Icon=styled.div`
width: 40px;
height: auto;

ion-icon{
font-size: 40px;
color: #94A5CB;
}
`
export const LocalizationName=styled.div`
font-size: 30px;
color: #94A5CB;
font-weight: bold;
`
export const Date=styled.div`
position: absolute;
bottom: 0;
right: 0;
font-size: 15px;
color: #94A5CB;
font-weight: bold;
`