import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import appContext from "./Contexts/AppContext.js";
import { useState , useEffect} from "react";
import LoginScreen from "./Pages/Login/LoginScreen.jsx";
import SignUpScreen from "./Pages/SignUp/SignUpScreen.jsx";
import SubjectsScreen from "./Pages/Subjects/SubjectsScreen.jsx";
import NotificationsScreen from "./Pages/Notifications/NotificationsScreen.jsx";
import TestsScreen from "./Pages/Tests/TestsScreen.jsx";
import WarningsScreen from "./Pages/Warnings/WarningsScreen.jsx";
import TimetableScreen from "./Pages/Timetable/Timetable.jsx";
import AttendanceScreen from "./Pages/Attendance/AttendanceScreen.jsx";
import EventsScreen from "./Pages/Events/EventsScreen.jsx";
import TestsScoreScreen from "./Pages/TestsScore/TestsScoreScreen.jsx";
import MyStudentsScreen from "./Pages/MyStudents/MyStudentsScreen.jsx";
import Themes from "./Components/Theme/Theme.js";
import { ThemeProvider } from "styled-components";
import Global from "./Components/Theme/Global.js";
import dotenv from "dotenv";
import NfcRecordScreen from "./Pages/NfcRecord/NfcRecordScreen.jsx";
import ChatScreen from "./Pages/EditPublishScreen.jsx/ChatScreen.jsx";
import TDMScreen from "./Pages/TDM/TDMScreen.jsx";
import ResetPasswordScreen from "./Pages/ResetPassword/ResetPasswordScreen.jsx";
import ForgotPasswordScreen from "./Pages/ForgotPassword/ForgotPasswordScreen.jsx";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(appContext);


  if (token) {
    return children; 
  }

  return <Navigate to="/" />;
};
export default function App() {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || '';
  });


  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]); 
  const [login, setLogin] = useState(() => {
    const storedLogin = localStorage.getItem('login');
    return storedLogin ? JSON.parse(storedLogin) : ''; 
  });

  useEffect(() => {
    if (login.id_usuario ) {
      localStorage.setItem('login', JSON.stringify(login)); 
    }
  }, [login]);

  //layout
  const [view, setView] = useState(true);
  const [viewNavBarr, setViewNavBarr] = useState("list-outline");
  const [appear, setAppear] = useState(false);
  const [desappear, setDesappear] = useState(true);

  //Local
  const [localizationName, setLocalizationName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [autocomplete, setAutocomplete] = useState("");

  //Theme
  const [theme, setTheme] = useState("light");

  //API
  const API_URI = "http://localhost:8080/";

  return (
    <>
      <appContext.Provider
        value={{
          API_URI,
          view,
          setView,
          token,
          setToken,
          login,
          setLogin,
          theme,
          setTheme,
          autocomplete,
          setAutocomplete,
          viewNavBarr,
          setViewNavBarr,
          appear,
          setAppear,
          desappear,
          setDesappear,
          latitude,
          setLatitude,
          longitude,
          setLongitude,
          setLocalizationName,
          localizationName,
        }}
      >
        <ThemeProvider theme={Themes[theme]}>
          <Global />
          <BrowserRouter>
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<LoginScreen />} />
              <Route path="/sign-up" element={<SignUpScreen />} />
              <Route
                path="/forgot-password"
                element={<ForgotPasswordScreen />}
              />
              <Route
                path="/reset-password/:token"
                element={<ResetPasswordScreen />}
              />

              {/* Rutas protegidas */}
              <Route
                path="/subjects"
                element={
                  <PrivateRoute>
                    <SubjectsScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <PrivateRoute>
                    <NotificationsScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/warnings"
                element={
                  <PrivateRoute>
                    <WarningsScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/tests"
                element={
                  <PrivateRoute>
                    <TestsScreen />
                  </PrivateRoute>
                }
              />

              <Route
                path="/timeTable"
                element={
                  <PrivateRoute>
                    <TimetableScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/attendance"
                element={
                  <PrivateRoute>
                    <AttendanceScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/events"
                element={
                  <PrivateRoute>
                    <EventsScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/testsScore"
                element={
                  <PrivateRoute>
                    <TestsScoreScreen />
                  </PrivateRoute>
                }
              />

              <Route
                path="/nfcRecord"
                element={
                  <PrivateRoute>
                    <NfcRecordScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/myStudents"
                element={
                  <PrivateRoute>
                    <MyStudentsScreen />
                  </PrivateRoute>
                }
              />

              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <ChatScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path="/tdm"
                element={
                  <PrivateRoute>
                    <TDMScreen />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </appContext.Provider>
    </>
  );
}

