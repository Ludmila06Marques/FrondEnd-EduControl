import axios from "axios";
import Logo from "../../Components/Logo/Logo.jsx";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import appContext from "../../Contexts/AppContext.js";
import { useContext, useEffect, useState } from "react";
import Select from 'react-select';
import UploadImage from "./UploadImage.jsx";
import { ClipLoader } from "react-spinners";
import { toast, Toaster } from 'react-hot-toast';
export default function SignUpScreen() {
  const navigate = useNavigate();
  const { API_URI } = useContext(appContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    middleName: "",
    lastName: "",
    phone: null,
    ddi: null,
    rolId: "",
    photo: null,
  });

  const [rol, setRol] = useState([]);
  const [loading, setLoading] = useState(false);

  function clear() {
    setUser({
      email: "",
      password: "",
      name: "",
      middleName: "",
      lastName: "",
      phone: null,
      ddi: null,
      rolId: "",
      photo: "",
    });
  }

  async function signup(e) {
    console.log("mandando")
    e.preventDefault();
    setLoading(true)
    const body = {
      ...user,
      photoType: user?.photo?.type || "",
      photo: user?.photo?.name || "",
      phone: formatPhoneNumber(user.phone, user.ddi),
      rolId: Number(user.rolId),
    };
    delete body.ddi;
    console.log("body para sign-up", body);
    try {
      console.log("body para sign-up", body);
      const promise = await axios.post(`${API_URI}sign-up`, body);   
      setLoading(false)
      toast.success("Usuario registrado correctamente");
      navigate("/");
    } catch (error) {
        setLoading(false)
        if (error.response) {
          toast.error(error.response.data.message || "Error al el registro");
        } else {
          toast.error("Algo ha ido mal");
        }
    }
  }

  const selectRol = (rol) => {
    setUser((prevUser) => ({
      ...prevUser,
      rolId: rol.value,
    }));
  };

  const formatPhoneNumber = (phone, ddi) => {
    return `${ddi || ""}/${phone || ""}`;
  };

  // Pegar os paises da API do IBGE
  useEffect(async () => {
    try {
      setLoading(true);
      const promise = await axios.get(`${API_URI}rol`);
      setRol(promise.data);
      setLoading(false);
    } catch (error) {
      alert(Error);
    }
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

  return (
    <>
      <Logo />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> 
          <form  onSubmit={signup}>
        <S.ContainerInputs>
          <S.LoginText>Registrar-se</S.LoginText>
       


          
          <UploadImage setUser={setUser} user={user} />
          <S.InputName
            type="text"
            placeholder="Nombre"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                name: e.target.value,
              }))
            }
            value={user.name}
            required
          />
          <S.InputName
            type="text"
            placeholder="Primer apellido"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                middleName: e.target.value,
              }))
            }
            value={user.middleName}
            required
          />
          <S.InputName
            type="text"
            placeholder="Segundo apellido"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                lastName: e.target.value,
              }))
            }
            value={user.lastName}
            required
          />
          <S.PhoneContainer>
            <S.InputDDI
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  ddi: e.target.value,
                }))
              }
              value={user.ddi}
              required
            >
              <option value="+1">+1 (EUA)</option>
              <option value="+44">+44 (Reino Unido)</option>
              <option value="+55">+55 (Brasil)</option>
              <option value="+34">+34 (Espanha)</option>
            </S.InputDDI>
            <S.InputPhone
              type="number"
              placeholder="Número de teléfono"
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  phone: e.target.value,
                }))
              }
              value={user.phone}
              required
            />
          </S.PhoneContainer>

          <S.ContainerInputsCity>
            <S.ContainerSelect>
              <Select
                defaultValue={{ label: "Cual es tu rol?", value: "empty" }}
                options={rol === undefined ? [] : rol.map((e) => ({ label: e.rol.toUpperCase(), value: e.id_rol }))}
                onChange={selectRol}
                required
              />
            </S.ContainerSelect>
          </S.ContainerInputsCity>

          <S.InputEmail
            type="text"
            placeholder="Email"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                email: e.target.value,
              }))
            }
            value={user.email}
            required
          />
          <S.InputPassword
            type="password"
            placeholder="Contraseña"
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                password: e.target.value,
              }))
            }
            value={user.password}
            required
          />

          <S.SignUpButton type="submit" >
            Registrar-se
          </S.SignUpButton>
           
          <Link to="/">
            <S.SendToLogin>Ya tienes cuenta? Entra!</S.SendToLogin>
          </Link>
        </S.ContainerInputs>
         </form>
      </div>
      <Toaster/>
    </>
  );
}
