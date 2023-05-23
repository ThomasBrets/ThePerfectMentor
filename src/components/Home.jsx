import React from "react";

import Navbar from "./Navbar";
import Card from "../commons/Card";
import Footer from "./Footer";

const Home = ({ user }) => {
  return (
    <div>
      <Navbar user={user}/>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
