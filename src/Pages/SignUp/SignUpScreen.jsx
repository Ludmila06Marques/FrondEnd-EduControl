import axios from "axios"
import Logo from "../../Components/Logo/Logo.jsx"
import * as S from "./style"
import { Link , useNavigate} from "react-router-dom"
import appContext from "../../Contexts/AppContext.js"
import { useContext, useEffect, useState } from "react"
import Select from 'react-select'



export default function SignUpScreen() {

    const navigate = useNavigate()
    const { API_URI } = useContext(appContext)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [urlImage, setUrlImage] = useState("")
    const [countries, setCountries] = useState([])

    function clear() {
        setEmail("")
        setPassword("")
        setName("")
        setCountry("")
        setUrlImage("")
    }

    async function signup() {
        const body = { email, password, name, country, urlImage }

        try {
            const promise = await axios.post(`${API_URI}sign-up`, body)
            clear()
            navigate("/")
        } catch (error) {
            alert(error)
        }

    }

    //Pegar os paises da API do IBGE
    useEffect(async () => {
        try {
            const promise = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/paises')

            setCountries(promise.data)
        } catch (error) {
            alert(Error)
        }

    }, [countries])

    const selectCountry = (country) => {

        setCountry(country.label)
    }


    return (<>

        <Logo />
        <S.ContainerInputs>
            <S.InputName type="text" placeholder="Nombre de usuario" onChange={(e) => setName(e.target.value)} value={name}></S.InputName>


            <S.ContainerInputsCity>

                <S.ContainerSelect>
                    <Select
                        defaultValue={{ label: "De  donde eres?", value: "empty" }}
                        options={countries === undefined ? "" : countries.map(e => ({ label: e.nome, value: e.value }))}
                        onChange={selectCountry}


                    />
                </S.ContainerSelect>
            </S.ContainerInputsCity>


            <S.InputImage type="url" placeholder="Tu mejor foto" onChange={(e) => setUrlImage(e.target.value)} value={urlImage}></S.InputImage>
            <S.InputEmail type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} ></S.InputEmail>
            <S.InputPassword type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}></S.InputPassword>

            <S.SignUpButton onClick={signup} >Registrar-se</S.SignUpButton>

            <Link to="/" >
                <S.SendToLogin>Ya tienes cuenta?Entre!</S.SendToLogin>
            </Link>
        </S.ContainerInputs>


    </>)
}



