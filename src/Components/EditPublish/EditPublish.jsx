import * as S from "./style.js"
import appContext from "../../Contexts/AppContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Publish from "../Publish/Publish.jsx";



export default function EditPublish(){
   
 const    navigate = useNavigate()
    const {publishId}=useParams()
    const {API_URI , token}=useContext(appContext)
    const [info , setInfo]=useState()
 


const [view , setView]=useState(false)
const [chooseOption , setChooseOption]=useState("")
const [coment , setComent]=useState("")
const [rateNote , setRateNote]=useState("")


   
 useEffect(async ()  =>{
              
    try {
        const promise = await axios.get(`${API_URI}publish/${publishId}` )
    setInfo(promise.data)

   } catch (error) {
       alert(error)
   }

 },[info])
 console.log(info)
 async  function  editComent(){
    const body={
            coment:coment
            
    }      
    const headers={
        headers:{
      Authorization:`Bearer ${token}`
      }
     }
 
    
    try {
        const promise= await axios.put(`${API_URI}editPublishComent/${publishId}` , body  , headers)  
     setView(false)
     navigate("/home")
   
     
    } catch (error) {
        console.log(error.response.data)
    }
 
}

async  function  editRate(){
    const body={
            rateNote:rateNote
            
    }      
    const headers={
        headers:{
      Authorization:`Bearer ${token}`
      }
     }

    
    try {
        const promise= await axios.put(`${API_URI}editPublishRate/${publishId}`, body  , headers)  
        setView(false)
        navigate("/home")
    } catch (error) {
        console.log(error.response.data)
    }
 
}

    
    


    return(<>
           <S.Ask>
        <S.AskEdit> Que vas a querer editar?  </S.AskEdit>
        <S.EditButtons  onClick={()=>setView(true)}>
            <S.OptionEdit onClick={()=> setChooseOption("nota")}  >Nota</S.OptionEdit>
            <S.OptionEdit onClick={()=> setChooseOption("comentario")}>Comentario</S.OptionEdit>
        
            </S.EditButtons>
            </S.Ask>

            <S.Container  view={view}>
            {chooseOption==="comentario"? <><S.Photo> <img src={info.urlImage} /> </S.Photo> <S.InputComent rows="3" cols="30" wrap="hard" placeholder={info.coment}  onChange={(e)=> setComent(e.target.value)} value={coment} ></S.InputComent>   <S.SignUpButton onClick={editComent} >Editar {chooseOption}</S.SignUpButton> </> : chooseOption==="nota"?  <> 
            <S.AskRate>La nota que diste antes :  {info.rateNote=="4"? "😀" : info.rateNote== "3" ? "🙂"  : info.rateNote=="2" ? "😐" : info.rateNote=="1" ? "😞" : "?" }</S.AskRate>
            <S.AskRate> Que nota le das ahora ? {rateNote=="4"? "😀" : rateNote== "3" ? "🙂"  : rateNote=="2" ? "😐" : rateNote=="1" ? "😞" : "?" }</S.AskRate>
            <S.RateEmojis>
         <S.Rate onClick={()=> setRateNote("1")} value={rateNote} >😞</S.Rate>
        <S.Rate  onClick={()=> setRateNote("2")}  value={rateNote} >😐</S.Rate>
        <S.Rate onClick={()=> setRateNote("3")}  value={rateNote} >🙂</S.Rate>
        <S.Rate  onClick={()=> setRateNote("4")} value={rateNote}  >😀</S.Rate>
        </S.RateEmojis>  <S.SignUpButton onClick={editRate}  >Editar {chooseOption}</S.SignUpButton> </>   : "" }
        </S.Container>
      
        
      
        
    </>)
}