import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
// localhost:3000/login

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
    /* 1 grupa: elementy ktore maja sie caly czas wyswietlac, komponenty grupy 1 będą umiejscowione bezpośrednio w komponencie BrowserRouter */
    /* 2 grupa: elementy ktore maja sie zmieniac, elementy 2 grupy będą obwinięte w element Routes i Route */
  );
}

export default App;
