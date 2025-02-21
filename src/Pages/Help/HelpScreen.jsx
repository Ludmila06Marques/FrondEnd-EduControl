import * as S from "./style.js"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import wpp from "../../img/wpp.png"
import Help from "../../Components/Help/Help.jsx"
import { useContext } from "react"
import appContext from "../../Contexts/AppContext.js"
export default function HelpScreen(){
    const {login}=useContext(appContext)

    return(<>
    <ProfileNavBarr id={login.id} />
    <Help/>
    <S.ContainerMessage><a href="https://wa.me/34607190787?text=Hola!%20Necesito%20una%20ayudita!" target="_blank"><img src={wpp}/></a></S.ContainerMessage>
    </>)
}

