import axios from "axios"
import * as S from "./style.js"
import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useParams } from "react-router-dom"


function OneOption({ id, name, setUserPublishes, userId }) {
  const { setAppear, setDesappear, API_URI } = useContext(appContext)




  async function chooseOption() {
    setUserPublishes([])


    try {
      const promise = await axios.get(`${API_URI}publish/${userId}/${id}`)

      console.log(promise.data)
      setUserPublishes(promise.data)


    } catch (error) {
      console.log(error)
    }

    setAppear(true)
    setDesappear(false)
  }


  return (

    <S.ContainerOption onClick={chooseOption}>
      <S.OptionName>{name}</S.OptionName>
    </S.ContainerOption>
  )

}

export default function OptionsProfile({ setUserPublishes, id }) {


  const { API_URI } = useContext(appContext)

  const [options, setOptions] = useState([])


  useEffect(async () => {

    try {
      const promise = await axios.get(`${API_URI}option`)


      setOptions([...promise.data])


    } catch (error) {
      console.log(error)
    }
  }, [])

  async function getAll() {
    setUserPublishes([])
    try {

      const promise = await axios.get(`http://localhost:5000/publishUser/${id}`)

      setUserPublishes([...promise.data])


    } catch (error) {
    }
  }



  return (<>
    <S.Container>
      {options.map((item, index) =>
        <OneOption id={item.id} name={item.name} key={index} setUserPublishes={setUserPublishes} userId={id} />)}
      <S.ContainerOption onClick={getAll} >
        <S.OptionName  >Todas</S.OptionName>
      </S.ContainerOption>
    </S.Container>
  </>)

}
