import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Card from "./commons/Card"
import Navbar from "./commons/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./commons/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
