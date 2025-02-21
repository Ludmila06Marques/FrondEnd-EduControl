import * as S from "./style.js"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo"
import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr"
import OptionsProfile from "../../Components/OptionsProfile/OptionsProfile"
import appContext from "../../Contexts/AppContext.js"
import Publish from "../../Components/Publish/Publish.jsx"
import Loading from "../../Components/loading/Loading.jsx"
import More from "../../Components/More/More.jsx"




export default function ProfileScreen() {

  const { id } = useParams()
  const {  API_URI } = useContext(appContext)
  const [userPublishes, setUserPublishes] = useState([])


  useEffect(async () => {
    try {

      const promise = await axios.get(`${API_URI}publishUser/${id}`)

      setUserPublishes(promise.data)


    } catch (error) {
      alert(error)
    }
  }, [])


  return (<>
    <ProfileNavBarr id={id}/>
    <ProfileInfo id={id} />
    <OptionsProfile setUserPublishes={setUserPublishes}  id={id} />
    {userPublishes.length === 0 ? <Loading /> : userPublishes.map((item, index) => <Publish  setUserPublishes={setUserPublishes} key={index} id={item.id}  coment={item.coment} urlImage={item.urlImage} localizationName={item.localization.name} longitude={item.localization.longitude} latitude={item.localization.latitude} rateNote={item.rateNote} user={item.user} />)}
    <More />
  </>)
}