
import axios from "axios";
import { useContext, useState , useEffect} from "react"
import * as S from "./style.js"
import Logo from "../../Components/Logo/Logo.jsx";
import {  Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import appContext from "../../Contexts/AppContext.js"
import { toast, Toaster } from 'react-hot-toast';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const {  API_URI, login } = useContext(appContext)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const reloadStyles = () => {
      document.querySelectorAll("link[rel='stylesheet']").forEach((link) => {
        link.href = link.href + "?v=" + new Date().getTime();
      });
    };
    reloadStyles();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post(`${API_URI}forgot-password`, { email });
      toast.success(res.data.message); 
      setLoading(false)
    } catch (err) {
      setLoading(false)
      if (err.response) {
        toast.error(err.response.data.message || "Error al enviar correo");
      } else if (err.request) {
        toast.error("Sin respuesta. Intente de nuevo más tarde");
      } else {
        toast.error("Sin respuesta. Intente de nuevo más tarde");
      }
    }
  };
  
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw", 
        }}
      >
        <ClipLoader size={200} color="#8B9EF5" />
      </div>
    );
  }
 
  return (
 <>
      <S.WelcomeText>Binvenido a EduControl</S.WelcomeText>
      <Logo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <S.ContainerInputs>
          <S.ContainerInputsSection2>
            <S.LoginText>Redefinir contraseña</S.LoginText>
          </S.ContainerInputsSection2>

          <S.ContainerInputsSection1>
            <S.InputEmail
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></S.InputEmail>
             <S.LoginButton onClick={handleSubmit}>Enviar correo</S.LoginButton>
               <Link style={{ marginTop: "15px" }} to="/">
                           <S.SendToSignUp>Volver a login</S.SendToSignUp>
                         </Link>
          </S.ContainerInputsSection1>
        </S.ContainerInputs>
      </div>
      <Toaster/>
    </>
  );
}
