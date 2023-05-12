import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./commons/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./commons/Footer";
import SinglePage from "./commons/SinglePage";
import Clases from "./commons/Clases";
import Publicar from "./commons/Publicar";
import UserPage from "./commons/UserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/single-page" element={<SinglePage />} />
        <Route path="/mis-clases" element={<Clases />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
