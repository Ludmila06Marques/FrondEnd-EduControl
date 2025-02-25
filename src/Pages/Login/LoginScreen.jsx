import axios from "axios";
import Logo from "../../Components/Logo/Logo.jsx";
import * as S from "../../../src/Pages/Login/style.js";
import appContext from "../../Contexts/AppContext.js";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { setLogin, setTheme, API_URI, setToken } = useContext(appContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    const body = { email, password };
    e.preventDefault();
    try {
      setLoading(true);
      const promise = await axios.post(`${API_URI}login`, body);
      setLoading(false);
      setToken(promise.data.token);

      setLogin(promise.data.user);
      setTheme(promise.data.user.mode);

      navigate("/subjects");
    } catch (err) {
      setLoading(false)
      if (err.response) {
        toast.error(err.response.data.message || "Error al hacer login");
      } else {
        toast.error("Algo ha ido mal");
      }
    }
  }
  useEffect(() => {
    const reloadStyles = () => {
      document.querySelectorAll("link[rel='stylesheet']").forEach((link) => {
        link.href = link.href + "?v=" + new Date().getTime();
      });
    };
    reloadStyles();
  }, []);
  

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
  
  console.log("email: ", email);
  console.log("password: ", password);
  
  return (
    <form onSubmit={handleSubmit}>
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
          <S.LoginText>Iniciar sesión</S.LoginText>
        </S.ContainerInputsSection2>
  
        <S.ContainerInputsSection1>
          <S.InputEmail
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <S.InputPassword
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <S.LoginButton type="submit">Entrar</S.LoginButton>
          {process.env.REACT_APP_ONLY_DEV_MODE && (
            <Link to="/sign-up">
              <S.SendToSignUp>
                Aun no tienes cuenta ? Haz tu registro
              </S.SendToSignUp>
            </Link>
          )}
          <Link style={{ marginTop: "15px" }} to="/forgot-password">
            <S.SendToSignUp>Has olvidado tu contraseña?</S.SendToSignUp>
          </Link>
        </S.ContainerInputsSection1>
      </S.ContainerInputs>
    </div>
    <Toaster />
  </form>
  
  );
}
