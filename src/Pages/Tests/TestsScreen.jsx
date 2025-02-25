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
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"




export default function TestsScreen() {

  const { id } = useParams()
  const {  API_URI, login } = useContext(appContext)
  const [userPublishes, setUserPublishes] = useState([])


  useEffect(async () => {
    try {

      const promise = await axios.get(`${API_URI}publishUser/${id}`)

      setUserPublishes(promise.data)


    } catch (error) {
      alert(error)
    }
  }, [])


    return(<>
    <S.ContainerHome>
    <NavBarr/>
    <SideBarr login={login} />
    <h1 style={{textAlign:"center"}}>
          tests
    </h1>
                
    </S.ContainerHome>
    </>)
}