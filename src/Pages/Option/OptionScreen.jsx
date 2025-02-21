import * as S from "./style.js"
import NavBarr from "../../Components/NavBarr/NavBarr.jsx"
import SideBarr from "../../Components/SideBarr/SideBarr.jsx"
import Publish from "../../Components/Publish/Publish.jsx"
import More from "../../Components/More/More.jsx"



export default function OptionScreen(){
    return(<>
     <NavBarr/>
    <SideBarr />
    <More/>
    <Publish/>
   
    </>)
}

