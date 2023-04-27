import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 flex flex-col sm:flex-row">
      <div class="flex-1 order-first sm:order-none">
        <a
          class="btn btn-ghost normal-case text-xl"
          href="http://localhost:5173/"
        >
          ThePerfectMentor
        </a>
      </div>
      <div class="float-left">
        <div class="flex-1 sm:flex-none">
          <a class="btn btn-ghost normal-case text-md">Buscar mi mentor</a>
        </div>
        <div class="flex-1 sm:flex-none">
          <a
            class="btn btn-ghost normal-case text-md"
            href="http://localhost:5173/mis-clases"
          >
            Mis clases
          </a>
        </div>
        <div class="flex-1 sm:flex-none">
          <a
            class="btn btn-ghost normal-case text-md"
            href="http://localhost:5173/publicar"
          >
            Publicar
          </a>
        </div>
        <div class="flex-none sm:flex-1">
          <div class="dropdown dropdown-end">
            <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://lh3.googleusercontent.com/ogw/AAEL6sgS4FQP1C_Uc1kP_WLnsfI2oZ7Fjuj77knwXzEJ=s32-c-mo" />
              </div>
            </label>
            <ul
              tabIndex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 sm:absolute sm:right-0 sm:mt-0 sm:mr-2"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
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
    </div>
  );
};

export default Navbar;
