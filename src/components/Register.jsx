import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      mentor: false,
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:3001/api/auth/register", values)
        .then((response) => {
          console.log("Registro exitoso");
        })
        .catch((error) => {
          console.log("Error al registrar");
        });
    },
  });

  return (
    <section class="bg-base-100 pb-10 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="../assets/usuario.png"
            alt="logo"
          ></img>
          Registrate
        </a>
        <div class="w-full bg-base-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Nombre
                </label>
                <input
                  placeholder="Ej: Oscar"
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Apellido
                </label>
                <input
                  placeholder="Ej: Beltran"
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nombre@gmail.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  placeholder="●●●●●●●●"
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div>
                <label
                  htmlFor="mentor"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Mentor
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="mentor"
                    id="mentor"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={formik.values.mentor}
                    onChange={formik.handleChange}
                  />
                  <span className="ml-2">¿Eres mentor?</span>
                </label>
              </div>
              <button
                type="submit"
                class="w-full text-white btn-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Crear mi cuenta
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?{" "}
                <a
                  href="/login"
                  class="font-medium hover:underline dark:text-primary-500"
                >
                  Inicia sesión aqui
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
