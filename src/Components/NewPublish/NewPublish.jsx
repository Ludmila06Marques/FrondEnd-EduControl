import { Autocomplete } from '@react-google-maps/api';
import * as S from "./style.js"
import OptionsChoose from "../../Components/OptionsChoose/OptionsChoose.jsx"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Maps from "../Maps/Maps.tsx"







function InsertButton({ coment, urlImage, rateNote, localizationName, latitude, longitude, choose }) {


  const navigate = useNavigate()
  const { login, API_URI, token} = useContext(appContext)

  async function publicar() {


    const body = {
      coment,
      urlImage,
      rateNote,
      localizationName,
      localizationLat: latitude + "",
      localizationLong: longitude + "",
      optionId: Number(choose),
      userId: login.id
    }
     const headers={
       headers:{
     Authorization:`Bearer ${token}`
     }
    }
    console.log(body)
    try {
      await axios.post(`${API_URI}publish` , body  , headers)

      navigate('/home')
    } catch (error) {
      alert(error)
    }
  }


  return (<>
    <S.Container onClick={publicar} >Publicar</S.Container>
  </>)
}



export default function NewPublish() {



  const [coment, setComent] = useState("")
  const [urlImage, setUrlImage] = useState("")
  const [rateNote, setRateNote] = useState("")
  const [localization, seLlocalization] = useState("")
  const [options, setOptions] = useState([]);
  const [nameOption, setNameOption] = useState("");
  const [choose, setChoose] = useState("");




  const { localizationName, latitude, longitude } = useContext(appContext)

  return (<>
    <S.ContainerPublish>
      <OptionsChoose options={options} setOptions={setOptions} nameOption={nameOption} setNameOption={setNameOption} choose={choose} setChoose={setChoose} />

      <S.InputComent rows="3" cols="30" wrap="hard" placeholder="Como fue tu experiencia?" onChange={(e) => setComent(e.target.value)} value={coment} ></S.InputComent>
      <S.InputImage placeholder="Comparte tu foto" onChange={(e) => setUrlImage(e.target.value)} value={urlImage}  ></S.InputImage>





      <S.AskRate>Que nota le das ?  {rateNote == "4" ? "😀" : rateNote == "3" ? "🙂" : rateNote == "2" ? "😐" : rateNote == "1" ? "😞" : "?"}</S.AskRate>
      <S.RateEmojis>
        <S.Rate onClick={() => setRateNote("1")} value={rateNote} >😞</S.Rate>
        <S.Rate onClick={() => setRateNote("2")} value={rateNote} >😐</S.Rate>
        <S.Rate onClick={() => setRateNote("3")} value={rateNote} >🙂</S.Rate>
        <S.Rate onClick={() => setRateNote("4")} value={rateNote}  >😀</S.Rate>
      </S.RateEmojis>
      <S.ContainerMap>
        <Maps />
      </S.ContainerMap>

      <InsertButton coment={coment} urlImage={urlImage} localization={localization} rateNote={rateNote} latitude={latitude} longitude={longitude} localizationName={localizationName} choose={choose} />
    </S.ContainerPublish>


  </>)
}
//Como trocar a cor da opcao quando clico sem trocar a cor de todas ?