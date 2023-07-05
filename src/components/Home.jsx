import React from "react";

import Navbar from "./Navbar";
import Card from "../commons/Card";
import Footer from "./Footer";

const Home = ({ user, mentor }) => {
  return (
    <div className="bg-yellow-100">
      <Navbar user={user}/>
      <Card mentor={mentor} />
      <Footer />
    </div>
  );
};

export default Home;
