import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import Edit from "../../Components/Edit/Edit.jsx"


export default function EditScreen(){

    const {login}=useContext(appContext)

   return(<>  
   <ProfileNavBarr id={login.id} />
   <Edit/>
   </>)
}
