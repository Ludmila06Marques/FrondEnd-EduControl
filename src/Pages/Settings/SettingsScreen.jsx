import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr.jsx"
import OptionsToSetting from "../../Components/OptionsToSetting/OptionsToSetting"
import appContext from "../../Contexts/AppContext.js"
import { useContext } from "react"


export default function SettingsScreen() {
    const { login } = useContext(appContext)

    return (<>
        <ProfileNavBarr id={login.id} />

        <OptionsToSetting login={login} />
    </>)
}