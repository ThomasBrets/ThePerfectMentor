import React from "react";


import Card from "../commons/Card";
import Footer from "./Footer";

const Home = ({ user, mentor }) => {
  return (
    <div>
      <Card mentor={mentor} />
      <Footer />
    </div>
  );
};

export default Home;
