import axios from "axios"
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useState } from "react"
import { useNavigate ,Link} from "react-router-dom"




export default function LoginScreen() {
    const navigate = useNavigate()
    const { setLogin, setTheme, API_URI , setToken  } = useContext(appContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    async function toLogin() {
        const body = { email, password }


        try {

            const promise = await axios.post(`${API_URI}login`, body)
            setToken(promise.data.token)
         
            setLogin(promise.data.user)
            setTheme(promise.data.user.mode)
            
            navigate("/home")
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (<>

        <Logo />
        <S.ContainerInputs>
            <S.InputEmail type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} ></S.InputEmail>
            <S.InputPassword type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}></S.InputPassword>
            <S.LoginButton onClick={toLogin}>Entrar</S.LoginButton>
            <Link to="/sign-up" >
                <S.SendToSignUp>Aun no tienes cuenta ? Haz tu registro</S.SendToSignUp>
            </Link>
        </S.ContainerInputs>


    </>)
}
