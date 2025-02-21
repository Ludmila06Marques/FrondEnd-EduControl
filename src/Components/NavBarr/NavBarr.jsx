import * as S from "./style.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


export default function NavBarr() {
    const navigate = useNavigate()

    const { setLogin, setTheme, view, setView , viewNavBarr , setViewNavBarr, appear, setAppear , desappear ,setDesappear} = useContext(appContext)


 

    function openCloseSideBarr() {

        if (view === false && viewNavBarr === "list-outline") {
            setView(true)
            setViewNavBarr("return-down-back-outline")
        } else {
            setView(false)
            setViewNavBarr("list-outline")
        }

    }
    function logout() {

        setView(false)
        setViewNavBarr("list-outline")
        setLogin([])
        setTheme('ligth')
        navigate('/')
    }

    function goHome() {
        setAppear(false)
        setDesappear(true)
        setView(false)
        setViewNavBarr("list-outline")
        navigate('/home')
    }

    return (<>
        <S.ContainerNavBarr>
            <S.Separe>

                <ion-icon onClick={openCloseSideBarr} name={viewNavBarr}></ion-icon>

            </S.Separe>
            <S.SepareTwo>
                <S.Back appear={appear}>
                    <ion-icon onClick={goHome} name="chevron-back-outline"></ion-icon>
                </S.Back>

                <S.Out desappear={desappear}>
                    <ion-icon onClick={logout} name="exit-outline"></ion-icon>
                </S.Out>
            </S.SepareTwo>
        </S.ContainerNavBarr>
    </>)
}