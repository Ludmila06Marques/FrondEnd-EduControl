import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { Link } from "react-router-dom"


export default function SideBarr() {

    const { view, login } = useContext(appContext)




    return (<>
        <S.ContainerSideBarr view={view} >

            <S.Perfil>
                <S.Image src={login.urlImage} />
                <S.Name>{login.name}</S.Name>
            </S.Perfil>
            <Link to={`/profile/${login.id}`} >
                <S.Box><ion-icon name="person-outline"></ion-icon><S.Text>Mi perfil</S.Text></S.Box>
            </Link>
            <Link to='/visits' >
                <S.Box><ion-icon name="flag-outline"></ion-icon><S.Text>Mis visitas</S.Text></S.Box>
            </Link>
            <Link to='/places' >
                <S.Box><ion-icon name="map-outline"></ion-icon><S.Text>Puntos turisticos</S.Text></S.Box>
            </Link>

            <Link to='/settings' >  <S.Box><ion-icon name="settings-outline"></ion-icon><S.Text>Ajustes</S.Text></S.Box>
            </Link>

            <Link to="/aboutUs" >
                <S.Box><ion-icon name="information-circle-outline"></ion-icon><S.Text>Sobre nosotros</S.Text></S.Box>
            </Link>
            <Link to='/help' >
                <S.Box><ion-icon name="help-outline"></ion-icon><S.Text>Ayuda</S.Text></S.Box>
            </Link>

        </S.ContainerSideBarr>
    </>)
}