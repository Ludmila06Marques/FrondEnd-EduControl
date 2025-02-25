import * as S from "./style.js"
import axios from "axios"
import { useEffect , useContext , useState} from "react"
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"
import Options from "../../Components/Options/Options.jsx"
import More from "../../Components/More/More.jsx"
import appContext from "../../Contexts/AppContext.js"
import Publish from "../../Components/Publish/Publish.jsx"
import Loading from "../../Components/loading/Loading.jsx"






export default function SubjectsScreen(){
 
    const {login , API_URI }=useContext(appContext)

    const [publishes , setPublishes ]=useState([])
 
    useEffect(async()=>{
        try {

        //     const promise= await axios.get(`${API_URI}publish` )  
     
        //   setPublishes([...promise.data])
         
        
        } catch (error) {
            console.log(error)
        }
    },[publishes])

    const arrayReverse= publishes.reverse()

   
    return(<>
    <S.ContainerHome>
    <NavBarr/>
    <SideBarr login={login} />
    <h1 style={{textAlign:"center"}}>
          ASIGNATURAS
    </h1>
                
    </S.ContainerHome>
    </>)
}
