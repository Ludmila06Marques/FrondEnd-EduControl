import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import axios from "axios"
import appContext from "../../Contexts/AppContext"
import { useContext, useState , useEffect} from "react"
import Visit from "../../Components/Visit/Visit"
import Loading from "../../Components/loading/Loading"
export default function VisitsScreen(){

    const{login , API_URI }=useContext(appContext)
    const [local , setLocal]=useState([])

    useEffect(async()=>{
        try {
            
            const promise= await axios.get(`${API_URI}userLocation/${login.id}` )  
       
            setLocal(promise.data)
         
        
        } catch (error) {
            console.log(error)
        }
    },[local])



    return(<>
    <ProfileNavBarr id={login.id}/>
    {local.length===0 ? <Loading/> :  <Visit id={login.id} local={local} />}
   
    </>)
}