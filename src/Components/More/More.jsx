import * as S from "./style.js"
import { useNavigate } from "react-router-dom"


export default function More(){
    const navigate =useNavigate()

    function goToPublish(){
    navigate('/publish')
    }
    return(
        <S.Publish onClick={goToPublish} ><ion-icon name="add-outline"></ion-icon></S.Publish>
    )
}