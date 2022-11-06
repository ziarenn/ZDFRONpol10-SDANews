import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import UserPage from "./components/UserPage/UserPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { authContext } from "./helpers/authContext";
// localhost:3000/login

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <authContext.Provider value={loggedIn}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </div>
    /* 1 grupa: elementy ktore maja sie caly czas wyswietlac, komponenty grupy 1 będą umiejscowione bezpośrednio w komponencie BrowserRouter */
    /* 2 grupa: elementy ktore maja sie zmieniac, elementy 2 grupy będą obwinięte w element Routes i Route */
  );
}

export default App;
