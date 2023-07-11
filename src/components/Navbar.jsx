import React from "react";


const Navbar = ({user}) => {
 console.log("USER", user)
  return (
    <div className="navbar bg-gray-700 flex flex-col sm:flex-row">
      <div className="flex-1 order-first sm:order-none">
        <a className="btn btn-ghost hover:bg-gray-700 text-amber-400 normal-case text-4xl hover:text-amber-500" href="http://localhost:3000/">
          ThePerfectMentor
        </a>
      </div>
      <div className="flex-1 sm:flex-none">
          <a
            className="btn btn-ghost hover:bg-gray-700 text-amber-400 normal-case text-lg hover:text-amber-500"
            href="http://localhost:3000/auth/login"
          >
            Login
          </a>
        </div>
        <div className="flex-1 sm:flex-none">
          <a
            className="btn btn-ghost hover:bg-gray-700 text-amber-400 normal-case text-lg hover:text-amber-500"
            href="http://localhost:3000/register"
          >
            Register
          </a>
        </div>
      <div className="float-left">
        <div className="flex-1  sm:flex-none">
          <a className="btn btn-ghost hover:bg-gray-700 text-amber-400 normal-case text-lg hover:text-amber-500">Buscar mi mentor</a>
        </div>
        <div className="flex-1 sm:flex-none">
          <a
            className="btn btn-ghost hover:bg-gray-700 text-amber-400 normal-case text-lg hover:text-amber-500"
            href="http://localhost:3000/mis-clases"
          >
            {user.email}
          </a>
        </div>
        <div className="flex-1 sm:flex-none">
          <a
            className="btn btn-ghost hover:bg-gray-700 text-amber-400 normal-case text-lg hover:text-amber-500"
            href="http://localhost:3000/publicar"
          >
            Publicar
          </a>
        </div>
        <div className="flex-none sm:flex-1">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://lh3.googleusercontent.com/ogw/AAEL6sgS4FQP1C_Uc1kP_WLnsfI2oZ7Fjuj77knwXzEJ=s32-c-mo" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-amber-600 rounded-box w-52 sm:absolute sm:right-0 sm:mt-0 sm:mr-2"
            >
              <li>
                <a className="justify-between text-base">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="text-base" href="http://localhost:3000/user-page">Settings</a>
              </li>
              <li>
                <a className="text-base">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;