import React from "react";


import Card from "../commons/Card";

const Home = ({ user, mentor }) => {
  return (
    <div>
      <Card mentor={mentor} />
    </div>
  );
};

export default Home;
