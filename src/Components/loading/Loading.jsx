import * as S from "./style.js"
import loading from "../../img/notFound.png"


export default function Loading(){
    return(<>
    <S.ToCenter>
    <S.Container src={loading} />
    </S.ToCenter>
    </>)
}