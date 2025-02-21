import * as S from "./style.js"


export default function Emoji(){

    function ratePublish(){
        console.log('to rateando')

    }
    return(<>
     <S.RateEmojis>
        <S.Group>
         <S.RatePublish onClick={ratePublish} >😞</S.RatePublish>
         <S.Count>10</S.Count>
         </S.Group>
         <S.Group>
        <S.RatePublish onClick={ratePublish}>😐</S.RatePublish>
        <S.Count>10</S.Count>
        </S.Group>
        <S.Group>
        <S.RatePublish onlick={ratePublish}>🙂</S.RatePublish>
        <S.Count>10</S.Count>
        </S.Group>
        <S.Group>
        <S.RatePublish onClick={ratePublish}>😀</S.RatePublish>
        <S.Count>10</S.Count>
        </S.Group>
        </S.RateEmojis>
    </>)
}