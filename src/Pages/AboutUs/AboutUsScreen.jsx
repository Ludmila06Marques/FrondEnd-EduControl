import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import { useContext } from "react"
import appContext from "../../Contexts/AppContext.js"
import manutencao from "../../img/manut.png"
import * as S from "./style.js"
export default function AboutUsScreen(){
    const {login}=useContext(appContext)

    return(<>
    <ProfileNavBarr id={login.id} />
    <S.Container>
    <img src={manutencao}/>
   </S.Container>
    </>)
}