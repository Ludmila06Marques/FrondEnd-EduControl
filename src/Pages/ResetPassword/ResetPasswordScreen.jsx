import { useParams } from "react-router-dom";
import Logo from "../../Components/Logo/Logo.jsx";
import axios from "axios";
import { useContext, useState , useEffect} from "react";
import appContext from "../../Contexts/AppContext.js";
import { useNavigate, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast, Toaster } from 'react-hot-toast';
export default function ResetPasswordScreen() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { API_URI, login } = useContext(appContext);
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
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setLoading(true)
      const res = await axios.post(`${API_URI}reset-password`, { password }, headers);
      setLoading(false)
      setMessage(res.data.message);
      navigate("/");
    } catch (err) {
      setLoading(false)
      if (err.response) {
        // O servidor respondeu com um status de erro
        setMessage(err.response.data.message || "Erro ao enviar email");
        toast.error(err.response.data.message || "Error al redefnir contraseña");
      } else if (err.request) {
        // A requisição foi feita, mas não houve resposta do servidor
        setMessage("Sem resposta do servidor. Tente novamente.");
        toast.error("Sem resposta do servidor. Tente novamente.");
      } else {
        // Outro erro ocorreu ao configurar a requisição
        setMessage("Erro inesperado. Tente novamente.");
        toast.error("Erro inesperado. Tente novamente.");
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
      <div style={{ boxSizing:"border-box",backgroundColor: "#dad5fe", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", fontSize: "50px", fontWeight: "bold", marginTop: "100px", color: "#3f48c3" }}>
          Bienvenido a EduControl
        </h1>
        <Logo />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", borderRadius: "5px", width: "400px", height: "250px" }}>
            <div>
              <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", color: "#3f48c3" }}>
                Redefinir contraseña
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ width: "256px", height: "25px", marginBottom: "10px", borderRadius: "8px", border: "solid 1px #94a5cb", padding: "10px" }}
              />
              <button
                onClick={handleSubmit}
                style={{ width: "256px", height: "45px", marginTop: "10px", borderRadius: "8px", border: "none", backgroundColor: "#8b9ef5", marginBottom: "7px", color: "white", fontSize: "20px", cursor: "pointer" }}
              >
                Guardar nueva contraseña
              </button>
              <Link style={{ marginTop: "15px" }} to="/">
                <h1 style={{ textDecoration: "underline", color: "#3f48c3", fontWeight: "bold", cursor: "pointer" , fontSize:"15px"}}>
                  Volver a login
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
}