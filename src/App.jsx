import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import SingleCard from "./commons/SingleCard";
import Clases from "./components/Clases";
import Publicar from "./commons/Publicar";
import UserPage from "./components/UserPage";
import Secret from "./components/Secret";
import Navbar from "./components/Navbar";
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
    <div className="bg-gray-300">
      <Navbar user={user} />
      <Routes>
        <Route exact path="/" element={<Home user={user} mentor={mentor} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/single-card" element={<SingleCard />} />
        <Route path="/mis-clases" element={<Clases />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
