import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="http://127.0.0.1:5173/">ThePerfectMentor</a>
      </div>
      <div className="flex-2">
        <a className="btn btn-ghost normal-case text-lg" href="http://127.0.0.1:5173/register">Registrate</a>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg" href="http://127.0.0.1:5173/login">Inicia Sesión</a>
      </div>
      <div className="flex-2">
        <a className="btn btn-ghost normal-case text-md">Buscar mi mentor</a>
      </div>
      <div className="flex-2">
        <a className="btn btn-ghost normal-case text-md" href="http://127.0.0.1:5173/mis-clases">Mis clases</a>
      </div>
      <div className="flex-2">
        <a className="btn btn-ghost normal-case text-md" href="http://127.0.0.1:5173/publicar">Publicar</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://lh3.googleusercontent.com/ogw/AAEL6sgS4FQP1C_Uc1kP_WLnsfI2oZ7Fjuj77knwXzEJ=s32-c-mo" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
