import { useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import * as S from "./style.js"
import axios from "axios"


export default function Switch(){

    const {setTheme , theme , login , token }=useContext(appContext)
    console.log(token)

    const [position , setPosition]=useState()

    useEffect(()=>{
        if(login.mode==="dark"){
            setPosition(true)
        }else{
            setPosition(false)
        }
    },[])

  async  function changePosition(){
    
        try {
            if(theme==='ligth'){

          
                const body={
                    mode:"dark"
                }
                const headers={
                    headers:{
                  Authorization:`Bearer ${token}`
                  }
                 }
          await  axios.put(`http://localhost:5000/user/${login.id}` , body  , headers)
            setTheme('dark')
            setPosition(true)
        }else{
        
                const body={
                    mode:"ligth"
                }
                const headers={
                    headers:{
                  Authorization:`Bearer ${token}`
                  }
                 }
            await axios.put(`http://localhost:5000/user/${login.id}`, body  , headers)
           
            setTheme('ligth')
            setPosition(false)
        }
      
            
        } catch (error) {
            
        }
       
     
       
    }

    return(<>
     <S.Container>
        <S.Wrapper>
            <S.BGC  position={position}  >
                <S.ButtonSwitch onClick={()=> changePosition()}  position={position} ></S.ButtonSwitch>
            </S.BGC>
        </S.Wrapper>
     </S.Container>
    </>)
}
