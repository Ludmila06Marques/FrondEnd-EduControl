import ProfileNavBarr from "../../Components/ProfileNavBarr/ProfileNavBarr";
import appContext from "../../Contexts/AppContext";
import { useContext } from "react";
import EditPublish from "../../Components/EditPublish/EditPublish";



export default function EditPublishScreen(){

const {login}=useContext(appContext)

    return(<>
    <ProfileNavBarr  id={login.id} />
    <EditPublish/>
    </>)
}