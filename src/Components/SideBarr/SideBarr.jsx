import * as S from "./style.js"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo.jsx"


export default function SideBarr() {

    const { view, login } = useContext(appContext)



    return (<>
        <S.ContainerSideBarr view={view} >

            {/* <S.Perfil>
                <S.Image src={login.urlImage} />
                <S.Name>{login.name}</S.Name>
            </S.Perfil> */}
            <Logo/>
       

            {login.rol =="alumno" || login.rol =="profesor"  || login.rol =="tutor" || login.rol =="administrativo"  && (   
                <>
                    <Link to={`/subjects`} >
                <S.Box><ion-icon name="bookmarks"></ion-icon><S.Text>Asignaturas</S.Text></S.Box>
            </Link>
                 <Link to='/notifications' >
                <S.Box><ion-icon name="notifications"></ion-icon><S.Text>Notificaciones</S.Text></S.Box>
            </Link>
                  <Link to='/warnings' >
                <S.Box><ion-icon name="warning"></ion-icon><S.Text>Advertencias</S.Text></S.Box>
            </Link>
            <Link to="/tests" >
                <S.Box><ion-icon name="document"></ion-icon><S.Text>Examenes</S.Text></S.Box>
            </Link>            <Link to="/timeTable" >
                <S.Box><ion-icon name="time"></ion-icon><S.Text>Horario</S.Text></S.Box>
            </Link>
            <Link to='/attendance' >
                <S.Box> <ion-icon name="shuffle"></ion-icon><S.Text>Asistencia</S.Text></S.Box>
            </Link>
                </>           
         )}
        
            {login.rol =="alumno" || login.rol =="tutor"|| login.rol =="administrativo"  && (   <Link to='/events' >
                <S.Box><ion-icon name="calendar"></ion-icon><S.Text>Eventos</S.Text></S.Box>
            </Link> )}
         
            {login.rol =="alumno" || login.rol =="tutor" || login.rol =="administrativo"&& (   <Link to='/testsScore' >
                <S.Box><ion-icon name="clipboard"></ion-icon><S.Text>{login.rol=="alumno"?"Mis notas" : "Notas"}</S.Text></S.Box>
            </Link> )}
         
            {login.rol =="profesor"|| login.rol =="administrativo" && (
                <>
                 <Link to='/nfcRecord' >
                 <S.Box><ion-icon name="log-in"></ion-icon><S.Text>Registrar NFC</S.Text></S.Box>
             </Link>
                <Link to='/myStudents' >
                <S.Box><ion-icon name="people"></ion-icon><S.Text>Mis alumnos</S.Text></S.Box>
            </Link>
                </>
                
                )}
                 {login.rol =="profesor" || login.rol =="tutor"|| login.rol =="administrativo" && (   <Link to='/help' >
                <S.Box><ion-icon name="chatbubbles"></ion-icon><S.Text>Chat</S.Text></S.Box>
            </Link> )}
            {login.rol =="administrativo" && (   <Link to='/tdm' >
                <S.Box><ion-icon name="build"></ion-icon><S.Text>Gestión de datos tecnicos</S.Text></S.Box>
            </Link> )}     

          
      
        </S.ContainerSideBarr>
    </>)
}