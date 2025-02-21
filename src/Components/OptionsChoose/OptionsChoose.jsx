import axios from "axios"
import * as S from "./style.js"
import { useContext, useEffect, useState } from "react"
import appContext from "../../Contexts/AppContext.js"

function OneOption({ id, name, setNameOption, choose, setChoose }) {



    function chooseAnOPtion() {
        setChoose(id)
        setNameOption(name)

    }

    return (

        <S.ContainerOption onClick={chooseAnOPtion} value={choose}>
            <S.OptionName>{name}</S.OptionName>
        </S.ContainerOption>
    )

}

function ContainerOption({ setOptions, options, setNameOption, choose, setChoose }) {
    const { API_URI } = useContext(appContext)


    useEffect(async () => {

        try {
            const promise = await axios.get(`${API_URI}option`)


            setOptions([...promise.data])


        } catch (error) {
            console.log(error)
        }
    }, [])


    return (<>
        <S.Container>
            {options.map((item, index) =>
                <OneOption id={item.id} name={item.name} key={index} item={item} setNameOption={setNameOption} setChoose={setChoose} choose={choose} />)}
        </S.Container>
    </>)
}


export default function Options({ options, setOptions, nameOption, setNameOption, choose, setChoose }) {



    return (<>

        <S.Actividad>Cual fue tu actividad? {nameOption} </S.Actividad>

        <ContainerOption options={options} setOptions={setOptions} setNameOption={setNameOption} setChoose={setChoose} choose={choose} />

    </>)

}

//COmo trocar a cor da opcao sem trocar a cor das outras ?