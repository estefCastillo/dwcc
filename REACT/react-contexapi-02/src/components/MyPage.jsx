import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

const initialLanguage = "es";
const initialAuth = null;

const translations = {
   es: {
      headerTitle: "Mi aplicación SIN Context API",
      headerSubtitle: "Mi cabecera",
      headerLigth: "Claro",
      headerDark: "Oscuro",
      buttonLogout: "Cerrar sesión",
      buttonLogin: "Iniciar sesión",
      mainContent: "Mi contenido principal",
      mainHello: "Hola usuari@",
      mainWelcome: "Bienvenid@ invitad@",
      footerTitle: "Mi pie de página",
   },
   gal: {
      headerTitle: "A miña aplicación SEN Context API",
      headerSubtitle: "A miña cabeceira",
      headerLigth: "Clariño",
      headerDark: "Escuro",
      buttonLogout: "Pechar sesión",
      buttonLogin: "Abrir sesión",
      mainContent: "O meu contido principal",
      mainHello: "Ola usuari@",
      mainWelcome: "Benvid@ invitad@",
      footerTitle: "O meu pé de páxina",
   },
};

function MyPage() {
   const [language, setLanguage] = useState(initialLanguage);
   const [auth, setAuth] = useState(initialAuth);

   const [texts, setTexts] = useState(translations[language]);

   const handleLanguage = (ev) => {
      setLanguage((language) => {
         language = ev.target.value;
         setTexts(translations[language]);
         return language;
      });
   };
   const handleAuth = (ev) => {
      auth ? setAuth(null) : setAuth(true);
   };

   return (
      <ThemeProvider>
         <div className="my-page">
            <Header
               auth={auth}
               texts={texts}
               handleLanguage={handleLanguage}
               handleAuth={handleAuth}
            />
            <Main auth={auth} texts={texts} />
            <Footer texts={texts} />
         </div>
      </ThemeProvider>
   );
}

export default MyPage;
