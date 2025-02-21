import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import manutencao from "../../img/manut.png"


export default function PlacesScreen(){

    const {login}=useContext(appContext)

   return(<>  
   <ProfileNavBarr id={login.id} />
   <S.Container>
    <img src={manutencao}/>
   </S.Container>
   </>)
}