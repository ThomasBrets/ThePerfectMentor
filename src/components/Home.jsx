import React from "react";


import Cards from "../commons/Cards";


const Home = ({ user, mentor }) => {
  return (
    <div className="container mx-auto mt-5 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-2">
      <div className="bg-Amber-300">A</div>
      {/* <Cards mentor={mentor} /> */}
    </div>
    </div>
  );
};

export default Home;
