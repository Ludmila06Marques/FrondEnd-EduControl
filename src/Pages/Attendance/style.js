import styled from 'styled-components'

export const ContainerHome=styled.div`
position: relative;

`


export const LocalIcon=styled.div`
ion-icon{
  font-size: 15px;
  color: ${({theme})=> theme.colorContainer};
}
`
export const LocalName=styled.h1`

font-size: 13px;
color: ${({theme})=> theme.colorContainer};
`
export const PublishInfo=styled.div``

export const Localization=styled.div`
display: flex;
align-items: center;
justify-content: center;

:hover{
  cursor: pointer;
}

`
export const ContainerPublish=styled.div`
position: relative;
display: flex;
flex-direction: column;

align-items: center;
margin-top: 10px;
width: 100%;
height: 500px;

`
export const UserInfo=styled.div`
display: flex;
padding: 10px;
justify-content: space-between;
align-items: center;
width: 100%;
height: 55px;


`
export const UserImage=styled.img`

border-radius: 50px;
width: 45px;
height: 45px;
`
export const User=styled.div`
display: flex;
align-items: center;
`

export const UserName=styled.h1`
margin-left: 5px;
font-size: 18px;
font-weight: bold;

`
export const Actions=styled.div`


ion-icon{
    font-size: 25px;
    color:${({theme})=> theme.colorContainer};
    margin-left: 5px;
    :hover{
  cursor: pointer;
}
}
`
 export const Photo=styled.img`

 margin-top: 5px;
 width: 350px;
height: 350px;
padding: 10px;

 `
 export const Coment=styled.div`
  width: 280px;
  height: 80px;
  background-color:${({theme})=> theme.colorContainer};
 `
 export const UnderInfo=styled.div`
 display: flex;
 `
 export const Rate=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
  width: 70px;
  height: 80px;

 `
 export const Emoji=styled.h1`
 font-size: 40px;
 `
 export const Text=styled.h1`
 padding: 15px;
 font-size: 15px;
 color: ${({theme})=> theme.colorUserName};
 font-weight: bold;
 `



export const ContainerOption=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;

:hover{
  cursor: pointer;
}


`

export const OptionText=styled.h1`

 font-size: 20px;
    color: ${({theme})=> theme.colorUserName};
    font-weight: bold;

`
export const Container=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 10px;
align-items: center;
width: 100%;

`
export const OptionName=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2px;
margin-top: 2px;
border-radius: 8px;
width: 95px;
height: 50px;
color: ${({theme})=> theme.colorOption};
font-weight: bold;
border: solid 1px #94a5cb;


`
export const Charge=styled.img`
width: 50px;
height: 50px;
`
//display: ${props => props.view ? "flex": "none"};
