import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Secret from "./components/Secret";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

///
function App() {
  const [user, setUser] = useState("");
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      const userLogged = JSON.parse(user);
      setUser(userLogged);
    }
  }, []);

  const mentorURL = "http://localhost:3001/api/users/search";

  useEffect(() => {
    axios.get(mentorURL).then((response) => {
      setMentor(response.data);
    });
  }, []);
  if (!mentor) return null;

  return (
    <div className="">
      <Navbar user={user} />
      <Routes>
        <Route exact path="/" element={<Home user={user} mentor={mentor} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
