import * as S from "./style.js"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import appContext from "../../Contexts/AppContext.js"


export default function Publish({ coment, urlImage, rateNote, localizationName, user, id, latitude, longitude }) {

    const { login, API_URI , token} = useContext(appContext)

    const navigate = useNavigate()



    async function deleting() {

        const headers={
            headers:{
          Authorization:`Bearer ${token}`
          }
         }
        try {
            await axios.delete(`${API_URI}publish/${id}` ,  headers)


        } catch (error) {
            alert(error)
        }
        setOpenModal(false)
    }
    function goToProfile() {
        navigate(`/profile/${user.id}`)
    }

    const [appearSettings, setAppearSettings] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    function toggleButton() {
        setAppearSettings(!appearSettings)
    }

    return (<>
        <S.ContainerPublish>
            <S.ContainerUserPublish>
                <S.Photo src={urlImage} />

                <S.Coment>
                    <S.Text>{coment}</S.Text>
                </S.Coment>
            </S.ContainerUserPublish>
            <S.UserInfo>

                <S.PublishInfo>
                    <S.UserImage src={user.urlImage} />
                    <S.UserName onClick={goToProfile} >{user.name}</S.UserName>
                </S.PublishInfo>

                <a href={`https://maps.google.com/?q=${latitude},${longitude}`} target='_blank' >
                    <S.Localization  >
                        <S.LocalIcon><ion-icon name="location-outline"></ion-icon></S.LocalIcon>
                        <S.LocalName>{localizationName}</S.LocalName>
                    </S.Localization> </a>
            </S.UserInfo>
            <S.Rate> <S.Emoji >{rateNote == "4" ? <h1>😀</h1> : rateNote == "3" ? <h1>🙂</h1> : rateNote == "2" ? <h1>😐</h1> : rateNote == "1" ? <h1>😞</h1> : "?"}</S.Emoji></S.Rate>
            {login.id == user.id ?
                <S.Actions>
                    <S.Dots>
                        <ion-icon onClick={toggleButton} name="ellipsis-horizontal-outline"></ion-icon>
                    </S.Dots>
                    <S.Settings appearSettings={appearSettings} >
                        <Link to={`/editPublish/${id}`}>
                            <ion-icon name="pencil-sharp"></ion-icon>
                        </Link>
                        <ion-icon onClick={() => setOpenModal(true)} name="trash-outline"></ion-icon>
                    </S.Settings>
                </S.Actions> : ''}

        </S.ContainerPublish>

        <S.Overlay openModal={openModal} >
            <S.ContainerModal>
                <S.TextModal>Tem certeza que deseja excluir a publicacao?</S.TextModal>
                <S.Buttons>
                    <S.Yes onClick={deleting} >Yes</S.Yes>

                </S.Buttons>
                <S.No onClick={() => setOpenModal(false)} ><ion-icon name="close-circle-outline"></ion-icon></S.No>
            </S.ContainerModal>
        </S.Overlay>
    </>)
}

