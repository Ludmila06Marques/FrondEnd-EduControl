import * as S from "./style.js"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Switch from "../Swich/Switch.jsx"
import { useState, useContext } from "react"
import appContext from "../../Contexts/AppContext.js"


export default function OptionsToSetting({ login }) {

    const [openModal, setOpenModal] = useState(false)
    const { API_URI } = useContext(appContext)
    const navigate = useNavigate()

    async function deleteAcount() {
        console.log(login.id)

        try {
            await axios.delete(`${API_URI}user/${login.id}`)

            navigate('/')
        } catch (error) {
            alert(error)
        }

    }
    return (<>

        <S.ContainerOptions>
            <S.Icon><ion-icon name="pencil-outline"></ion-icon></S.Icon>
            <Link to={`/edit/${login.id}`} >
                <S.Option>Editar perfil</S.Option>
            </Link>
        </S.ContainerOptions>

        <S.ContainerOptions>
            <S.Icon><ion-icon name="moon"></ion-icon></S.Icon>
            <S.Option>Tema oscuro</S.Option>
            <Switch />
        </S.ContainerOptions>

        <S.ContainerOptions onClick={() => setOpenModal(true)}>
            <S.Icon><ion-icon name="trash-outline"></ion-icon></S.Icon>
            <S.Option   >Borrar cuenta</S.Option>
        </S.ContainerOptions>
        <S.Overlay openModal={openModal} >
            <S.ContainerModal>
                <S.TextModal>Estas seguro@ de que deseas borrar tu cuenta ? </S.TextModal>
                <S.Buttons>
                    <S.Yes onClick={deleteAcount} >Si</S.Yes>

                </S.Buttons>
                <S.No onClick={() => setOpenModal(false)} ><ion-icon name="close-circle-outline"></ion-icon></S.No>
            </S.ContainerModal>
        </S.Overlay>
    </>)
}