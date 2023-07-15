import React from "react";


import Card from "../commons/Card";

const Home = ({ user, mentor }) => {
  return (
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <div class="h-32 rounded-lg">
      <Card mentor={mentor} />
    </div>

  </div>

  );
};

export default Home;
