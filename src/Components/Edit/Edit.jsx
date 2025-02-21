import appContext from "../../Contexts/AppContext"
import { useContext , useEffect } from "react"
import { useState } from "react"
import * as S from "./style.js"
import Select from 'react-select'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Edit(){


    const { login , setLogin , API_URI , token } = useContext(appContext)
    const [name , setName]=useState("")
    const [country , setCountry]=useState("")
    const [urlImage , setUrlImage]=useState("")
    const [view , setView]=useState(false)
    const [chooseOption , setChooseOption]=useState("")
    const [countries , setCountries]=useState([])


    const navigate = useNavigate()
   

    useEffect(async ()=>{
      try {
              
        const promise= await axios.get(`${API_URI}user/${login.id}` )  
   
      setLogin(promise.data)
     
    
    } catch (error) {
        console.log(error)
    }
    },[login])
    useEffect(async ()=>{
        try {
            const promise= await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises')  
       
          setCountries(promise.data)
        } catch (error) {
            console.log(error)
        }
    
       },[countries])
        const selectCountry=(country)=>{
       
           setCountry(country.label)
        }

        async  function  editName(){
            const body={
                    name
                    
            }      
            const headers={
                headers:{
              Authorization:`Bearer ${token}`
              }
             }
            
            try {
                const promise= await axios.put(`${API_URI}userName/${login.id}` ,headers, body)  
                setName("")
            
              
            } catch (error) {
                console.log(error.response.data)
            }
         
        }
        async  function  editPhoto(){
            const body={
                    urlImage
                    
            }      
            const headers={
                headers:{
              Authorization:`Bearer ${token}`
              }
             }
            
            try {
                const promise= await axios.put(`${API_URI}userPhoto/${login.id}` ,headers, body)  
              
               setUrlImage("")
              
            } catch (error) {
                console.log(error.response.data)
            }
         
        }
        async  function  editCountry(){
            const body={
                    country
                    
            }      
            const headers={
                headers:{
              Authorization:`Bearer ${token}`
              }
             }
         
            
            try {
                const promise= await axios.put(`${API_URI}userCountry/${login.id}`,headers, body)  
               
               setCountry("")
              
            } catch (error) {
                console.log(error.response.data)
            }
         
        }


       

    return(<>
    <S.Ask>
        <S.AskEdit> Que vas a querer editar ?  </S.AskEdit>
        <S.EditButtons onClick={()=>setView(true)}>
            <S.OptionEdit onClick={()=> setChooseOption("nombre de usuario")} >Nombre de usuario</S.OptionEdit>
            <S.OptionEdit  onClick={()=> setChooseOption("pais")}>Pais</S.OptionEdit>
            <S.OptionEdit  onClick={()=> setChooseOption("foto de perfil")}>Foto de perfil</S.OptionEdit>
            </S.EditButtons>
    </S.Ask>

        

      <S.ContainerInputs view={view} >
        {chooseOption==="nombre de usuario"? <><S.InputName type="text" placeholder={`Nombre de usuario: ${login.name}`}onChange={(e)=> setName(e.target.value)} value={name}></S.InputName>
           <S.SignUpButton onClick={editName} >Editar {chooseOption}</S.SignUpButton> </> : chooseOption==="pais" ?
           <>
        <S.ContainerInputsCity>
            
            <S.ContainerSelect>
            <Select
            defaultValue={{ label:`Sigues siendo de ${login.country} ?` , value:"empty"}}
            options= {countries === undefined ? "" : countries.map(e=>({label:e.nome, value:e.value}))}
            onChange={selectCountry}
         
        
            />
            </S.ContainerSelect>
        </S.ContainerInputsCity>     <S.SignUpButton onClick={editCountry} >Editar {chooseOption}</S.SignUpButton></>
       : chooseOption==="foto de perfil" ? 
       <> <S.Photo><img src={login.urlImage} /></S.Photo><S.InputImage type="url" placeholder="Tienes una foto mejor?"onChange={(e)=> setUrlImage(e.target.value)}  value={urlImage}></S.InputImage>   <S.SignUpButton onClick={editPhoto} >Editar {chooseOption}</S.SignUpButton></>: ""}
     



       
       
     
       
     </S.ContainerInputs>
    
    </>)
}