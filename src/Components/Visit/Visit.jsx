import { useState , useEffect , useContext} from "react"
import appContext from "../../Contexts/AppContext.js"
import * as S from "./style.js"
import axios from "axios"
import Loading from "../loading/Loading.jsx"


export default function Visit({ local , id}){

    const { API_URI  } = useContext(appContext)
    
    const [locationFilter , setLocationFilter]=useState(null)
   

async function filter(rateNote){
    setLocationFilter([])
    
    try {
            
        const promise= await axios.get(`${API_URI}userLocation/${id}/rate/${rateNote}` )  
       
        setLocationFilter(promise.data)
     
    
    } catch (error) {
        console.log(error)
    }
}

async function allLocal(){
    setLocationFilter([])
    
    try {
            
        const promise= await axios.get(`${API_URI}userLocation/${id}` )  
       
        setLocationFilter(promise.data)
     
    
    } catch (error) {
        console.log(error)
    }
}


   
    return(<>
    
    <S.ContainerVisit>
        <S.RateBox>
         <S.Rate onClick={()=> filter("1")}   >😞</S.Rate>
        <S.Rate  onClick={()=> filter("2")}   >😐</S.Rate>
        <S.Rate onClick={()=> filter("3")}   >🙂</S.Rate>
        <S.Rate  onClick={()=> filter("4")}   >😀</S.Rate>
        <S.RateAll  onClick={()=> allLocal()} >Todas</S.RateAll>
        </S.RateBox>

      {locationFilter== null ? local.map((item , index)=>     <a href={`https://maps.google.com/?q=${item.localization.latitude},${item.localization.longitude}`} target='_blank' ><S.VistiBox>
        <S.Icon><ion-icon name="location-outline"></ion-icon></S.Icon>

        <S.LocalizationName><h1>{item.localization.name}</h1></S.LocalizationName>
       
        </S.VistiBox> </a>)  :locationFilter.length===0 ?  <Loading/> :  locationFilter.map((item , index)=>     <a href={`https://maps.google.com/?q=${item.localization.latitude},${item.localization.longitude}`} target='_blank' ><S.VistiBox>
        <S.Icon><ion-icon name="location-outline"></ion-icon></S.Icon>

        <S.LocalizationName><h1>{item.localization.name}</h1></S.LocalizationName>
       
        </S.VistiBox> </a>)  }

    </S.ContainerVisit>
    </>)
}
// <S.Date><h1>{item.localization.createdAt}</h1></S.Date>
