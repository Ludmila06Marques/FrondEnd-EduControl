import axios from "axios"
import * as S from "./style.js"
import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

function OneOption({ optionId, name, setPublishes }) {

  const { API_URI } = useContext(appContext)
  const [color, setColor] = useState(false)



  async function chooseOption() {

    setPublishes([])

    setColor(!color)


    try {
      const promise = await axios.get(`${API_URI}publishOption/${optionId}`)


      setPublishes(promise.data)


    } catch (error) {
      alert(error)
    }


  }






  return (

    <S.ContainerOption onClick={chooseOption} >
      <S.OptionName color={color}  >{name}</S.OptionName>
    </S.ContainerOption>
  )

}


export default function Options({ setPublishes }) {
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
    setPublishes([])
    try {

      const promise = await axios.get(`${API_URI}publish`)

      setPublishes([...promise.data])


    } catch (error) {
    }
  }


  return (<>
    <S.Container>
      {options.map((item, index) =>
        <OneOption optionId={item.id} name={item.name} key={index} index={index} setPublishes={setPublishes} />)}
      <S.ContainerOption onClick={getAll} >
        <S.OptionName  >Todas</S.OptionName>
      </S.ContainerOption>
    </S.Container>
  </>)

}

//COmo trocar a cor da opcao sem trocar a cor das outras ?