import axios from "axios"
import { useNavigate } from "react-router-dom"
import * as S from "./style.js"
import { useContext } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useEffect, useState  } from "react"



export default function ProfileNavBarr({id}) {


  const { setView, setViewNavBarr, setAppear, setDesappear ,  API_URI } = useContext(appContext)
  const navigate = useNavigate()

  const [user, setUser]=useState([])

  useEffect(async () => {
    try {

      const promise = await axios.get(`${API_URI}user/${id}`)
     
      setUser(promise.data)


    } catch (error) {
      alert(error)
    }
  }, [user])


  function goHome() {
    setAppear(false)
    setDesappear(true)
    setView(false)
    setViewNavBarr("list-outline")
    navigate('/home')
  }

  return (<>
    <S.ContainerNavBarr>
      <S.UserName>{user.name}</S.UserName>

      <ion-icon onClick={goHome} name="chevron-back-outline"></ion-icon>


    </S.ContainerNavBarr>
  </>)
}