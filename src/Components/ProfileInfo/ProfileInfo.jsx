import axios from "axios"
import { LoginButton } from "../../Pages/Login/style.js"
import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useEffect, useState } from "react"
import Emoji from "../Emojis/Emojis.jsx"



export default function ProfileInfo({id}){
 
  const [info ,setInfo]=useState([])
  const [publish , setPublish]=useState([])

  useEffect(async ()=>{
    try {
            
      const promise= await axios.get(`http://localhost:5000/user/${id}` )  
 
     setInfo(promise.data)
   
  
  } catch (error) {
      console.log(error)
  }
  },[])

  useEffect(async ()=>{
    try {
            
      const promise= await axios.get(`http://localhost:5000/publishUser/${id}` )  
 
     setPublish([...promise.data])
   
  
  } catch (error) {
      console.log(error)
  }
  },[])
const bad= publish.filter(item=> item.rateNote === "1")
const neutral= publish.filter(item=> item.rateNote === "2")
const happy = publish.filter(item=> item.rateNote === "3")
const soHappy= publish.filter(item=> item.rateNote === "4")



    return(<>
    <S.ProfileContainer>
      <S.GroupInfo>
      <S.UserImage src={info.urlImage} alt="User photo"/>
      <S.InfoCity>
      {info.country}
        </S.InfoCity>
     
        </S.GroupInfo>
        <S.Info>
        <S.RateEmojis>
          <S.Together>
         <S.Rate >😞</S.Rate>
         <S.Number>{bad.length}</S.Number>
         </S.Together>
         <S.Together>
        <S.Rate  >😐</S.Rate>
        <S.Number>{neutral.length}</S.Number>
        </S.Together>
        <S.Together>
        <S.Rate>🙂</S.Rate>
    
        <S.Number>{happy.length}</S.Number>
        </S.Together>
        <S.Together>
        <S.Rate  >😀</S.Rate>
        <S.Number>{soHappy.length}</S.Number>
        </S.Together>
        </S.RateEmojis>
        </S.Info>
    </S.ProfileContainer>
    </>)
}